import Card from "./components/Card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center justify-center sm:items-start gap-4">
        <h1 className="w-full text-center">Mesa do mestre</h1>
        <div className="flex flex-col items-center gap-2">
          <h1>Heróis</h1>
          <div className="flex gap-4">
            <Card name="Jon" ac={16} pt={12} level={2}/>
            <Card name="Jon" ac={12} level={2}/>
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
