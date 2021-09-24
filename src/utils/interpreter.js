const allowedMethod = ["Name"];

/**
 *
 * @param {String} text
 * @param {Array} coins
 * @returns {Object} {text, errors}
 */

export const interpreter = (text, coins) => {
  const matches = Array.from(
    text.matchAll(/{{\s*([A-Za-z1-9+]+)\s*\/\s*([A-Za-z]+)\s*}}/g)
  );

  const list = [];
  const errors = [];
  let head = 0;
  for (let i = 0; i < matches.length; i++) {
    const { 0: capture, 1: method, 2: value, index } = matches[i];
    list.push(text.substring(head, index));
    const { word, error } = getMatchedWord(method, value, coins);

    if (error) {
      errors.push(error);
      list.push(capture);
    } else {
      list.push(word);
    }
    head = index + capture.length;
  }

  list.push(text.substring(head));
  return { text: list.join(""), errors };
};

/**
 *
 * @param {String} method
 * @param {String} arg
 * @param {Array} coins
 * @returns {Object} { word, error }
 */

const getMatchedWord = (method, arg, coins) => {
  if (!allowedMethod.includes(method)) {
    return { error: `The method *${method}* is not recognized ` };
  }

  const word = coins.find((coin) => coin.symbol === arg);

  if (!word) {
    return { error: `The coin *${arg}* is not found` };
  }

  return { word: word.name };
};
