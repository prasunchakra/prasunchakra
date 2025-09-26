import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
         Actions Speak Louder Than Words, and My Actions is <span class="poppins text-violet-400">Work In Progress</span>
        </h2>
      </div>
      <!-- Add any additional content here -->
    </section>
    
    
    
    <!-- Projects Section -->
    

    <!-- Supercharged Social Connection Section -->
    
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
export class HomeComponent {}
