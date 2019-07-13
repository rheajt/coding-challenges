function solution(A: string) {
  return A.replace(/\s/g, '%20');
}

const tests = [
  {
    title: 'should replace spaces with %20',
    args: 'this is an example string',
    expects: 'this%20is%20an%20example%20string',
  },
];

export default solution;
export { tests };
