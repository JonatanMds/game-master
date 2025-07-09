import { IoShieldSharp } from "react-icons/io5"

interface IconProps {
  armorClass: number
}

export default function ArmorClassIcon({armorClass}:IconProps){
  return(
    <div className="relative w-[46px] h-[46px]">
      <IoShieldSharp size={46} className="text-gray-400 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"/>
      <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{armorClass}</p>
    </div>
  )
}