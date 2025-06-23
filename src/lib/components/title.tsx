import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { onMount } from "solid-js";
import type { Component } from "solid-js/types/server/rendering.js";

gsap.registerPlugin(DrawSVGPlugin, SplitText);

const Title: Component = () => {
  onMount(() => {
    const timeline = gsap.timeline();

    for (let index = 1; index <= 3; index++) {
      const id = `#title_line_${index}`;
      const split = new SplitText(id, { type: "chars" });

      timeline.from(
        split.chars,
        {
          y: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
        },
        index * 0.3
      );
    }

    timeline.from(
      "#title__highlight path",
      {
        drawSVG: "0%",
        duration: 0.3,
        ease: "power3.inOut",
        stagger: 0.3,
      },
      "+=0.1"
    );
  });

  return (
    <section
      id="landing__title"
      class="flex flex-col text-5xl sm:text-5xl xl:text-8xl lg:pt-12 font-bold text-nowrap w-fit"
    >
      <span id="title_line_1">Creative</span>

      <span id="title_line_2">whiteboarding</span>

      <span id="title_line_3" class="relative w-fit">
        done right.
        <svg
          id="title__highlight"
          class="w-30 sm:w-36 xl:w-60 absolute right-0 select-none"
          viewBox="0 0 95 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="title__highlight_a"
            d="M3.00001 3.50018C22.254 4.16457 40.6142 4.10649 91.0138 3.00012"
            stroke="#ECB761"
            stroke-width="8"
            stroke-linecap="round"
          />
          <path
            id="title__highlight_b"
            d="M8.00917 8.89448C36.7283 6.90631 53.3052 6.67799 84.0092 8.39442"
            stroke="#ECB761"
            stroke-width="8"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </section>
  );
};

export default Title;
