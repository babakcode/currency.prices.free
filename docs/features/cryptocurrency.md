---
sidebar_position: 2
---

# Cryptocurrency 🪙

The **Cryptocurrency** feature allows users to access real-time prices and market data for hundreds of cryptocurrencies, including popular ones like **Bitcoin (BTC)**, **Ethereum (ETH)**, and many more. This feature is ideal for developers building financial tools, traders monitoring live prices, and anyone needing reliable cryptocurrency data.

---

You can test this directly in the Swagger documentation by pasting your API key into the "Authorize" section.

### 📘 Example API Endpoints for Cryptocurrency

- **Base URL**: [https://currency.babakcode.com/](https://currency.babakcode.com/)
- **Endpoint**: `/api/v2/crypto/all/{base}`

#### **Example Request**:
Retrieve all cryptocurrency prices in a specific fiat currency (e.g., `USD`, `EUR`, `IRT`). Replace `{base}` with the desired fiat currency symbol.

**Request URL**:  
`https://currency.babakcode.com/api/v2/crypto/all/USD`

#### **Expected Response**:
```json
[
  {
    "symbol": "BTC",
    "name": "Bitcoin",
    "logo": "https://example.com/logos/btc.png",
    "price": 47000.25,
    "priceStr": "47,000.25$",
    "timestamp": 1698920300
  },
  {
    "symbol": "ETH",
    "name": "Ethereum",
    "logo": "https://example.com/logos/eth.png",
    "price": 3200.78,
    "priceStr": "3,200.78$",
    "timestamp": 1698920300
  }
]
```

- Replace `USD` in the example with any supported fiat currency like `EUR` or `IRT` to retrieve prices in the corresponding base currency.

- Pass your API key in the `api-key` header for all requests:
  ```curl 
    api-key: YOUR_API_KEY
  ```

Start exploring real-time cryptocurrency prices today and integrate them seamlessly into your applications!