import { PiHeartbeatFill } from "react-icons/pi";

interface IconProps {
  hp: number
}

export default function HpIcon({hp}:IconProps){
  return(
    <div className="relative w-[46px] h-[46px]">
      <PiHeartbeatFill size={46} className="text-red-600 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]"/>
      <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{hp}</p>
    </div>
  )
}