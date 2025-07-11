import { DiceRoll } from '@dice-roller/rpg-dice-roller';

export function rolarXDadosD20(quantidade: number): number | number[] {
  const roll = new DiceRoll(`${quantidade}d20`);
  const resultados: number[] = [];

  for (const r of roll.rolls) {
    if (typeof r === 'object' && 'rolls' in r) {
      for (const dado of r.rolls) {
        resultados.push(dado.value);
      }
    }
  }

  return quantidade === 1 ? resultados[0] : resultados;
}