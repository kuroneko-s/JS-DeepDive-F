const camelToSnake = (str = "") => {
  return str.replace(/.[A-Z]/g, (match) => {
    console.log(match);
    return match[0] + "_" + match[1].toLowerCase();
  });
};

const camelCase = "helloWorldBaby";

console.log(camelToSnake(camelCase));

const snakeToCamel = (str) => {
  return str.replace(/_[a-z]/g, (match) => {
    console.log(match);
    return match[1].toUpperCase();
  });
};

const snakeCase = camelToSnake(camelCase);

console.log(snakeToCamel(snakeCase));
