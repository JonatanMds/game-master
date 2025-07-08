'use client'
import { CardProps } from "@/app/interface/Card"
import Image from "next/image"
import { useState } from "react"
import HpInput from "../ui/hpInput"

export default function Card(props: CardProps){
  const {name, ac, pt = 0, level} = props
  const [hp, setHp] = useState(pt)

  function subtractHp(numberInput: number){
    const novoValor = hp - numberInput
    setHp(novoValor)
  }
  
  function addHp(numberInput: number){
    const novoValor = hp + Number(numberInput)
    setHp(novoValor)
  }

  return(
      <div className="relative w-[320px] h-[360px]">
        <div className="z-10 absolute flex justify-between left-0 right-0">
          <p className="top-0 left-0 bg-black bg-opacity-50 text-white font-bold p-1 m-0 text-2xl">
            {level}
          </p>
          <div className="flex text-white font-bold m-0 text-xl gap-2">
            <p className="flex items-center">{ac}</p>
            <p className="text-center rounded-bl bg-[#ed4343] p-2">{hp}</p>
          </div>
        </div>
        <Image
          alt="Imagem do Personagem"
          src={'/imagens/character.jpeg'}
          fill
          className="object-cover"
        />
        <div className="absolute h-[180px] left-0 right-0 bottom-0 text-white font-bold p-1 m-0 text-xl flex-column items-center bg-gradient-to-b from-transparent to-black">
          <p className="w-full flex justify-center">{name}</p>
          <div className="h-full flex justify-center items-center gap-4">
            <div className="flex gap-6">
              <HpInput operationName="Diminuir" onSubmit={subtractHp} bgColor="danger"/>
              <HpInput operationName="Aumentar" onSubmit={addHp} maxHp={hp} bgColor="success"/>
            </div>
              <p className="p-4 bg-[#ed4343]">{hp}</p>
          </div>
        </div>
      </div>
  )
}