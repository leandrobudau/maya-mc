const _ = require("lodash");

const sum = (n1, n2) => {
  return n1 + n2;
};

const minus = (n1, n2) => {
  return n1 - n2;
};

const lastElement = (list = []) => {
  return _.last(list);
};

const mult = (n1, n2) => {
  return n1 * n2;
}

module.exports = {
  sum,
  minus,
  lastElement,
  mult,
};
