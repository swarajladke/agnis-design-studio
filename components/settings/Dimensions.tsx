import { Label } from "../ui/label";
import { Input } from "../ui/input";

const dimensionsOptions = [
  { label: "Width", property: "width" },
  { label: "Height", property: "height" },
];

type Props = {
  width: string;
  height: string;
  isEditingRef: React.MutableRefObject<boolean>;
  handleInputChange: (property: string, value: string) => void;
};

const Dimensions = ({ width, height, isEditingRef, handleInputChange }: Props) => (
  <div className="grid grid-cols-2 gap-3 pb-2">
    {dimensionsOptions.map((item) => (
      <div key={item.label} className="flex flex-col gap-1.5">
        <Label htmlFor={item.property} className="text-[10px] uppercase font-semibold text-white/30 tracking-wider">
          {item.label}
        </Label>
        <Input
          type="number"
          id={item.property}
          value={item.property === "width" ? width : height}
          className="h-8 bg-zinc-900 border-white/5 text-xs text-white/80 focus-ring hover:bg-zinc-800 transition-colors"
          min={10}
          onChange={(e) => handleInputChange(item.property, e.target.value)}
          onBlur={() => {
            isEditingRef.current = false;
          }}
        />
      </div>
    ))}
  </div>
);

export default Dimensions;
