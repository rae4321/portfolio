import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="w-screen h-screen fixed inset-0 flex items-center justify-center bg-zinc-800 z-60">
        {/* Keyframes animasi ketik terminal */}
        <style>{`
          @keyframes blinkCursor {
            50% {
              border-right-color: transparent;
            }
          }
          @keyframes typeAndDelete {
            0%, 10% {
              width: 0;
            }
            45%, 55% {
              width: 6.4em;
            }
            90%, 100% {
              width: 0;
            }
          }
          .terminal-typing {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            border-right: 0.2em solid #a3e635;
            animation:
              typeAndDelete 2s steps(11) infinite,
              blinkCursor 0.5s step-end infinite alternate;
          }
        `}</style>

        {/* Kotak Terminal */}
        <div className="relative w-56 overflow-hidden rounded-md border-2 border-zinc-700 bg-[#1a1a1a] p-4 pt-9 font-mono text-base text-[#a3e635] shadow-[6px_6px_0_#a3e635]">
          
          {/* Header Terminal */}
          <div className="absolute inset-x-0 top-0 flex h-7 items-center justify-between border-b border-zinc-700 bg-zinc-800 px-2.5 text-xs">
            <span className="font-semibold tracking-wider text-zinc-200">Status</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e33]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ee0]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#0b0]"></span>
            </div>
          </div>

          {/* Teks Animasi */}
          <div className="mt-1">
            <span className="terminal-typing font-bold">Loading...</span>
          </div>

        </div>
      </div>
    )
  );
};

export default PreLoader;