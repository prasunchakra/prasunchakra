import { Component } from '@angular/core';
import { StepComponent } from './step.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StepComponent],
  template: `
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
            <p>{{ steps[0].description }}</p>
          </app-step>
          <app-step [step]="steps[1]">
            <p>
              {{ steps[1].description }}
            </p>
          </app-step>
          <app-step [step]="steps[2]">
            <p>
              {{ steps[2].description }}
            </p>
          </app-step>
        </div>
      </section>
      <h3
        class="pt-40 lg:pt-64 font-medium text-2xl sm:text-3xl md:text-4xl text-center"
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
            class="blueShadow mx-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
          >
            <div
              class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            ></div>
            <h4 class="relative z-9">
              <a href="#projects">My Projects &uarr;</a>
            </h4>
          </button>
        </div>
        <!-- Add any additional content here -->
      </section>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {
  steps = [
    {
      name: 'Dialogue Bridge',
      icon: 'fa-solid fa-comments',
      description:
        'A Dialogue and Debate Platform That Bridges Different Worlds of opinions',
      href: 'project-details/dialogueBridge',
    },
    {
      name: 'BlissQuests',
      icon: 'fa-solid fa-tasks',
      description:
        'A Community Platform to Explore Activities for Relaxation and Rejuvenation',
      href: 'project-details/blissQuests',
    },
    {
      name: 'Ethical Wealth',
      icon: 'fa-solid fa-chart-line',
      description:
        'A Holistic Wealth Development Platform Focusing on Finance, Health, and Education',
      href: 'project-details/ethicalWealth',
    },
  ];
}
