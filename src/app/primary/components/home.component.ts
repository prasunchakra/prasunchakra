import { Component } from '@angular/core';
import { StepComponent } from './step.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StepComponent, RouterModule, CommonModule, ReactiveFormsModule],
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
        <h3 class="font-medium text-2xl sm:text-3xl md:text-4xl w-full">
          Solving the puzzle of <span class="poppins text-violet-400"> career </span> paths for <span class="poppins text-violet-400"> ambitious </span> youth.
        </h3>
       
      </div>
      <!-- Add any additional content here -->
    </section>
    <h2 class="text-2xl font-bold text-center text-gray-300 mb-6">
      Get the action plan for your dream <span class="poppins text-violet-400"> Future </span>
    </h2>
    <form [formGroup]="skillForm" class="max-w-4xl mx-auto px-6">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
        <p class="text-lg text-gray-700 text-center leading-relaxed">
          I am a
          <span class="relative inline-block">
            <input
              type="text"
              formControlName="who"
              placeholder="Early Career Professional with computer science background"
              class="border-b-2 border-violet-300 focus:border-violet-500 focus:outline-none px-2 py-1 bg-transparent w-64 placeholder-gray-400"
              aria-label="Your background or skills"
            /> </span
          >, I want to
          <span class="relative inline-block">
            <input
              type="text"
              formControlName="what"
              placeholder="Find a job or an opportunity in AI"
              class="border-b-2 border-violet-300 focus:border-violet-500 focus:outline-none px-2 py-1 bg-transparent w-64 placeholder-gray-400"
              aria-label="Your goal or action"
            />
          </span>
          so that I can
          <span class="relative inline-block">
            <input
              type="text"
              formControlName="why"
              placeholder="Transition into AI roles"
              class="border-b-2 border-violet-300 focus:border-violet-500 focus:outline-none px-2 py-1 bg-transparent w-64 placeholder-gray-400"
              aria-label="Your motivation or desired outcome"
            /> </span
          >.
        </p>

        <!-- CTA Button -->
        <button
          type="button"
          (click)="onSubmit()"
          [disabled]="!skillForm.valid"
          class="mt-8 mx-auto block bg-gradient-to-br from-violet-600 to-violet-800 text-white py-3 px-8 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
          aria-label="Get personalized recommendations"
        >
          Get My Action Plan →
        </button>
      </div>

      <!-- Results Section -->
      @if (suggestions.length) {
        <div class="mt-6 bg-gradient-to-br from-violet-50 to-white p-6 rounded-xl border border-violet-200 shadow-sm animate-fade-in">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-violet-600 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Your Personalized Roadmap
          </h3>

          <ul class="space-y-3">
            @for (item of suggestions; track item; let i = $index) {
              <li class="flex items-start bg-white p-4 rounded-lg border-l-4 border-violet-500 shadow-xs hover:shadow-md transition">
                <span
                  class="flex-shrink-0 bg-violet-100 text-violet-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 font-medium text-sm"
                  >{{ i + 1 }}</span
                >
                <span class="text-gray-700">{{ item }}</span>
              </li>
            }
          </ul>

          <div class="mt-4 text-sm text-violet-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Tip: Bookmark this page to track your progress</span>
          </div>
        </div>
      }
    </form>
    
    <!-- Supercharged Social Connection Section -->
    <div class="max-w-4xl mx-auto w-full px-4 py-16 text-center">
      <div class="mb-12">
        <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-4">
          Join Our <span class="poppins text-violet-400">Creator Circle</span>
        </h3>
        <p class="text-violet-400 max-w-2xl mx-auto mb-6">
          Get exclusive updates, behind-the-scenes content, and early access to
          new features
        </p>

        <!-- Social Proof Badge -->
        <div
          class="inline-flex items-center bg-violet-50 rounded-full px-4 py-2 mb-8"
        >
          <div class="flex -space-x-2 mr-3">
            <div
              class="h-8 w-8 rounded-full bg-violet-200 border-2 border-white"
            ></div>
            <div
              class="h-8 w-8 rounded-full bg-violet-300 border-2 border-white"
            ></div>
            <div
              class="h-8 w-8 rounded-full bg-violet-400 border-2 border-white"
            ></div>
          </div>
          <!-- <span class="text-sm font-medium text-violet-700">Join 1,000+ builders</span> -->
        </div>
      </div>

      <!-- Interactive Social Grid -->
      <div class="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        <!-- Twitter Card -->
        <a
          href="https://twitter.com/prasunchakra"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative p-6 rounded-2xl border-2 border-violet-100 hover:border-violet-300 bg-gradient-to-br from-white to-violet-50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100"
        >
          <div class="flex flex-col items-center">
            <div class="relative mb-3">
              <i
                class="fab fa-twitter text-3xl text-violet-500 group-hover:text-violet-600 transition-colors duration-300"
              ></i>
              <div
                class="absolute -top-2 -right-2 bg-violet-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse"
              >
                !
              </div>
            </div>
            <span class="font-medium text-violet-700">Regular Insights</span>
            <span class="text-xs text-gray-500 mt-1"
              >Follow &#64;prasunchakra</span
            >
          </div>
          <div
            class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-300 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </a>

        <!-- YouTube Card -->
        <a
          href="https://youtube.com/@prasunchakra"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative p-6 rounded-2xl border-2 border-violet-100 hover:border-violet-300 bg-gradient-to-br from-white to-violet-50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100"
        >
          <div class="flex flex-col items-center">
            <i
              class="fab fa-youtube text-3xl text-violet-500 group-hover:text-violet-600 transition-colors duration-300"
            ></i>
            <span class="font-medium text-violet-700 mt-3"
              >Discussions & Tutorials</span
            >
            <span class="text-xs text-gray-500 mt-1">Subscribe</span>
          </div>
          <div
            class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-300 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </a>

        <!-- GitHub Card -->
        <a
          href="https://github.com/prasunchakra"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative p-6 rounded-2xl border-2 border-violet-100 hover:border-violet-300 bg-gradient-to-br from-white to-violet-50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100"
        >
          <div class="flex flex-col items-center">
            <i
              class="fab fa-github text-3xl text-violet-500 group-hover:text-violet-600 transition-colors duration-300"
            ></i>
            <span class="font-medium text-violet-700 mt-3"
              >Open Source Contributions</span
            >
            <span class="text-xs text-gray-500 mt-1">Fork & Star</span>
          </div>
          <div
            class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-300 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </a>
      </div>

      <!-- Micro-CTA -->
      <p class="text-sm text-gray-400 mt-8">
        P.S. I share exclusive content on
        <a
          href="https://linkedin.com/in/prasunchakra"
          target="_blank"
          rel="noopener noreferrer"
          class="text-violet-500 hover:text-violet-600 font-medium"
          >LinkedIn</a
        >
        every Tuesday!
        <span class="text-violet-500 font-medium">#TechTuesdays</span>
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
      description:
        'A next-generation Learning & Skill Development Platform. Helping individuals & organizations acquire, assess, and improve talent in an engaging way.',
      tags: ['Quiz', 'Courses', 'LiveClasses', 'Assessments'],
      href: 'project-details',
    },
    {
      name: 'Prosperix',
      icon: 'fa-solid fa-money-bill',
      description:
        'A financial empowerment platform for skilled professionals. Helping talented individuals earn, optimize, and grow money from their skills.',
      tags: ['Budgeting', 'Freelance', 'SideGigs', 'Investing'],
      href: 'project-details',
    },
  ];
  skillForm!: FormGroup;
  suggestions: string[] = [];

  private dummySuggestions: Record<string, string[]> = {
    'a passion for music and experience playing the guitar|expand my performance opportunities and collaborate with other musicians|grow creatively and potentially build a career in music':
      [
        'Skill Gap Analysis → Take this 5-min quiz on advanced guitar techniques.',
        'Collaboration Board → Join a local jam session group.',
        'Career Path → Research music schools and talent agencies.',
      ],
    'Student|learn a new skill|transition into AI roles': [
      'Skill Gap Analysis → Take this 5-min quiz to identify key areas to learn.',
      'Opportunity Match → Explore roles in AI with your background.',
      'Expert Connect → Talk to a mentor in AI.',
    ],
  };

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      who: ['', [Validators.required, Validators.minLength(1)]],
      what: ['', [Validators.required, Validators.minLength(1)]],
      why: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit(): void {
    console.log(this.skillForm);
    if (this.skillForm.valid) {
      const { who, what, why } = this.skillForm.value;
      const key = `${who}|${what}|${why}`;
      this.suggestions = this.dummySuggestions[key] || [
        'Explore more resources on our blog',
        'Connect with a mentor today',
        'Download our free guide to next steps',
      ];
    } else {
      this.suggestions = ['Please fill in all fields'];
    }
  }
}
