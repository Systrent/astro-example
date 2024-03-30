import { useState } from "preact/hooks";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section class="flex flex-col justify-center my-10 items-center gap-4 p-8 border  bg-gray-800 border-gray-700 rounded-lg">
      <div class="flex flex-col items-center gap-1">
        <p class="text-gray-400">Contador:</p>
        <span class="text-4xl font-bold">{counter}</span>
      </div>
      <div class="flex gap-1">
        <button
          class="border border-gray-700 w-12 aspect-square text-4xl rounded-lg text-center pb-2"
          onClick={() => setCounter((counter) => counter - 1)}
        >
          -
        </button>
        <button
          class="border border-gray-700 w-12 aspect-square text-4xl rounded-lg text-center pb-2"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          +
        </button>
      </div>
    </section>
  );
};
