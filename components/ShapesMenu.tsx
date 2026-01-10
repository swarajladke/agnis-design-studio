"use client";

import Image from "next/image";

import { ShapesMenuProps } from "@/types/type";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const ShapesMenu = ({
  item,
  activeElement,
  handleActiveElement,
  handleImageUpload,
  imageInputRef,
}: ShapesMenuProps) => {
  const isDropdownElem = item.value.some((elem) => elem?.value === activeElement.value);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="no-ring">
          <Button className="relative h-5 w-5 object-contain" onClick={() => handleActiveElement(item)}>
            <Image
              src={isDropdownElem ? activeElement.icon : item.icon}
              alt={item.name}
              fill
              className={isDropdownElem ? "invert" : ""}
            />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mt-5 flex flex-col gap-y-1 border-glass-border bg-primary-black/90 backdrop-blur-xl py-3 text-white shadow-premium rounded-xl min-w-[180px]">
          {item.value.map((elem) => (
            <Button
              key={elem?.name}
              onClick={() => {
                handleActiveElement(elem);
              }}
              className={`flex h-fit justify-between items-center gap-10 rounded-lg px-4 py-2 mx-1.5 focus:border-none premium-transition ${
                activeElement.value === elem?.value ? "bg-primary-green/20 text-primary-green" : "hover:bg-white/5"
              }`}
            >
              <div className="group flex items-center gap-2">
                <Image
                  src={elem?.icon as string}
                  alt={elem?.name as string}
                  width={18}
                  height={18}
                  className={activeElement.value === elem?.value ? "invert" : "opacity-60 group-hover:opacity-100"}
                />
                <p
                  className={`text-sm font-medium ${
                    activeElement.value === elem?.value ? "text-primary-green" : "text-white/70"
                  }`}
                >
                  {elem?.name}
                </p>
              </div>
            </Button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <input
        type="file"
        className="hidden"
        ref={imageInputRef}
        accept="image/*"
        onChange={handleImageUpload}
      />
    </>
  );
};

export default ShapesMenu;
