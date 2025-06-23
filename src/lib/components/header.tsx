import {
  splitProps,
  type ComponentProps,
  type ParentComponent,
} from "solid-js";
import { merge } from "../utils/merge";
import HeaderIcon from "./icons/menu";

const HeaderNav: ParentComponent<ComponentProps<"a">> = props => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <a
      class={merge(
        "relative inline-block overflow-hidden group hover:text-brand-100 transition-all",
        local.class
      )}
      {...rest}
    >
      {props.children}

      <span class="absolute left-0 bottom-0 h-0.5 w-full bg-brand-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
    </a>
  );
};

const Header = () => {
  return (
    <header
      id="landing__header"
      class="px-8 sm:px-16 py-4 inline-flex justify-between w-full"
    >
      <section id="landing__header-start">
        <span class="font-doodle text-2xl">Doodleboard</span>
      </section>

      <section id="landing__header-end">
        <button class="sm:hidden">
          <HeaderIcon />
        </button>

        <nav
          id="landing__header-nav"
          class="gap-8 lg:gap-24 hidden sm:inline-flex font-semibold text-accent-50"
        >
          <HeaderNav href="#about">About</HeaderNav>

          <HeaderNav href="#pricing">Pricing</HeaderNav>

          <HeaderNav href="#email-input">Get Notified</HeaderNav>
        </nav>
      </section>
    </header>
  );
};

export default Header;
