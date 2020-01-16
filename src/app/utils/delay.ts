export const delay = (delay: number, fn: Function) => new Promise(resolve => {
  setTimeout(() => {
    fn();
    resolve()
  }, delay);
})