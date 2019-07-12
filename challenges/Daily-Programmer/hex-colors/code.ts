export function hexcolor(red: number, green: number, blue: number) {
  return `#${hexMod(red)}${hexMod(green)}${hexMod(blue)}`.toUpperCase();
}

export function blend(list: string[]) {
  //
}

function hexMod(num) {
  return num.toString(16).padStart(2, '0');
}

export const tests = [
  { title: `hexcolor`, args: [255, 99, 71], expects: '#FF6347' },
  { title: `hexcolor`, args: [184, 134, 11], expects: '#B8860B' },
  { title: `hexcolor`, args: [189, 183, 107], expects: '#BDB76B' },
  { title: `hexcolor`, args: [0, 0, 205], expects: '#0000CD' },
];
