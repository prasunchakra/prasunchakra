import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediumComponent } from '../templates/medium/medium.component';
import { TweeterComponent } from '../templates/tweeter/tweeter.component';
import { Category, Subcategory } from '../utils/enums';
import { ProjectsComponent } from '../templates/projects/projects.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf,MediumComponent,TweeterComponent,ProjectsComponent],
  template: `
  @if (subcategory === 'Medium') {
    <app-medium [category]="category"></app-medium>
  }
  @if (subcategory === 'Project') {
    <app-projects [category]="category"></app-projects>
  }
  `,
  styles: [
  ],
})
export class ProjectDetailsComponent {
  category: Category = Category.OperatingSystem;
  subcategory: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') as Category;
      this.subcategory = params.get('subcategory') as Subcategory;
      if (!Object.values(Category).includes(this.category)) {
        this.router.navigate(['/']);
        return;
      }
    });
  }

}
