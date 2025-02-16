import { Component } from '@angular/core';
import { StepComponent } from './step.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StepComponent],
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
          The problem-solving wizard in the realm of
          <span class="poppins text-violet-400">Software Engineering</span>
        </h3>
        <button
          class="blueShadow mx-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 mb-12 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          ></div>
          <h4 class="relative z-9">
            <a href="#projects">My Projects &darr;</a>
          </h4>
        </button>
      </div>
      <!-- Add any additional content here -->
    </section>
    <div class="flex flex-col p-4 w-full">
      <section class="flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Explore My
            <span class="poppins text-violet-400">Open Source </span
            >Initiatives!
          </h3>
          <h6 class="text-large sm:text-xl md:text-2xl">
            Engage in open source projects. Your skills can make a world of
            difference.
            <span class="poppins text-violet-400">Collaborate now!</span>
          </h6>
        </div>

        <!-- <div class="flex justify-center space-x-4 -mt-10">
          <a
            href="https://topmate.io/prasunchakra"
            target="_blank"
            class="px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 hover:border-violet-700 duration-200"
          >
            <i class="fa-regular fa-comment-dots"></i>
            <p>Book a Brainstorm Session</p>
          </a>
          <a
            href="https://discord.gg/3cUDXC37"
            target="_blank"
            class="px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 hover:border-violet-700 duration-200"
          >
            <i class="fa-brands fa-discord"></i>
            <p>Join to discuss</p>
          </a>
        </div> -->

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      @for (step of steps; track step.name) {
        <app-step [step]="step">
          <p>{{ step.description }}</p>
        </app-step>
      }
    </div>
      </section>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {
  steps = [
    {
      name: 'OmniSphere',
      icon: 'fa-solid fa-globe',
      description:
        'An all-in-one platform that combines such that Users can shop, book rides, order food, and access multiple services from one place.',
      href: 'project-details/OmniSphere',
    },
    {
      name: 'InQuizitive',
      icon: 'fa-solid fa-user-graduate',
      description:
        'An interactive quiz platform that allows users to play solo or in real-time competitive quiz battles, featuring AI-generated questions, lifelines, leaderboards, and real prizes.',
      href: 'project-details/InQuizitive',
    },
    {
      name: 'TravelBuddy',
      icon: 'fa-solid fa-plane',
      description:
        'A travel companion that recommends destinations, plans itineraries, and provides AI-powered insights based on past trips.',
      href: 'project-details/TravelBuddy',
    },
    
    {
      name: 'ThreatSentry',
      icon: 'fa-solid fa-shield-alt',
      description:
        'An automated security tool that monitors logs, detects anomalies, and alerts organizations to potential cyber threats.',
      href: 'project-details/ThreatSentry',
    },
    {
      name: 'SkillTailor',
      icon: 'fa-solid fa-lightbulb',
      description:
        'A personalized learning platform that adapts to user preferences and suggests tailored content for upskilling.',
      href: 'project-details/SkillTailor',
    },
    {
      name: 'InterviewPrepAI',
      icon: 'fa-solid fa-robot',
      description:
        'An AI-driven platform that analyzes resumes, suggests improvements, and generates interview questions based on job descriptions. Ideal for job seekers and hiring teams.',
      href: 'project-details/InterviewPrepAI',
    },
    {
      name: 'FinView',
      icon: 'fa-solid fa-wallet',
      description:
        'An AI-powered budgeting and expense tracking app that provides personalized financial insights.',
      href: 'project-details/FinView',
    },
    {
      name: 'TableTalks',
      icon: 'fa-solid fa-comments',
      description:
        'An AI-powered structured online debate platform where users can present arguments, provide evidence, and counter opinions.',
      href: 'project-details/TableTalks',
    },
    {
      name: 'HealthHarmony',
      icon: 'fa-solid fa-heartbeat',
      description:
        'An AI-driven diet and fitness assistant that provides personalized recommendations based on your habits and health goals.',
      href: 'project-details/HealthHarmony',
    },
    
    {
      name: 'BlockDrive',
      icon: 'fa-solid fa-cloud',
      description:
        'A Web3-powered alternative to Google Drive, offering secure, decentralized file storage using blockchain.',
      href: 'project-details/BlockDrive',
    },

  ];
}
