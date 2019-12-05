type CssInput = boolean | string;

export const useCss = (...inputs: CssInput[]) => ({
  className: inputs
    .filter(input => typeof input === 'string')
    .join(' ')
});