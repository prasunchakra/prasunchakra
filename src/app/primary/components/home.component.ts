import { Component } from '@angular/core';
import { StepComponent } from './step.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StepComponent],
  template: `
    <main class="flex flex-col flex-1 p-4">
      <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
      >
        <div
          class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
          <h2 class="font-medium text-4xl sm:text-5xl md:text-6xl">
            Hi! I'm <br /><span class="poppins text-violet-400">Prasun</span>
            Chakraborty.
          </h2>
          <h3 class="font-medium text-2xl sm:text-3xl md:text-4xl">
            The problem-solving wizard in the realm of
            <span class="poppins text-violet-400">Software Engineering</span>
          </h3>
          <button
            class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
          >
            <div
              class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            ></div>
            <h4 class="relative z-9">
              <a href="#projects">My Projects &rarr;</a>
            </h4>
          </button>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
          <img
            src="images/certs.png"
            alt="Certificates"
            class="object-cover z-[2] max-h-[70vh]"
          />
        </div>
      </section>
      <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
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

        <div class="flex justify-center space-x-4 -mt-10">
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
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          <app-step [step]="steps[0]">
            <!-- <p>
            ...
          </p> -->
          </app-step>
          <app-step [step]="steps[1]">
            <!-- <p>
           ...
          </p> -->
          </app-step>
          <app-step [step]="steps[2]">
            <!-- <p>
            ...
          </p> -->
          </app-step>
        </div>
      </section>
    </main>
  `,
  styles: ``,
})
export class HomeComponent {
  steps = [
    {
      name: 'Work In Progress',
      icon: 'fa-solid fa-comments',
      description: '',
      href: '',
    },
    {
      name: 'Work In Progress',
      icon: 'fa-solid fa-tasks',
      description: '',
      href: '',
    },
    {
      name: 'Work In Progress',
      icon: 'fa-solid fa-chart-line',
      description: '',
      href: '',
    },
  ];
}
