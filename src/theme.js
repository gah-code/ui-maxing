const theme = {
  colors: {
    red: '#ec3750',
    green: '#33d6a6',
    blue: '#338eda',
    gray: '#666',
  },
  styles: {
    pre: {
      '.comment, .prolog, .doctype, .cdata, .punctuation, .operator, .entity, .url':
        {
          color: 'gray',
        },
      '.property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable':
        {
          color: 'red',
        },
      '.atrule, .attr-value, .keyword': {
        color: 'blue',
      },
      '.selector, .attr-name, .string, .char, .builtin, .inserted': {
        color: 'green',
      },
    },
  },
};

export default theme;
