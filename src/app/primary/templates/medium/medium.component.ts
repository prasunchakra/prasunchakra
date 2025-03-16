import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Category, Subcategory } from '../../utils/enums';
import { categoryName } from '../../utils/constants';
import { MediumPost } from '../../utils/interfaces';

@Component({
  selector: 'app-medium',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './medium.component.html',
  styleUrl: './medium.component.scss'
})
export class MediumComponent implements OnInit{
  @Input() category: Category = Category.OperatingSystem;
  @Input() subcategory: Subcategory = Subcategory.Medium; 
  window: Window = window;
  mediumPosts: MediumPost[] = [];
  mediumUsername = 'prasunchakra';
  _categoryName = categoryName[Category.OperatingSystem];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchMediumPosts(this.category);
  }

  fetchMediumPosts(prefix: string): void {
    const rssFeedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${this.mediumUsername}`;
    let prefixRegex: RegExp;
    const imgSrcRegex = /<img[^>]+src=["'](https:\/\/cdn-images-1\.medium\.com\/[^"']+)["']/; 
    if(prefix === Category.OperatingSystem){
      prefixRegex = /^\[OS:(\d{1,2}|100)\]\s*/;
      this._categoryName = categoryName[Category.OperatingSystem];
    }else if(prefix === Category.ComputerNetworking){
      prefixRegex = /^\[CN:(\d{1,2}|100)\]\s*/;
      this._categoryName = categoryName[Category.ComputerNetworking];
    }else if(prefix === Category.Cryptography){
      prefixRegex = /^\[Crypt:(\d{1,2}|100)\]\s*/;
      this._categoryName = categoryName[Category.Cryptography];
    }

    this.http.get<any>(rssFeedUrl).subscribe(response => {
      if (response.status === 'ok') {
        this.mediumPosts = response.items
        .filter((item: any) => prefixRegex.test(item.title))  
        .map((item: any) => {
          const match = item.title.match(prefixRegex);
          const seriesNumber = match ? parseInt(match[1], 10) : 0; 
          const imgMatch = item.content.match(imgSrcRegex);
          const thumbnail = imgMatch ? imgMatch[1] : 'https://placehold.co/600x400/000000/FFF';
          return {
            title: item.title.replace(prefixRegex, '').trim(),
            link: item.link,
            pubDate: new Date(item.pubDate).toDateString(),
            thumbnail: thumbnail,
            seriesNumber: seriesNumber
          };
        })
        .sort((a: any, b: any) => a.seriesNumber - b.seriesNumber);
      }
    });
  }
}
