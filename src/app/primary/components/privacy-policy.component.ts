import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen bg-transparent text-white relative">
      <header
        class="bg-slate-950/75 text-white py-6 px-4 border-b border-violet-950 z-10 relative"
      >
        <div class="container mx-auto flex justify-center items-center">
          <h1 class="text-3xl font-bold">Privacy Policy</h1>
        </div>
      </header>

      <main
        class="container mx-auto px-6 py-12 relative z-10 bg-slate-950/75 rounded-lg shadow-lg"
      >
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            This website and its services are operated by Prasun Chakraborty, 
            an individual developer and consultant. This Privacy Policy outlines 
            the commitment to protecting your personal information. This document 
            details how data is collected, used, and protected.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Information Collected</h2>
          <ul class="list-disc ml-6 space-y-2">
            <li>
              Information you provide directly (e.g., name, email, when contacting 
              for inquiries or collaboration).
            </li>
            <li>Usage data (e.g., pages visited, time spent on site).</li>
            <li>Device and browser information for analytics purposes.</li>
            <li>
              Information from third-party services if you interact with projects 
              that use authentication providers.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">
            How Your Information Is Used
          </h2>
          <ul class="list-disc ml-6 space-y-2">
            <li>To provide and improve services and projects.</li>
            <li>To respond to inquiries and support requests.</li>
            <li>To communicate about projects, services, or collaboration opportunities.</li>
            <li>To analyze and improve website functionality and user experience.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">
            Sharing of Information
          </h2>
          <p>
            Your personal information is not sold or shared with third parties for 
            marketing purposes. Information may only be shared when necessary for 
            service providers (e.g., hosting, analytics) or when required by law.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Security</h2>
          <p>
            Reasonable security measures are taken to protect your information 
            from unauthorized access, alteration, or disclosure. However, no 
            method of internet transmission is 100% secure.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion 
            of your personal information. Please contact me using the information 
            below to exercise these rights.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Any significant 
            changes will be posted on this website. Continued use of the website 
            after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, 
            please contact me at
            <a
              href="mailto:support&#64;prasunchakra.org"
              class="text-violet-400 hover:underline"
              >support&#64;prasunchakra.org</a
            >.
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
export class PrivacyPolicyComponent {}
