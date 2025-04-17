import { Component } from '@angular/core';
import { NgIf, NgClass, NgFor } from '@angular/common';

interface Milestone {
  name: string;
  completed: boolean;
}

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  project: string;
}
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf, NgClass, NgFor],
  template:` 
  <div class="max-w-5xl mx-auto w-full px-4 py-8 font-sans text-gray-800">
      <!-- Hero Section -->
      <header class="text-center mb-12 bg-gradient-to-br from-violet-900 to-violet-700 rounded-xl p-8 shadow-lg">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 text-white">
          Transforming Potential into Performance
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-violet-100">
          Build Talent with Inquizitive, Monetize with Prosperix.
        </p>
      </header>

      <!-- Project Intro Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <!-- InQuizitive Card -->
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-1 border-t-4 border-violet-400" id="inquizitive">
          <div class="mb-4">
            <h2 class="text-2xl font-semibold mb-2">InQuizitive</h2>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">#Quiz</span>
              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">#Courses</span>
              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">#LiveClasses</span>
              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">#Assessments</span>
            </div>
          </div>
          <div>
            <p class="mb-2">A next-generation AI-powered learning platform to:</p>
            <ul class="list-disc ml-5 text-gray-700 space-y-1">
              <li>Coming Soon</li>
              <li>Coming Soon</li>
              <li>Coming Soon</li>
              <li>Coming Soon</li>
            </ul>
          </div>
        </div>

        <!-- Prosperix Card -->
        <div class="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-1 border-t-4 border-violet-400" id="Prosperix">
          <div class="mb-4">
            <h2 class="text-2xl font-semibold mb-2">Prosperix</h2>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">#Budgeting</span>
              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">#Freelance</span>
              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">#SideGigs</span>
              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">#Investing</span>
            </div>
          </div>
          <div>
            <p class="mb-2">AI-powered financial empowerment platform that helps you:</p>
            <ul class="list-disc ml-5 text-gray-700 space-y-1">
              <li>Coming Soon</li>
              <li>Coming Soon</li>
              <li>Coming Soon</li>
              <li>Coming Soon</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Synergy Section -->
      <section class="text-center py-8 bg-gray-50 rounded-lg mb-12">
        <h3 class="text-xl font-semibold mb-4">The Complete Ecosystem</h3>
        <div class="flex justify-center items-center gap-4 mb-4">
          <div class="bg-white shadow-sm rounded-md px-4 py-2 font-bold">1. Assess</div>
          <span class="text-xl text-gray-500">→</span>
          <div class="bg-white shadow-sm rounded-md px-4 py-2 font-bold">2. Improve</div>
          <span class="text-xl text-gray-500">→</span>
          <div class="bg-white shadow-sm rounded-md px-4 py-2 font-bold">3. Validate</div>
          <span class="text-xl text-gray-500">→</span>
          <div class="bg-white shadow-sm rounded-md px-4 py-2 font-bold">4. Monetize</div>
        </div>
        <p class="text-gray-600">
          InQuizitive and Prosperix work together to create a continuous cycle of growth and reward.
        </p>
      </section>

      <!-- Resources Section -->
      <section class="mb-12">
        <h3 class="text-center text-xl font-semibold mb-6 text-violet-300">Project Resources</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-4">
            <h4 class="text-lg font-semibold text-violet-400 border-b pb-2 mb-2">Documentation</h4>
            <ul class="space-y-2">
              <li><a class="text-violet-500 hover:underline" href="#">Product Vision</a></li>
              <li><a class="text-violet-500 hover:underline" href="#">Technical Architecture</a></li>
              <li><a class="text-violet-500 hover:underline" href="#">API Specifications</a></li>
            </ul>
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            <h4 class="text-lg font-semibold text-violet-400 border-b pb-2 mb-2">Development</h4>
            <ul class="space-y-2">
              <li><a class="text-violet-500 hover:underline" href="#">GitHub Repositories</a></li>
              <li><a class="text-violet-500 hover:underline" href="#">Project Roadmap</a></li>
              <li><a class="text-violet-500 hover:underline" href="#">Contribution Guidelines</a></li>
            </ul>
          </div>
          <div class="bg-white rounded-lg shadow p-4">
            <h4 class="text-lg font-semibold text-violet-400 border-b pb-2 mb-2">Design</h4>
            <ul class="space-y-2">
              <li><a class="text-violet-500 hover:underline" href="#">UI Mockups</a></li>
              <li><a class="text-violet-500 hover:underline" href="#">Style Guide</a></li>
              <li><a class="text-violet-500 hover:underline" href="#">User Flows</a></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Development Status Section -->
      <section class="mb-12">
        <h3 class="text-center text-xl font-semibold mb-6 text-violet-300">Development Progress</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- InQuizitive Progress -->
          <div class="bg-white rounded-lg shadow p-4">
            <h4 class="text-lg font-semibold text-violet-400 mb-2">InQuizitive</h4>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div class="h-full bg-gradient-to-r from-violet-400 to-violet-500 transition-all duration-300"
                [style.width.%]="inquizitiveProgress"></div>
            </div>
            <span class="block text-right text-sm text-gray-600">{{ inquizitiveProgress }}% Complete</span>
            <div class="mt-4 space-y-2">
              <div *ngFor="let milestone of inquizitiveMilestones" class="flex items-center border-b pb-1"
                [ngClass]="{'text-gray-400 line-through': milestone.completed}">
                <span class="mr-2 text-green-500 font-bold">{{ milestone.completed ? '✓' : '○' }}</span>
                <span class="flex-1">{{ milestone.name }}</span>
              </div>
            </div>
          </div>
          <!-- Prosperix Progress -->
          <div class="bg-white rounded-lg shadow p-4">
            <h4 class="text-lg font-semibold text-violet-400 mb-2">Prosperix</h4>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div class="h-full bg-gradient-to-r from-violet-400 to-violet-500 transition-all duration-300"
                [style.width.%]="ProsperixProgress"></div>
            </div>
            <span class="block text-right text-sm text-gray-600">{{ ProsperixProgress }}% Complete</span>
            <div class="mt-4 space-y-2">
              <div *ngFor="let milestone of ProsperixMilestones" class="flex items-center border-b pb-1"
                [ngClass]="{'text-gray-400 line-through': milestone.completed}">
                <span class="mr-2 text-green-500 font-bold">{{ milestone.completed ? '✓' : '○' }}</span>
                <span class="flex-1">{{ milestone.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Upcoming Features Timeline Section -->
      <section class="mb-12">
        <h3 class="text-center text-xl font-semibold mb-6 text-violet-300">Features Timeline</h3>
        <div class="space-y-8">
          @for (item of timelineItems; track item.date) {
            <div class="flex items-start relative">
              <div class="flex flex-col items-center mr-4">
                <div class="w-4 h-4 rounded-full bg-white border-2 border-violet-400"></div>
                <div class="flex-1 w-px bg-violet-400"></div>
              </div>
              <div class="bg-white shadow rounded-lg p-4">
                <div class="text-sm font-bold text-violet-400 mb-1">{{ item.date }}</div>
                <h4 class="text-lg font-semibold text-gray-800">{{ item.title }}</h4>
                <p class="text-gray-600">{{ item.description }}</p>
                <span class="inline-block mt-1 px-2 py-0.5 bg-violet-100 text-violet-600 rounded-full text-xs">
                  {{ item.project }}
                </span>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-violet-600 text-white rounded-lg py-8 text-center mb-12">
        <h3 class="text-xl font-semibold mb-2">Stay Updated</h3>
        <p class="mb-6">Follow me on social media for the latest updates and insights</p>
        <div class="flex justify-center items-center gap-6">
          <a href="https://twitter.com/prasunchakra" target="_blank" rel="noopener noreferrer"
            class="group flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-lg hover:bg-violet-50 transition-all duration-300">
            <i class="fab fa-twitter text-xl"></i>
            <span class="font-medium">Follow on Twitter</span>
          </a>
          <a href="https://youtube.com/@prasunchakra" target="_blank" rel="noopener noreferrer"
            class="group flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-lg hover:bg-violet-50 transition-all duration-300">
            <i class="fab fa-youtube text-xl"></i>
            <span class="font-medium">Subscribe on YouTube</span>
          </a>
        </div>
      </section>
    </div>`,
  styles: `
  .progress-bar {
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }
  `,
})
export class ProjectDetailsComponent {
  // TODO: Make it Dynamic
  
  
  inquizitiveMilestones: Milestone[] = [

    { name: 'TBD', completed: false },
  ];
  
  ProsperixMilestones: Milestone[] = [
    { name: 'TBD', completed: false },
  ];
  
  inquizitiveProgress = this.inquizitiveMilestones.filter(milestone => milestone.completed).length / this.inquizitiveMilestones.length * 100;
  ProsperixProgress = this.ProsperixMilestones.filter(milestone => milestone.completed).length / this.ProsperixMilestones.length * 100;

  timelineItems: TimelineItem[] = [
    {
      date: 'Q1 2025',
      title: 'Articulation of the Product Vision',
      description: 'Defined and refined the product vision and direction, setting the foundation for an integrated ecosystem.',
      project: 'Both'
    },
    {
      date: 'Q2 2025',
      title: 'MVP Development & Hosting',
      description: 'Commenced the development phase, establishing the hosting infrastructure to launch the Minimum Viable Product.',
      project: 'Both'
    }
  ];

}
