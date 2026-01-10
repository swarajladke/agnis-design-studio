import { exportToPdf } from "@/lib/utils";

import { Button } from "../ui/button";

const Export = () => (
  <div className='flex flex-col gap-3'>
    <h4 className='text-[10px] uppercase font-bold text-white/30 tracking-widest'>Export</h4>
    <Button
      variant='outline'
      className='w-full h-9 bg-zinc-900 border-white/5 text-xs font-semibold text-white/80 hover:bg-zinc-800 hover:text-white transition-all focus-ring active:scale-[0.98]'
      onClick={exportToPdf}
    >
      Export to PDF
    </Button>
  </div>
);

export default Export;
