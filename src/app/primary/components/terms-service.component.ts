import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-service',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen bg-transparent text-white relative">
      <header
        class="bg-slate-950/75 text-white py-6 px-4 border-b border-violet-950 z-10 relative"
      >
        <div class="container mx-auto flex justify-center items-center">
          <h1 class="text-3xl font-bold">Terms of Service</h1>
        </div>
      </header>

      <main
        class="container mx-auto px-6 py-12 relative z-10 bg-slate-950/75 rounded-lg shadow-lg"
      >
        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">About</h2>
          <p>
            This website and its services are operated by Prasun Chakraborty, 
            an individual developer and consultant. These terms govern your use 
            of the website, projects, and services provided.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p>
            By accessing this website, contributing to projects, or using the
            services, you confirm that you have read, understood, and agreed to
            be bound by these Terms of Service. If you do not agree with any
            part of these terms, you must not use the services.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">User Conduct</h2>
          <p>
            As a community-driven platform, we expect all users to behave
            respectfully towards others, contributing positively and
            constructively to projects. Harassment, abuse, or any behavior that
            could detract from a collaborative and inclusive environment is
            strictly prohibited.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Contributions</h2>
          <ul class="list-disc ml-6 space-y-2">
            <li>
              Ownership: Contributors retain ownership of their original
              contributions. By contributing, you grant a non-exclusive,
              worldwide, royalty-free license to use your contributions in
              connection with the projects and services.
            </li>
            <li>
              Open Source Licensing: Contributions are subject to the project's
              open-source license. Ensure your contributions do not violate any
              licenses or rights.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p>
            Your content remains yours. However, by posting or sharing, you
            provide a license to use it for the operation of projects and services. 
            Original content and features created by Prasun Chakraborty are protected 
            by intellectual property rights.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Disclaimers</h2>
          <p>
            The website, projects, and services are provided on an "as is" basis 
            without any warranties, express or implied. All warranties are disclaimed, 
            including for fitness for a particular purpose or non-infringement.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Prasun Chakraborty shall not 
            be liable for any indirect, incidental, or consequential damages 
            resulting from your use of the website, projects, or services.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Changes to the Terms</h2>
          <p>
            These terms may be modified at any time. By continuing to use the 
            website or services after changes are made, you agree to the revised terms.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            If you have questions about these Terms, please contact me at
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
export class TermsServiceComponent {}
