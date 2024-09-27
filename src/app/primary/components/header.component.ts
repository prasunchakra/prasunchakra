import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header
      [ngClass]="{
        'sticky top-0 z-[10] duration-200 px-6 flex items-center justify-between border-b border-solid': true,
        'py-4 bg-slate-950 border-violet-950': y > 0,
        'py-6 bg-transparent border-transparent': y <= 0
      }"
    >
      <h1 class="font-bold" style="display: flex; align-items: center;">
        <a
          routerLink="/"
          style="display: flex; align-items: center; text-decoration: none;"
        >
          <img
            src="images/logo.gif"
            alt="Icon"
            style="vertical-align: middle; margin-right: 10px; height: 6em;"
          />
          <b class="font-bold poppins text-white"
            >Prasun<span class="">chakra</span></b
          >
        </a>
      </h1>
      <div class="sm:flex items-center gap-4 hidden">
        <ng-container *ngFor="let tab of tabs; let i = index">
          <a
            [href]="tab.link"
            class="duration-200 hover:text-violet-400"
            [target]="i === 2 ? '_blank' : ''"
          >
            <p>{{ tab.name }}</p>
          </a>
        </ng-container>
        <button
          class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          ></div>
          <h4 class="relative z-9">
            <a href="https://twitter.com/prasunchakra"
              ><i class="fa-brands fa-twitter"></i
            ></a>
          </h4>
        </button>
        <button
          class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          ></div>
          <h4 class="relative z-9">
            <a href="https://medium.com/@prasunchakra" target="_blank">
              <i class="fa-brands fa-medium"></i>
            </a>
          </h4>
        </button>
        <button
          class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          ></div>
          <h4 class="relative z-9">
            <a href="https://www.linkedin.com/in/prasunchakra/" target="_blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </h4>
        </button>
        <button
          class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          ></div>
          <h4 class="relative z-9">
            <a href="https://github.com/prasunchakra" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </h4>
        </button>
        <button
          class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          ></div>
          <h4 class="relative z-9">
            <a href="https://www.youtube.com/@prasunchakra" target="_blank">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </h4>
        </button>
      </div>
    </header>
  `,
  styles: [
    `
      header {
        position: sticky;
        top: 0;
        z-index: 10;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() y: number = 0;
  @Input() innerHeight: number = 0;
  @Input() tabs: { name: string; link: string }[] = [];
}
