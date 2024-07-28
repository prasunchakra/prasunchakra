import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen bg-transparent text-white relative">
      <header
        class="bg-slate-950/75 text-white py-6 px-4 border-b border-violet-950 z-10 relative"
      >
        <div class="container mx-auto flex justify-center items-center">
          <h1 class="text-3xl font-bold">Support</h1>
        </div>
      </header>

      <main
        class="container mx-auto px-6 py-12 relative z-10 bg-slate-950/75 rounded-lg shadow-lg"
      >
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">How can we help you?</h2>
          <p>
            Our dedicated support team is here to help you with any questions or
            issues you may encounter. Whether you need assistance with a
            project, have a question about collaboration, or just want to give
            feedback, we're here to listen.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Contacting Support</h2>
          <p>
            The easiest way to get in touch with us is by emailing our support
            team. Please send your questions or concerns to:
          </p>
          <p class="mt-4">
            <a
              href="mailto:support&#64;prasunchakra.org"
              class="text-violet-400 hover:underline"
              >support&#64;prasunchakra.org</a
            >
          </p>
          <p class="mt-4">
            We strive to respond to all inquiries within 24-48 hours.
          </p>
        </section>
      </main>

      <div id="particles-js" class="absolute inset-0 z-0"></div>
    </div>
  `,
  styles: [
    `
      header {
        position: sticky;
        top: 0;
      }
    `,
  ],
})
export class SupportComponent {}
