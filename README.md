# currency.prices.free
Free web service to get currency prices - وب سرویس رایگان دریافت قیمت ارز


برای دریافت سرویس رایگان قیمت ارز، هم برای کریپتو هم برای دلار و یورو و ... به وبسایت لینک شده زیر سر بزنید.


Checkout this [website 👈🏻](https://api.babakcode.com)

![Screenshot-2024-07-29-005736](https://github.com/user-attachments/assets/032046ad-8511-475f-8d75-ea77dfd01540)


```js

// request
fetch('https://currency.babakcode.com/api/v1/crypto' ,{
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
    "fa": "بیت کوین",
    "en": "Bitcoin",
    "symbol": "BTC",
    "usd": 68266.76,
    "irr": 40174988000
  },
  {
    "fa": "اتریوم",
    "en": "Ethereum",
    "symbol": "ETH",
    "usd": 3275.17,
    "irr": 1927437500
  }
]
```


API docs: [Documantation 👈🏻](https://currency.babakcode.com/docs)

![Screenshot 2024-07-29 010842](https://github.com/user-attachments/assets/68e283fd-f733-45a3-a8fe-bb31350ec973)

Hope you enjoy it 🤍


اگر خدمات ما را ارزشمند می دانید، لطفاً برای این ریپو یک ستاره بگذارید. 
با احترام، بابک قهرمان زاده
