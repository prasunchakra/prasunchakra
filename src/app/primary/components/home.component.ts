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
            <a href="#projects">Work In Progress &darr;</a>
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
            <span class="poppins text-violet-400">Tech Journey!</span>
          </h3>
          <h6 class="mt-3 text-large sm:text-xl md:text-2xl">
            From open-source projects to insightful blogs and engaging posts.
            I’m building, sharing, and growing.
            <span class="block mt-3 poppins text-violet-400 relative group cursor-pointer">
              Stay connected and be part of the journey!
              <span
                class="absolute left-1/2 bottom-full mb-2 w-max -translate-x-1/2 
           rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 
           transition-opacity duration-300 group-hover:opacity-100"
              >
                Follow me on Twitter, LinkedIn, or Instagram!
              </span>
            </span>
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

        <div class="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
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
      name: 'Operating Systems',
      icon: 'fa-solid fa-terminal',
      description:
       'A curated collection of study materials, research papers, and in-depth resources to master Operating Systems.',
      href: 'project-details/OperatingSystem/Medium',
    },
    {
      name: 'Computer Networking',
      icon: 'fa-solid fa-network-wired',
      description:
       'A curated collection of study materials, research papers, and in-depth resources to master Computer Networking.',
      href: 'project-details/ComputerNetworking/Medium',
    },
    {
      name: 'Cryptography',
      icon: 'fa-solid fa-lock',
      description:
       'A curated collection of study materials, research papers, and in-depth resources to master Cryptography.',
      href: 'project-details/Cryptography/Medium',
    },
    {
      name: 'InQuizitive',
      icon: 'fa-solid fa-user-graduate',
      description:
        'An interactive quiz platform designed to spark curiosity and engage learners. Built with scalability in mind, it’s on track to become a full-fledged EdTech solution—integrating robust LMS features, dynamic analytics, and more.',
      href: 'project-details/InQuizitive/Project',
    },  
    {
      name: 'FinView',
      icon: 'fa-solid fa-money-bill',
      description:
        'Smart Personal Finance Assistant. An AI-powered budgeting and expense tracking app that provides personalized financial insights and helps you make smarter money decisions through intelligent recommendations.',
      href: 'project-details/FinView/Project',
    },  
    {
      name: 'OmniSphere',
      icon: 'fa-solid fa-globe',
      description:
        'An all-in-one platform that combines the features of food delivery, e-commerce, ride-hailing, and essential services into a single app. Users can shop, book rides, order food, and access multiple services from one place.',
      href: 'project-details/OmniSphere/Project',
    },  

  ]

}
