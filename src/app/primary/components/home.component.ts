import { Component } from '@angular/core';
import { StepComponent } from './step.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StepComponent, RouterModule],
  template: `
    <h3
      class="pb-4 lg:pb-6 font-medium text-2xl sm:text-3xl md:text-4xl text-center"
    >
      The Essence of Engineering is
      <span class="poppins text-violet-400">Problem Solving</span>
    </h3>
    <section id="introPage" class="py-12 lg:py-20">
      <div
        class="flex flex-col items-center lg:items-center lg:justify-center text-center lg:text-center gap-6 md:gap-8 lg:gap-10 w-full"
      >
        <h2 class="font-medium text-4xl sm:text-5xl md:text-6xl w-full">
          I'm <span class="poppins text-violet-400">Prasun</span> Chakraborty.
        </h2>
        <h3 class="font-medium text-2xl sm:text-3xl md:text-4xl w-full">
          Building <span class="poppins text-violet-400">InQuizitive</span> to Cultivate Talent
          and <span class="poppins text-violet-400">Prosperix</span> to Capitalize on Success.
        </h3>
      </div>
      <!-- Add any additional content here -->
    </section>
          <!-- Add any additional content here -->
      <div class="max-w-5xl mx-auto w-full px-4 mb-16">
        <h3 class="text-center font-semibold text-3xl sm:text-4xl md:text-5xl mb-12">
          
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (project of featuredProjects; track project.name) {
            <app-step [step]="project">
              <div class="space-y-4">
                <p>{{ project.description }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (tag of project.tags; track tag) {
                    <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">{{tag}}</span>
                  }
                </div>
              </div>
            </app-step>
          }
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <a [routerLink]="['/project-details']" 
           class="group relative overflow-hidden rounded-lg px-8 py-4 bg-gradient-to-br from-violet-500 to-violet-700 text-white font-medium text-lg hover:shadow-xl transition-all duration-300">
          <div class="absolute inset-0 bg-violet-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          <div class="absolute -inset-1 bg-gradient-to-r from-violet-400 via-violet-300 to-violet-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <span class="relative flex items-center gap-2">
            <span>Discover the Full Story</span>
            <span class="transform group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300">
              🚀
            </span>
          </span>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-violet-300 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
        </a>
      </div>

      <!-- Supercharged Social Connection Section -->
      <div class="max-w-4xl mx-auto w-full px-4 py-16 text-center">
        <div class="mb-12">
          <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-4">
            Join Our <span class="poppins text-violet-400">Creator Circle</span>
          </h3>
          <p class="text-violet-400 max-w-2xl mx-auto mb-6">
            Get exclusive updates, behind-the-scenes content, and early access to new features
          </p>
          
          <!-- Social Proof Badge -->
          <div class="inline-flex items-center bg-violet-50 rounded-full px-4 py-2 mb-8">
            <div class="flex -space-x-2 mr-3">
              <div class="h-8 w-8 rounded-full bg-violet-200 border-2 border-white"></div>
              <div class="h-8 w-8 rounded-full bg-violet-300 border-2 border-white"></div>
              <div class="h-8 w-8 rounded-full bg-violet-400 border-2 border-white"></div>
            </div>
            <!-- <span class="text-sm font-medium text-violet-700">Join 1,000+ builders</span> -->
          </div>
        </div>

        
        <!-- Interactive Social Grid -->
        <div class="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <!-- Twitter Card -->
          <a href="https://twitter.com/prasunchakra" target="_blank" rel="noopener noreferrer"
            class="group relative p-6 rounded-2xl border-2 border-violet-100 hover:border-violet-300 bg-gradient-to-br from-white to-violet-50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100">
            <div class="flex flex-col items-center">
              <div class="relative mb-3">
                <i class="fab fa-twitter text-3xl text-violet-500 group-hover:text-violet-600 transition-colors duration-300"></i>
                <div class="absolute -top-2 -right-2 bg-violet-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">!</div>
              </div>
              <span class="font-medium text-violet-700">Regular Insights</span>
              <span class="text-xs text-gray-500 mt-1">Follow &#64;prasunchakra</span>
            </div>
            <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-300 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <!-- YouTube Card -->
          <a href="https://youtube.com/@prasunchakra" target="_blank" rel="noopener noreferrer"
            class="group relative p-6 rounded-2xl border-2 border-violet-100 hover:border-violet-300 bg-gradient-to-br from-white to-violet-50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100">
            <div class="flex flex-col items-center">
              <i class="fab fa-youtube text-3xl text-violet-500 group-hover:text-violet-600 transition-colors duration-300"></i>
              <span class="font-medium text-violet-700 mt-3">Discussions & Tutorials</span>
              <span class="text-xs text-gray-500 mt-1">Subscribe</span>
            </div>
            <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-300 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <!-- GitHub Card -->
          <a href="https://github.com/prasunchakra" target="_blank" rel="noopener noreferrer"
            class="group relative p-6 rounded-2xl border-2 border-violet-100 hover:border-violet-300 bg-gradient-to-br from-white to-violet-50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100">
            <div class="flex flex-col items-center">
              <i class="fab fa-github text-3xl text-violet-500 group-hover:text-violet-600 transition-colors duration-300"></i>
              <span class="font-medium text-violet-700 mt-3">Open Source Contributions</span>
              <span class="text-xs text-gray-500 mt-1">Fork & Star</span>
            </div>
            <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-300 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>



        <!-- Micro-CTA -->
        <p class="text-sm text-gray-400 mt-8">
          P.S. I share exclusive content on <a href="https://linkedin.com/in/prasunchakra" target="_blank" rel="noopener noreferrer" class="text-violet-500 hover:text-violet-600 font-medium">LinkedIn</a> every Tuesday! <span class="text-violet-500 font-medium">#TechTuesdays</span>
        </p>
      </div>
    <!-- <div class="flex flex-col p-4 w-full">
     <h3 class="text-center font-semibold text-3xl sm:text-4xl md:text-5xl mb-12">
     
     </h3>
      <section class="flex flex-col gap-24" id="projects">
        <div class="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
         
        </div>
      </section>
    </div> -->
  `,
  styles: `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `,
})
export class HomeComponent {
  featuredProjects = [
    {
      name: 'InQuizitive',
      icon: 'fa-solid fa-user-graduate',
      description: 'A next-generation Learning & Skill Development Platform. Helping individuals & organizations acquire, assess, and improve talent in an engaging way.',
      tags:['Quiz','Courses','LiveClasses','Assessments'],
      href: 'project-details',
    },
    {
      name: 'Prosperix',
      icon: 'fa-solid fa-money-bill',
      description: 'A financial empowerment platform for skilled professionals. Helping talented individuals earn, optimize, and grow money from their skills.',
      tags:['Budgeting','Freelance','SideGigs','Investing'],
      href: 'project-details',
    }
  ];

}
