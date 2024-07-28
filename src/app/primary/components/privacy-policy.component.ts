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
            This Privacy Policy outlines our commitment to protecting your
            personal information. With the integration of third-party identity
            providers such as Google, Facebook, Amazon, and Apple, we aim to
            streamline our login process and enhance your user experience. This
            document details how we handle data received from these services.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>
          <ul class="list-disc ml-6 space-y-2">
            <li>
              Information you provide directly (e.g., name, email, when signing
              up for an account).
            </li>
            <li>Usage data (e.g., pages visited, actions taken).</li>
            <li>Device and browser information.</li>
            <li>
              Information from third parties like Google (if you use Google
              authentication).
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <ul class="list-disc ml-6 space-y-2">
            <li>To provide and improve our services.</li>
            <li>To personalize your experience.</li>
            <li>To communicate with you.</li>
            <li>To protect our services and users.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">
            How We Share Your Information
          </h2>
          <p>
            We do not share your personal information with third parties without
            your consent, except for the necessary information exchange with
            Google, Facebook, Amazon, and Apple for the purpose of account
            creation and linking.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Security</h2>
          <p>
            We take stringent security measures to protect the information
            received from third-party identity providers, in addition to our
            comprehensive data protection protocols.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Changes to the Policy</h2>
          <p>
            Any significant changes to our use of third-party identity providers
            or to this policy will be communicated to you through updates posted
            on our website.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding our use of
            third-party identity providers, please contact us at
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
