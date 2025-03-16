import { Component, Input } from '@angular/core';
import { Category, Subcategory } from '../../utils/enums';
import { categoryName } from '../../utils/constants';

interface IProjectDetails {
  heading: string;
  subHeading: string;
  image: string;
  backendRepo: string;
  frontendRepo: string;
  backendRepoName: string;
  frontendRepoName: string;
  description: string;
  websiteUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() category: Category = Category.InQuizitive;
  @Input() subcategory: Subcategory = Subcategory.Project;   
  _categoryName  = categoryName[this.category];
  selectedProject: IProjectDetails = {
    heading: 'Work in progress',
    subHeading: 'Project',
    image: '',
    backendRepo: '',
    frontendRepo: '',
    backendRepoName: '',
    frontendRepoName: '',
    description: '',
    websiteUrl: '',
  };
}
