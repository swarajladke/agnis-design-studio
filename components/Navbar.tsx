"use client";

import Image from "next/image";
import { memo } from "react";

import { navElements } from "@/constants";
import { ActiveElement, NavbarProps } from "@/types/type";

import { Button } from "./ui/button";
import ShapesMenu from "./ShapesMenu";
import ActiveUsers from "./users/ActiveUsers";
import { NewThread } from "./comments/NewThread";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Navbar = ({ activeElement, imageInputRef, handleImageUpload, handleActiveElement }: NavbarProps) => {
  const isActive = (value: string | Array<ActiveElement>) =>
    (activeElement && activeElement.value === value) ||
    (Array.isArray(value) && value.some((val) => val?.value === activeElement?.value));

  return (
    <div className="absolute top-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <nav className="flex select-none items-center gap-2 bg-zinc-950/40 backdrop-blur-xl border border-white/[0.08] p-1.5 rounded-[20px] shadow-soft pointer-events-auto h-[56px]">
        <div className="flex items-center px-4 border-r border-white/5 mr-1 group/logo cursor-default">
          <Image 
            src="/assets/logo.svg" 
            alt="FigPro" 
            width={32} 
            height={12} 
            className="opacity-70 group-hover/logo:opacity-100 premium-transition" 
          />
        </div>

        <TooltipProvider delayDuration={300}>
          <ul className="flex flex-row items-center gap-1">
            {navElements.map((item: ActiveElement | any) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <li
                    key={item.name}
                    onClick={() => {
                      if (Array.isArray(item.value)) return;
                      handleActiveElement(item);
                    }}
                    className={`group w-10 h-10 flex justify-center items-center rounded-xl premium-transition cursor-pointer shrink-0 relative
                    ${isActive(item.value) 
                      ? "bg-primary-green text-white shadow-glow ring-2 ring-primary-green/20" 
                      : "hover:bg-white/5 text-white/40 hover:text-white"
                    }
                    `}
                  >
                    {Array.isArray(item.value) ? (
                      <ShapesMenu
                        item={item}
                        activeElement={activeElement}
                        imageInputRef={imageInputRef}
                        handleActiveElement={handleActiveElement}
                        handleImageUpload={handleImageUpload}
                      />
                    ) : item?.value === "comments" ? (
                      <NewThread>
                        <Button className="relative w-4 h-4 object-contain">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            fill
                            className={isActive(item.value) ? "brightness-200" : "opacity-60 group-hover:opacity-100"}
                          />
                        </Button>
                      </NewThread>
                    ) : (
                      <Button className="relative w-4 h-4 object-contain">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          fill
                          className={isActive(item.value) ? "brightness-200" : "opacity-60 group-hover:opacity-100"}
                        />
                      </Button>
                    )}
                  </li>
                </TooltipTrigger>
                <TooltipContent 
                  side="bottom" 
                  sideOffset={12} 
                  className="bg-zinc-900 text-white border-white/[0.08] text-[11px] font-medium px-2.5 py-1.5 rounded-lg shadow-premium backdrop-blur-md"
                >
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </TooltipProvider>

        <div className="flex items-center border-l border-white/5 pl-3 ml-1 pr-2 gap-4">
          <ActiveUsers />
          
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 premium-transition flex items-center justify-center p-0"
                  onClick={() => handleActiveElement({ name: "Reset", value: "reset", icon: "/assets/reset.svg" })}
                >
                  <Image src="/assets/reset.svg" alt="Reset" width={16} height={16} className="brightness-125" />
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                side="bottom" 
                sideOffset={12} 
                className="bg-zinc-900 text-white border-white/[0.08] text-[11px] font-medium px-2.5 py-1.5 rounded-lg shadow-premium backdrop-blur-md"
              >
                <p>Clear Canvas</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>
    </div>
  );
};

export default memo(Navbar, (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement);
