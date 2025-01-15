# Currency Prices Free
Free web service to get currency prices

Checkout this [website 👈🏻](https://babakcode.com)

![Screenshot 2025-01-15 185120](https://github.com/user-attachments/assets/896456b6-3276-4878-b48d-7043af90af83)

### Cryptocurrencies

```javascript

// request
fetch('https://currency.babakcode.com/api/v2/crypto/all/USD' ,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "api-key": "YOUR-API-KEY",
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
```

Response:
```json
[
  {
    "name": "Bitcoin",
    "price": 95975.84,
    "priceStr": "$95,975.84",
    "logo": "https://currency.babakcode.com/api/v1/images/crypto/bitcoin_btc.png",
    "symbol": "BTC",
    "timestamp": 1733269152488
  },
  {
    "name": "Ethereum",
    "price": 3623.2,
    "priceStr": "$3,623.20",
    "logo": "https://currency.babakcode.com/api/v1/images/crypto/ethereum_eth.png",
    "symbol": "ETH",
    "timestamp": 1733269152938
  }
]
```

---

### Fiat Currencies

`USD`, United State Dollar
```javascript

// request
fetch('https://currency.babakcode.com/api/v2/currency/all/USD' ,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "api-key": "YOUR-API-KEY",
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
```

Response:
```json
[
  {
    "priceStr": "$1.00",
    "price": 1,
    "currency": "USD",
    "name": "Dollar",
    "svg": "https://currency.babakcode.com/api/v1/images/flags/US.svg",
    "timestamp": 1733267190311
  },
  {
    "priceStr": "$1.0547858499",
    "price": 1.0547858499191223,
    "currency": "EUR",
    "name": "Euro",
    "svg": "https://currency.babakcode.com/api/v1/images/flags/EU.svg",
    "timestamp": 1733267190356
  }
]
```



API docs: [Documentation 👈🏻](https://currency.babakcode.com/docs)

![Screenshot 2024-07-29 010842](https://github.com/user-attachments/assets/68e283fd-f733-45a3-a8fe-bb31350ec973)

I hope you enjoy it 🤍
