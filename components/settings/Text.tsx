import {
  fontFamilyOptions,
  fontSizeOptions,
  fontWeightOptions,
} from "@/constants";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

const selectConfigs = [
  {
    property: "fontFamily",
    placeholder: "Choose a font",
    options: fontFamilyOptions,
  },
  { property: "fontSize", placeholder: "30", options: fontSizeOptions },
  {
    property: "fontWeight",
    placeholder: "Semibold",
    options: fontWeightOptions,
  },
];

type TextProps = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  handleInputChange: (property: string, value: string) => void;
};

const Text = ({
  fontFamily,
  fontSize,
  fontWeight,
  handleInputChange,
}: TextProps) => (
  <div className='flex flex-col gap-4 pb-2'>
    <div className="flex flex-col gap-1.5">
      <Label className="text-[10px] uppercase font-semibold text-white/30 tracking-wider">Font Family</Label>
      {RenderSelect({
        config: selectConfigs[0],
        fontSize,
        fontWeight,
        fontFamily,
        handleInputChange,
      })}
    </div>

    <div className='grid grid-cols-2 gap-3'>
      <div className="flex flex-col gap-1.5">
        <Label className="text-[10px] uppercase font-semibold text-white/30 tracking-wider">Size</Label>
        {RenderSelect({
          config: selectConfigs[1],
          fontSize,
          fontWeight,
          fontFamily,
          handleInputChange,
        })}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label className="text-[10px] uppercase font-semibold text-white/30 tracking-wider">Weight</Label>
        {RenderSelect({
          config: selectConfigs[2],
          fontSize,
          fontWeight,
          fontFamily,
          handleInputChange,
        })}
      </div>
    </div>
  </div>
);

type Props = {
  config: {
    property: string;
    placeholder: string;
    options: { label: string; value: string }[];
  };
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  handleInputChange: (property: string, value: string) => void;
};

const RenderSelect = ({
  config,
  fontSize,
  fontWeight,
  fontFamily,
  handleInputChange,
}: Props) => (
  <Select
    key={config.property}
    onValueChange={(value) => handleInputChange(config.property, value)}
    value={
      config.property === "fontFamily"
        ? fontFamily
        : config.property === "fontSize"
          ? fontSize
          : fontWeight
    }
  >
    <SelectTrigger className='h-8 bg-zinc-900 border-white/5 text-xs text-white/80 focus-ring hover:bg-zinc-800 transition-colors px-3 rounded-lg'>
      <SelectValue
        placeholder={
          config.property === "fontFamily"
            ? "Font"
            : config.property === "fontSize"
              ? "30"
              : "Weight"
        }
      />
    </SelectTrigger>
    <SelectContent className='border-white/10 bg-zinc-900 text-white/70 shadow-premium'>
      {config.options.map((option) => (
        <SelectItem
          key={option.value}
          value={option.value}
          className=' hover:bg-primary-green hover:text-primary-black'
        >
          {option.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default Text;
