---
sidebar_position: 3
---

# Fiat Currencies 💶

The **Fiat Currencies** feature allows users to access real-time pricing information for a wide range of global fiat currencies. You can retrieve details such as the price relative to a base currency, currency name, and flag icons in SVG format. Popular currencies like **USD (United States Dollar)**, **EUR (Euro)**, and many others are supported.

You can test this directly in the Swagger documentation by pasting your API key into the **"Authorize"** section.

---

📘 **Example API Endpoints for Fiat Currencies**

**Base URL**:  
`https://currency.babakcode.com/`

**Endpoint**:  
`/api/v2/currency/all/{base}`

#### **Example Request**:
Retrieve all fiat currency prices relative to a specific base currency (e.g., USD, EUR, IRT). Replace `{base}` with the desired base currency symbol.

**Request URL**:  
`https://currency.babakcode.com/api/v2/fiat/all/USD`

#### **Expected Response**:
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

- Replace **USD** in the example with any supported base currency like **EUR** or **IRT** to retrieve pricing relative to that base currency.

- Pass your API key in the `api-key` header for all requests:
  api-key: YOUR_API_KEY

Start exploring real-time fiat currency pricing today and integrate them seamlessly into your applications!