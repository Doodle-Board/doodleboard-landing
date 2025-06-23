import type { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="bg-base-100 border-t-1 border-base-300 w-full flex flex-col-reverse lg:flex-row p-16 gap-16">
      <section class="shrink-0">
        <img src="/assets/logo_256.png" class="w-32 h-32" />
        <span class="font-bold text-accent-50">Doodleboard. &copy</span>
        <br />
        <span class="text-accent-50">Providing whiteboarding since 2025</span>
      </section>

      <section class="flex flex-col grid-cols-3 lg:grid gap-8 w-full text-accent-50">
        <div class="flex flex-col gap-1">
          <span class="font-bold text-lg">Services</span>
          <li>Whiteboarding</li>
          <li>Pricing</li>
          <li>About</li>
        </div>

        <div class="flex flex-col">
          <span class="font-bold mb-2 text-lg">Company</span>
          <li>About us</li>
          <li>Contact</li>
          <li>Services</li>
        </div>

        <div class="flex flex-col">
          <span class="font-bold mb-2 text-lg">Legal</span>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
          <li>License Agreement</li>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
