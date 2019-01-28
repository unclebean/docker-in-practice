const fetch = require('node-fetch');

const getFibonacciWithInput = async (input = 0) => {
  const response = await fetch(`http://127.0.0.1:3000/recurision?input=${input}`);
  return response;
};

export default getFibonacciWithInput;
