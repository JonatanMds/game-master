'use client'
import { useState } from "react";
import Card from "./components/Card";
import { BiSolidShieldPlus } from "react-icons/bi";
import { rolarXDadosD20 } from "./utils/RollDice";

export default function Home() {

  const [newHeroCard, setNewHeroCard] = useState([{ id: Date.now() }])
  {/* Futuras atualizações */}
  // const [resultados, setResultados] = useState<number[] | number>(0);

  const addHeroCard = () =>{
    setNewHeroCard((prev) => [...prev, {id: Date.now()}])
  }

  {/* Futuras atualizações */}
  // const handleRolarDados = (quantidadeDeHerois: number) => {
  //   const resultado = rolarXDadosD20(quantidadeDeHerois);
  //   setResultados(resultado);
  // };


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center justify-center sm:items-start gap-4">
        <h1 className="w-full text-center">Mesa do mestre</h1>
        {/* Futuras atualizações */}
        {/* <button
        onClick={() => handleRolarDados(newHeroCard.length)}
        className="px-4 py-2 bg-rose-700 text-white font-semibold rounded hover:bg-rose-800 transition"
      >
        Roll Initiative (d20)
      </button>
        <p>{resultados}</p> */}
        <div className="flex flex-col items-center gap-2">
          <h1>Heróis</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {newHeroCard.map((hero)=>{
              return(
                <Card key={hero.id} name="Jon" ac={16} pt={12} level={2}/>
              )
            })}
            <div onClick={addHeroCard} className="w-[320px] flex flex-col items-center justify-center cursor-pointer border gap-2">
              <BiSolidShieldPlus size={86} />
              <div>Adicione mais jogadores</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1>Inimigos</h1>
          <div className="flex gap-4">
            <Card name="Goblin" ac={16} pt={12} level={2}/>
            <Card name="Sapo gigante venenoso" ac={12} level={2}/>
          </div>
        </div>
      </main>
    </div>
  );
}
