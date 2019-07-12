export default function solution([A, B]: string[]) {
  //insert a character
  //remove a character
  //replace a character
  if (A === B) return true;

  const maxLen = Math.max(A.length, B.length);

  if (maxLen - A.length > 1 || maxLen - B.length > 1) {
    return false;
  }

  let diffs = 0;
  for (let i = 0; i < maxLen; i++) {}
}

export const tests = [
  { title: 'example', args: ['pale', 'ple'], expects: true },
  { title: 'example', args: ['pales', 'pale'], expects: true },
  { title: 'example', args: ['pale', 'bake'], expects: false },
  { title: 'example', args: ['pales', 'pales'], expects: true },
  { title: 'example', args: ['pales', 'palestttt'], expects: false },
];
