import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  template: `
    <div
      class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
    >
      <div
        class="fixed bottom-0 w-full duration-200 flex p-10 z-[10]"
        [ngClass]="{
          'opacity-full pointer-events-auto': y > 0,
          'pointer-events-none opacity-0': y <= 0
        }"
      >
        <button
          (click)="goTop()"
          class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        >
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      <app-header [y]="y" [innerHeight]="innerHeight"></app-header>
      <ng-content></ng-content>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
      .container {
        position: relative;
        flex: 1;
      }
    `,
  ],
})
export class LayoutComponent {
  y: number = 0;
  innerHeight: number = 0;
  innerWidth: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.y = window.scrollY;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }

  goTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
