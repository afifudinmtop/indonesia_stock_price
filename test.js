const app = require("./app.js");
const stock = "bbca";

app.stock_price(stock).then(function (result) {
  console.log(result);
});
