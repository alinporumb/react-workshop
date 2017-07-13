export const pipe = (...fns) => {
  return fns.reduce((acc, fn) => {

    // describe function
    return (...args) => {
      // chain functions..
      return acc(fn(...args));
    }

  });
};