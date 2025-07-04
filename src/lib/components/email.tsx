import { type JSX } from "solid-js";
import { merge } from "../utils/merge";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const EmailRegister = () => {
  const handleSubmit: JSX.EventHandlerUnion<
    HTMLFormElement,
    SubmitEvent
  > = async event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    await fetch(supabaseUrl + "/rest/v1/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseAnonKey,
        Authorization: "Bearer " + supabaseAnonKey,
      },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      class={merge(
        "text-lg rounded-lg inline-flex border-base-300 border-1 w-fit transition-all bg-white",
        "focus-within:outline-solid outline-none outline-offset-2 outline-3 outline-brand-100"
      )}
    >
      <section class="inline-flex place-items-center px-2 rounded-lg transition-all">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2043 16 19 16C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4705 2.77521 14.2726 2.26229C12.0747 1.74936 9.76793 1.99503 7.72734 2.95936C5.68676 3.92368 4.03239 5.54995 3.03325 7.57371C2.03411 9.59748 1.74896 11.8997 2.22416 14.1061C2.69936 16.3125 3.90697 18.2932 5.65062 19.7263C7.39428 21.1593 9.57143 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79085 9.79086 7.99999 12 7.99999C14.2091 7.99999 16 9.79085 16 12Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input
          id="email-input"
          type="email"
          class="p-2 max-w-96 w-full outline-none"
          placeholder="Enter your email"
        />
      </section>

      <button
        type="submit"
        class={merge(
          "bg-brand-100 transition-all p-2 text-white font-semibold rounded-r-lg",
          "active:scale-95 disabled:bg-accent-50 hover:bg-brand-200 text-nowrap",
          "focus-visible:outline-solid outline-none outline-offset-2 outline-3 outline-brand-100"
        )}
      >
        Notify Me
      </button>
    </form>
  );
};

export default EmailRegister;
