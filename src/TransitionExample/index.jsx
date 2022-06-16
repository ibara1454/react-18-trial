import { useState, useTransition } from "react";

/**
 * Run a heavy task to suspend the main thread for a while.
 * @param {Number} ms - The number of milliseconds to suspend the main thread.
 */
function sleep(ms) {
  const startTime = Date.now();
  while (Date.now() - startTime < ms);
}

const TransitionExample = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="p-8 bg-slate-100 rounded-2xl overflow-hidden flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <button
          className="focus:outline-none focus:ring-2 ring-sky-200 hover:bg-sky-700 h-12 active:bg-sky-800 px-6 py-4 flex justify-center items-center bg-sky-500 rounded-full text-white font-bold uppercase"
          onClick={() => setCounter(counter + 1)}
        >
          Click
        </button>
        <p>to re-render HeavyComponent</p>
      </div>

      <HeavyComponent />
    </div>
  );
};

const HeavyComponent = () => {
  // sleep(1000);
  return (
    <div className="flex justify-center flex-col items-center p-8 gap-8 border-4 border-slate-600 rounded-lg">
      <p>HeavyComponent</p>
      <div class="animate-spin bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
        <svg
          class="w-6 h-6 text-violet-500"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default TransitionExample;
