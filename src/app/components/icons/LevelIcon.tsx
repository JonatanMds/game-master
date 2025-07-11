import { GiSwordsEmblem } from "react-icons/gi";

interface IconProps {
  levelCharacter: number
}

export default function LevelCharacterIcon({levelCharacter}:IconProps){
  return(
    <div className="relative w-[46px] h-[46px]">
      <GiSwordsEmblem size={46} className="text-[#f3d796] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]"/>
      <p className="absolute inset-0 flex items-center justify-center top-1 text-white font-bold text-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{levelCharacter}Lvl.</p>
    </div>
  )
}