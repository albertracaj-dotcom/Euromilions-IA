import { writeFile } from 'node:fs/promises';
const url = 'https://raw.githubusercontent.com/dev-baris/lottery-archive/main/eu/euromillions/results.csv';
const response = await fetch(url);
if (!response.ok) throw new Error('No s’ha pogut descarregar l’arxiu: HTTP ' + response.status);
const lines = (await response.text()).trim().split(/\r?\n/);
const header = lines.shift().split(',');
const expected = ['date','n1','n2','n3','n4','n5','s1','s2'];
if (expected.some((name, i) => header[i] !== name)) throw new Error('Format CSV inesperat');
const draws = lines.map(line => {
  const [date, ...values] = line.split(',');
  const nums = values.map(Number);
  const numbers = nums.slice(0, 5), stars = nums.slice(5, 7);
  if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(date) || numbers.length !== 5 || stars.length !== 2 || numbers.some(n => !Number.isInteger(n) || n < 1 || n > 50) || stars.some(n => !Number.isInteger(n) || n < 1 || n > 12) || new Set(numbers).size !== 5 || new Set(stars).size !== 2) throw new Error('Sorteig invàlid: ' + line);
  return {date, numbers: numbers.sort((a,b)=>a-b), stars: stars.sort((a,b)=>a-b)};
});
if (draws.length < 1000) throw new Error('L’arxiu rebut sembla incomplet.');
const payload = {updated:new Date().toISOString().slice(0,10),sourceName:'LottoData / lottery-archive (arxiu comunitari; dades no oficials)',sourceUrl:'https://github.com/dev-baris/lottery-archive/blob/main/eu/euromillions/results.csv',drawCount:draws.length,latestDraw:draws.at(-1).date,draws};
await writeFile('data/results.json', JSON.stringify(payload, null, 2) + '\n');
console.log('Actualitzats ' + draws.length + ' sortejos. Últim: ' + draws.at(-1).date);