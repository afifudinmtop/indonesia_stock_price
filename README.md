# indonesia_stock_price

indonesia (idx) stock price from web scrap

## Installation

```
npm i indonesia_stock_price
```

## Demo

Local demo:

```
git clone https://github.com/afifudinmtop/indonesia_stock_price.git
cd indonesia_stock_price
npm install && node test.js

// it will return => BBCA : Rp8,700.00
// please change the stock variable to get different result
```

## Examples

```jsx
const app = require("indonesia_stock_price");
const stock = "bbca";

app.stock_price(stock).then(function (result) {
  console.log(result);
});
// it will return => BBCA : Rp8,700.00
// please change the stock variable to get different result
```

// you can see the example files on test.js

## License

indonesia_stock_price is open source software [licensed as MIT](https://github.com/afifudinmtop/indonesia_stock_price/blob/main/LICENSE).
