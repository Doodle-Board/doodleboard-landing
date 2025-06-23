import "./app.css";
import EmailRegister from "./lib/components/email";
import Footer from "./lib/components/footer";
import Header from "./lib/components/header";
import TickIcon from "./lib/components/icons/tick-icon";
import Title from "./lib/components/title";
import { merge } from "./lib/utils/merge";

function App() {
  return (
    <article id="lading__page" class="flex flex-col overflow-x-hidden">
      <section class="w-screen h-screen overflow-hidden relative">
        <section class="pt-4 max-w-[1920px] m-auto">
          <Header />
        </section>

        <section class="h-full relative flex flex-col lg:flex-row h-short:flex-row gap-8 sm:gap-0 grow max-w-[1920px] m-auto">
          <section class="h-fit rounded-lg px-8 lg:px-16 w-fit z-50">
            <section class="w-full h-full z-50">
              <Title />

              <section class="mt-8 xl:mt-18 flex flex-col gap-2 w-fit">
                <span class="text-accent-50">
                  Doodleboard is coming soon, enter your email to get notified
                  when it releases
                </span>

                <EmailRegister />
              </section>
            </section>
          </section>

          <section class="w-full h-full rounded-lg relative z-50">
            <img src="/assets/splash.svg" class="absolute top-0" />

            <div class="animate-slide-whiteboard z-50 md:ml-15 grid md:block mt-10 md:mt-15 place-items-center lg:place-items-start">
              <div class="bg-white rounded-lg w-7/8 md:w-3/4 h-fit shadow-2xl xl:mt-30 xl:ml-15 whiteboard overflow-hidden z-50">
                <div class="w-full bg-base-200 inline-flex place-items-center gap-2 p-2 lg:p-4">
                  <div class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-300 hover:bg-red-400 transition-all active:scale-95" />
                  <div class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-300 hover:bg-yellow-400 transition-all active:scale-95" />
                  <div class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-300 hover:bg-green-400 transition-all active:scale-95" />
                </div>

                <div class="p-4 px-16">
                  <video class="m-[1px]" autoplay muted playsinline>
                    <source src="/assets/videos/graph.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div class="absolute w-screen bottom-0">
          <img src="/assets/landing-squiggle.svg" />

          <div class="block md:hidden h-[20vh] w-full bg-brand-100"></div>
        </div>
      </section>

      <section class="w-screen bg-brand-100 flex flex-col p-8 md:p-16 text-white gap-16">
        <section class="flex flex-col lg:flex-row-reverse gap-8">
          <section class="flex flex-col gap-4 text-center lg:text-right max-w-172 m-auto">
            <span class="text-4xl md:text-5xl lg:text-6xl font-bold">
              Just get drawing.
            </span>

            <span class="lg:text-xl">
              Doodleboard gives you the tools to express your ideas quickly,
              visually and beautifully no matter if you're planning a holiday,
              brainstorming in a team, taking study notes, giving a presentation
              or anything else you can imagine.
            </span>
          </section>

          <video
            class="w-128 rounded-2xl m-auto p-8 bg-white"
            autoplay
            muted
            playsinline
          >
            <source src="/assets/videos/idea.webm" type="video/webm" />
          </video>
        </section>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section class="flex flex-col gap-4 text-center lg:text-left max-w-172 m-auto">
            <span class="text-4xl md:text-5xl lg:text-6xl font-bold">
              Work with anyone in real time.
            </span>

            <span class="lg:text-xl">
              With doodleboard you can draw together with anyone in real time.
              All whiteboards are saved to the cloud so anyone in your team can
              access them whenever they need
            </span>
          </section>

          <video
            class="w-128 rounded-2xl m-auto p-8 bg-white"
            autoplay
            muted
            playsinline
          >
            <source src="/assets/videos/collab.webm" type="video/webm" />
          </video>
        </section>
      </section>

      <section class="w-screen h-fit">
        <img class="rotate-180" src="/assets/landing-squiggle.svg" />
      </section>

      <section class="w-screen lg:h-screen grid place-items-center">
        <section class="p-8 md:p-16">
          <section class="flex flex-col text-center mb-8">
            <span class="text-4xl md:text-6xl font-bold">Pricing</span>

            <span class="text-lg md:text-xl">
              Simple pricing, worry about your ideas not your bills
            </span>
          </section>

          <section class="flex flex-col lg:flex-row gap-8">
            <section class="w-full bg-base-100 rounded-lg border-1 border-base-300 p-4 flex flex-col max-w-84 justify-between md:h-128 gap-4">
              <section class="flex flex-col">
                <span class="font-bold text-3xl">Free</span>
                <span class="font-bold text-xl text-brand-100">£0/month</span>

                <div class="w-full h-[1px] bg-base-300 my-4" />

                <ul class="flex flex-col gap-2 text-accent-50">
                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    One Infinite Whiteboard
                  </li>

                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    All of doodlboard's creative tools to try out
                  </li>
                </ul>
              </section>

              <button
                disabled
                class={merge(
                  "bg-brand-100 transition-all p-2 text-white font-semibold rounded-lg text-center",
                  "active:scale-95 disabled:bg-accent-50 hover:bg-brand-200",
                  "focus-visible:outline-solid outline-none outline-offset-2 outline-3 outline-brand-100"
                )}
              >
                Try it out
              </button>
            </section>

            <section class="w-full bg-base-100 rounded-lg border-1 border-base-300 p-4 flex flex-col max-w-84 justify-between md:h-128 gap-4">
              <section class="flex flex-col">
                <span class="font-bold text-3xl">Standard</span>
                <span class="font-bold text-xl text-brand-100">£6/month</span>

                <div class="w-full h-[1px] bg-base-300 my-4" />

                <ul class="flex flex-col gap-2 text-accent-50">
                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Everything in free
                  </li>

                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Unlimited Whiteboards
                  </li>

                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Collaborate with anyone
                  </li>

                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Presentations
                  </li>

                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Teams to organize shared work
                  </li>

                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Export whiteboards to a range of formats
                  </li>
                </ul>
              </section>

              <button
                disabled
                class={merge(
                  "bg-brand-100 transition-all p-2 text-white font-semibold rounded-lg text-center",
                  "active:scale-95 disabled:bg-accent-50 hover:bg-brand-200",
                  "focus-visible:outline-solid outline-none outline-offset-2 outline-3 outline-brand-100"
                )}
              >
                Sign up
              </button>
            </section>

            <section class="w-full bg-base-100 rounded-lg border-1 border-base-300 p-4 flex flex-col max-w-84 justify-between md:h-128 gap-4">
              <section class="flex flex-col">
                <span class="font-bold text-3xl">Team</span>
                <span class="font-bold text-xl text-brand-100">
                  £6 user/month
                </span>

                <div class="w-full h-[1px] bg-base-300 my-4" />
                <ul class="flex flex-col gap-2 text-accent-50">
                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Everything in standard
                  </li>

                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Unified billing
                  </li>

                  <li class="inline-flex gap-2">
                    <TickIcon class="text-brand-100 shrink-0" />
                    Direct support from our team
                  </li>
                </ul>
              </section>

              <button
                disabled
                class={merge(
                  "bg-brand-100 transition-all p-2 text-white font-semibold rounded-lg text-center",
                  "active:scale-95 disabled:bg-accent-50 hover:bg-brand-200",
                  "focus-visible:outline-solid outline-none outline-offset-2 outline-3 outline-brand-100"
                )}
              >
                Contact Us
              </button>
            </section>
          </section>
        </section>
      </section>

      <Footer />
    </article>
  );
}

export default App;
