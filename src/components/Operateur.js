const objet1 = {
  a: 1,
  b: 2,
  e: 3,
};
const { e } = objet1;
console.log(e);
const objet2 = {
  c: 1,
  d: 2,
  e: 3,
};

const objet3 = {
  ...objet1,
  ...objet2,
};

console.log(objet3);
