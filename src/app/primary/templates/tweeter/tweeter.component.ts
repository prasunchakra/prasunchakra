import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweeter',
  standalone: true,
  imports: [],
  templateUrl: './tweeter.component.html',
  styleUrl: './tweeter.component.scss'
})
export class TweeterComponent {
  tweetId='1892063392904642864';

  ngAfterViewInit() {
    // Load Twitter script dynamically
    if (!(window as any)['twttr']) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any)['twttr'].widgets.load();
    }
  }
}
