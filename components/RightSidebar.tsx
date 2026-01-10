import React, { useMemo, useRef } from "react";

import { RightSidebarProps } from "@/types/type";
import { bringElement, modifyShape } from "@/lib/shapes";

import Text from "./settings/Text";
import Color from "./settings/Color";
import Export from "./settings/Export";
import Dimensions from "./settings/Dimensions";

const RightSidebar = ({
  elementAttributes,
  setElementAttributes,
  fabricRef,
  activeObjectRef,
  isEditingRef,
  syncShapeInStorage,
}: RightSidebarProps) => {
  const colorInputRef = useRef(null);
  const strokeInputRef = useRef(null);

  const handleInputChange = (property: string, value: string) => {
    if (!isEditingRef.current) isEditingRef.current = true;

    setElementAttributes((prev) => ({ ...prev, [property]: value }));

    modifyShape({
      canvas: fabricRef.current as fabric.Canvas,
      property,
      value,
      activeObjectRef,
      syncShapeInStorage,
    });
  };
  
  // memoize the content of the right sidebar to avoid re-rendering on every mouse actions
  const memoizedContent = useMemo(
    () => (
      <section className="flex flex-col bg-zinc-950 text-white/70 min-w-[240px] sticky right-0 h-full max-sm:hidden select-none border-l border-white/5 shadow-soft">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-20">
          <h3 className="text-[11px] uppercase font-bold tracking-[0.08em] text-white/40">Design</h3>
        </div>

        <div className="flex flex-col overflow-y-auto no-scrollbar py-2">
          {/* Layout Section */}
          <div className="px-5 py-4 border-b border-white/[0.03]">
            <Dimensions
              isEditingRef={isEditingRef}
              width={elementAttributes.width}
              height={elementAttributes.height}
              handleInputChange={handleInputChange}
            />
          </div>

          {/* Text Section */}
          <div className="px-5 py-4 border-b border-white/[0.03]">
            <Text
              fontFamily={elementAttributes.fontFamily}
              fontSize={elementAttributes.fontSize}
              fontWeight={elementAttributes.fontWeight}
              handleInputChange={handleInputChange}
            />
          </div>

          {/* Appearance Section */}
          <div className="px-5 py-4 border-b border-white/[0.03] flex flex-col gap-4">
            <Color
              inputRef={colorInputRef}
              attribute={elementAttributes.fill}
              placeholder="Fill"
              attributeType="fill"
              handleInputChange={handleInputChange}
            />
            <Color
              inputRef={strokeInputRef}
              attribute={elementAttributes.stroke}
              placeholder="Stroke"
              attributeType="stroke"
              handleInputChange={handleInputChange}
            />
          </div>

          {/* Export Section */}
          <div className="px-5 py-6">
            <Export />
          </div>
        </div>
      </section>
    ),
    [elementAttributes]
  ); // only re-render when elementAttributes changes

  return memoizedContent;
};

export default RightSidebar;
