const addDays = require("date-fns/addDays");

const result = addDays(new Date(2023, 5, 30), 100);
const finalResult = `${result.getDate()}/${result.getMonth()}/${result.getFullYear()}`;

module.exports = finalResult;
