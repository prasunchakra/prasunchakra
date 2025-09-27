import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../data/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
          I'm <span class="poppins text-violet-400">Prasun Chakra</span>borty.
        </h2>
        <h2 class="text-2xl font-bold text-center text-gray-300 mb-6">
         <span class="poppins text-violet-400">Building in Public</span> demonstrating that engineering excellence can be applied to problems of any size.
        </h2>
      </div>
      <!-- Add any additional content here -->
    </section>
    
    <!-- Projects Section -->
    <section class="flex flex-col gap-10 py-10" id="projects">
      <h3 class="text-center font-semibold text-3xl sm:text-4xl md:text-5xl">Projects</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          *ngFor="let p of projects"
          class="p-5 rounded-lg border border-violet-800 hover:border-violet-400 duration-200 bg-slate-950/60 group shadow-sm hover:shadow-lg hover:shadow-violet-900/20"
        >
          <div class="flex items-center gap-3 mb-3">
            <i *ngIf="p.iconClass" [class]="p.iconClass + ' text-3xl text-violet-400' "></i>
            <img *ngIf="p.logoUrl" [src]="p.logoUrl" alt="{{p.name}} logo" class="h-8 w-8" />
            <h4 class="font-medium text-xl">{{ p.name }}</h4>
          </div>
          <p class="text-gray-300">{{ p.shortDescription }}</p>
          <div class="flex items-center justify-between mt-5">
            <a *ngIf="p.githubUrl" [href]="p.githubUrl" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-950 hover:bg-gray-100">
              <i class="fab fa-github text-lg"></i>
              <span>GitHub</span>
            </a>
            <a *ngIf="p.liveUrl" [href]="p.liveUrl" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-500">
              <i class="fa-solid fa-globe text-lg"></i>
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Join the Journey Section -->
    <section class="py-16 lg:py-20">
      <div class="text-center mb-12">
        <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-violet-300">
          Join the Journey
        </h3>
        <p class="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Whether you contribute code, share ideas, test applications, or simply follow along, you're part of this mission. Together, we're proving that small applications can create big changes, and that the best solutions emerge when engineers collaborate openly.
        </p>
      </div>
      
      <div class="flex justify-center items-center gap-6 flex-wrap">
        <a href="https://twitter.com/prasunchakra" target="_blank" rel="noopener noreferrer"
           class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-violet-800 hover:border-violet-400 transition-all duration-200">
          <i class="fab fa-twitter text-xl text-violet-400 group-hover:text-white"></i>
          <span class="font-medium">Connect on Twitter</span>
        </a>
        
        <a href="https://instagram.com/prasunchakra" target="_blank" rel="noopener noreferrer"
           class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-violet-800 hover:border-violet-400 transition-all duration-200">
          <i class="fab fa-instagram text-xl text-violet-400 group-hover:text-white"></i>
          <span class="font-medium">Connect on Instagram</span>
        </a>
        
        <a href="https://youtube.com/@prasunchakra" target="_blank" rel="noopener noreferrer"
           class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-violet-800 hover:border-violet-400 transition-all duration-200">
          <i class="fab fa-youtube text-xl text-violet-400 group-hover:text-white"></i>
          <span class="font-medium">Know more on YouTube</span>
        </a>
      </div>
    </section> 
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
  projects = PROJECTS;
}
