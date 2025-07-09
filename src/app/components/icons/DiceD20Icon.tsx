import { FaDiceD20 } from "react-icons/fa";

interface IconProps {
  DiceD20: number
}

export default function DiceD20Icon({DiceD20}:IconProps){
  return(
    <div className="relative w-[46px] h-[46px]">
      <FaDiceD20 size={46} className="text-whited drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]"/>
      <p className="absolute inset-0 flex items-center justify-center text-[#f3d796] font-bold text-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{DiceD20}</p>
    </div>
  )
}