// split if it goes up AND it is higher than the end of the last group

export default function solution(A) {
  let giraffeGroups = [];
  let currentGroup = [];

  let maxHeight = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i + 1]) {
      //add current giraffe to the current group
      currentGroup.push(A[i]);
    } else {
      //set max height if current giraffe is taller than previous maxheight
      maxHeight = Math.max(maxHeight, A[i]);

      //if the maxheight is higher than the current we return 1 group;
      if (maxHeight > A[i]) {
        return 1;
      } else {
        //add current giraffe, push current group, and reset the current group array;
        currentGroup.push(A[i]);
        giraffeGroups.push(currentGroup);
        currentGroup = [];
      }
    }
  }

  return giraffeGroups.length;
}

export const tests = [
  // {title: '', args: '', expects: ''},
  { title: 'ex 1', args: [1, 5, 4, 9, 8, 7, 12, 13, 14], expects: 6 },
  { title: 'ex 2', args: [4, 3, 2, 6, 1], expects: 1 },
];
