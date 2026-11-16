import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900 px-12 py-10 shadow-xl">
        <h1 className="text-4xl font-bold tracking-tight">rk-code</h1>
        <p className="mt-2 text-zinc-400">Electron + React + Tailwind CSS</p>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="mt-8 rounded-lg bg-indigo-500 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-400 active:scale-95"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-zinc-500">
          Edit <code className="text-indigo-300">src/App.tsx</code> to test HMR
        </p>
      </div>
    </main>
  );
}
