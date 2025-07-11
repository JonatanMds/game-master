'use client'
import { CardProps } from "@/app/interface/Card"
import Image from "next/image"
import { useState } from "react"
import HpInput from "../ui/hpInput"
import ArmorClassIcon from "../icons/ArmorClassIcon"
import HpIcon from "../icons/HpIcon"
import LevelCharacterIcon from "../icons/LevelIcon"
import DiceD20Icon from "../icons/DiceD20Icon"
import { rolarXDadosD20 } from "@/app/utils/RollDice"

export default function Card(props: CardProps){
  const {name, ac, pt = 0} = props
  const [hp, setHp] = useState(pt)
  const [resultados, setResultados] = useState<number>(0);

  function subtractHp(numberInput: number){
    const novoValor = hp - numberInput
    setHp(novoValor)
  }
  
  function addHp(numberInput: number){
    const novoValor = hp + Number(numberInput)
    setHp(novoValor)
  }

  const handleRolarDados = () => {
      const resultado = rolarXDadosD20(1) as number;
      setResultados(resultado);
    };

  return(
      <div className="relative w-[320px] h-[360px]">
        <div className="z-10 absolute flex justify-between left-0 right-0">
         <div className="flex flex-col items-center">
          <LevelCharacterIcon levelCharacter={2}/>
         </div>
          <div className="flex text-white font-bold m-0 text-xl gap-2">
            <ArmorClassIcon armorClass={ac}/>
            <HpIcon hp={hp}/>
          </div>
        </div>
        <Image
          alt="Imagem do Personagem"
          src={'/imagens/character.jpeg'}
          fill
          className="object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 text-white font-bold p-4 m-0 text-xl flex flex-col gap-4 items-center bg-gradient-to-b from-transparent to-[#f3d796]">
          <p className="w-full flex justify-center">{name}</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <DiceD20Icon DiceD20={resultados} onClick={handleRolarDados}/>
              <p className="text-xs text-white">Inic.</p>
            </div>
            <div className="flex gap-6">
              <HpInput operationName="Dano" onSubmit={subtractHp} bgColor="danger"/>
              <HpInput operationName="Cura" onSubmit={addHp} bgColor="success"/>
            </div>
              <HpIcon hp={hp}/>
          </div>
        </div>
      </div>
  )
}