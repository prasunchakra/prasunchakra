import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [],
  template: `
    <a
      [href]="step.href"
      target="_blank"
      class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"
    >
      <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
      >
        <i [class]="step.icon"></i>
      </div>
      <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {{ step.name }}
      </h3>
      <ng-content></ng-content>
      <div class="flex-1 flex justify-between gap-4 items-end">
        <div
          class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
        >
          <p class="z-4">Go to &rarr;</p>
        </div>
      </div>
    </a>
  `,
  styles: ``,
})
export class StepComponent {
  @Input() step: {
    name: string;
    icon: string;
    href: string;
    description?: string;
  } = {
    name: '',
    icon: '',
    href: '',
    description: '',
  };
}
