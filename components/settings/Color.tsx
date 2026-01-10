import { Label } from "../ui/label";

type Props = {
  inputRef: any;
  attribute: string;
  placeholder: string;
  attributeType: string;
  handleInputChange: (property: string, value: string) => void;
};

const Color = ({
  inputRef,
  attribute,
  placeholder,
  attributeType,
  handleInputChange,
}: Props) => (
  <div className='flex flex-col gap-1.5'>
    <Label className="text-[10px] uppercase font-semibold text-white/30 tracking-wider">
      {placeholder}
    </Label>
    <div
      className='flex items-center gap-2 px-2 py-1.5 bg-zinc-900 border border-white/5 rounded-lg hover:bg-zinc-800 premium-transition cursor-pointer group'
      onClick={() => inputRef.current.click()}
    >
      <div 
        className="w-6 h-6 rounded-md shadow-inner border border-white/10"
        style={{ backgroundColor: attribute }}
      />
      <input
        type='color'
        className="absolute invisible"
        value={attribute}
        ref={inputRef}
        onChange={(e) => handleInputChange(attributeType, e.target.value)}
      />
      <Label className='flex-1 text-xs font-mono text-white/70 group-hover:text-white uppercase'>
        {attribute}
      </Label>
      <div className='px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] text-white/40 font-bold'>
        100%
      </div>
    </div>
  </div>
);

export default Color;
