"use client";

import { useMemo } from "react";
import Image from "next/image";

import { getShapeInfo } from "@/lib/utils";

const LeftSidebar = ({ allShapes }: { allShapes: Array<any> }) => {
  // memoize the result of this function so that it doesn't change on every render but only when there are new shapes
  const memoizedShapes = useMemo(
    () => (
      <section className="flex flex-col bg-zinc-950/80 backdrop-blur-2xl text-white/70 min-w-[240px] sticky left-0 h-full max-sm:hidden select-none border-r border-white/5 shadow-soft group/sidebar">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.05] bg-black/20 backdrop-blur-sm sticky top-0 z-20">
          <h3 className="text-[10px] uppercase font-bold tracking-[0.12em] text-white/30">Layers</h3>
          <div className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-white/5 cursor-pointer premium-transition opacity-0 group-hover/sidebar:opacity-100">
            <div className="w-3 h-[1px] bg-white/20 relative before:content-[''] before:absolute before:-top-1 before:w-3 before:h-[1px] before:bg-white/20 after:content-[''] after:absolute after:top-1 after:w-3 after:h-[1px] after:after:bg-white/20" />
          </div>
        </div>
        
        <div className="flex flex-col flex-1 overflow-y-auto minimal-scrollbar py-2 px-2 gap-0.5">
          {allShapes && allShapes.length > 0 ? (
            allShapes?.map((shape: any) => {
              const info = getShapeInfo(shape[1]?.type);

              return (
                <div
                  key={shape[1]?.objectId}
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:cursor-pointer hover:bg-white/[0.03] active:bg-white/[0.06] premium-transition relative border border-transparent hover:border-white/[0.03]"
                >
                  {/* Selection Indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-primary-green scale-y-0 group-active:scale-y-100 premium-transition rounded-full" />
                  
                  <div className="w-4 h-4 flex items-center justify-center opacity-30 group-hover:opacity-70 premium-transition">
                    <Image
                      src={info?.icon}
                      alt='Layer'
                      width={14}
                      height={14}
                    />
                  </div>
                  <h3 className='text-[12px] font-medium text-white/50 group-hover:text-white/80 truncate tracking-tight'>{info.name}</h3>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-20 opacity-20 gap-4">
              <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-white/40 flex items-center justify-center">
                <div className="w-4 h-4 bg-white/40 rounded-sm" />
              </div>
              <p className="text-[11px] font-medium tracking-wide">No layers created</p>
            </div>
          )}
        </div>
      </section>
    ),
    [allShapes]
  );

  return memoizedShapes;
};

export default LeftSidebar;
