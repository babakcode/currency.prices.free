---
sidebar_position: 2
---

# WebSocket

The WebSocket API enables real-time, two-way communication between your application and the server. This is an excellent choice for applications that need to receive live updates, such as currency price changes, without polling the server repeatedly.

## Why Use WebSocket?

WebSocket offers several advantages for real-time data transmission:
- **Low Latency**: Receive live updates as soon as they occur.
- **Efficiency**: Reduces unnecessary HTTP requests by maintaining a persistent connection.
- **Bidirectional Communication**: Allows both the client and server to send messages at any time.

## How to Connect

To connect to the WebSocket server, you need to follow these steps:

### Step 1: Obtain an API Key

Before you can connect, you must obtain an API key from [babakcode.com](https://babakcode.com). The API key will be used for authentication during the WebSocket handshake.

1. Visit **[https://babakcode.com](https://babakcode.com)**.
   ![api BabakCode com](/img/md/api-babakcode-com-01.png)

2. Sign up or log in to your account.
3. Generate a new API key from the currency apps page.


Here’s the client code with the description added in MDX format:

### Description

The WebSocket server has two type of `SubscribeMessage`:
1. `fiat/{name}`: For subscribing to fiat currency price updates.
2. `crypto/{name}`: For subscribing to cryptocurrency price updates.

Each type of `SubscribeMessage`s supports the following subscription messages:
- **"allListen"**: Listens for all currency price changes in the namespace.
- **"allAck"**: Receives all currency prices as acknowledgment responses.
- **"onlyListen"**: Listens for a single currency's price updates.
- **"onlyAck"**: Receives the price of a single currency as acknowledgment responses.

### Required Fields for Subscriptions

For all subscription messages, you must send a JSON object with:
- **`base`**: The base currency for price comparisons.
- Additional fields depending on the event starting name:
  - **For `fiat`**: Include a `currency` field for the desired fiat currency.
  - **For `crypto`**: Include a `symbol` field for the desired cryptocurrency.

### Client-Side Implementation

Here’s an example client implementation using `socket.io-client`:

```javascript
import { io } from "socket.io-client";

// Connect to the WebSocket server
const socket = io("https://wss.babakcode.com", {
    auth: {
        "api-key": "your-api-key-here",
    },
   path: "/currency/"
});

// Example: Listen for all fiat currency price changes
socket.emit("fiat/allListen", { base: "USD" });
socket.on("currency", (data) => {
  console.log("fiat/All fiat currency price updates:", data);
});

// Example: Receive all fiat currency prices as acknowledgment
socket.emit("fiat/allAck", { base: "USD" }, (response) => {
  console.log("fiat/Acknowledgment for all fiat prices:", response);
});

// Example: Listen for a specific fiat currency price update
socket.emit("fiat/onlyListen", { base: "USD", currency: "EUR" });
socket.on("currency", (data) => {
  console.log("fiat/Specific fiat currency price update:", data);
});

// Example: Receive a specific fiat currency price as acknowledgment
socket.emit("fiat/onlyAck", { base: "USD", currency: "EUR" }, (response) => {
  console.log("fiat/Acknowledgment for specific fiat price:", response);
});

// Example: Listen for all cryptocurrency price changes
socket.emit("crypto/allListen", { base: "USD" });
socket.on("crypto", (data) => {
  console.log("crypto/All cryptocurrency price updates:", data);
});

// Example: Receive all cryptocurrency prices as acknowledgment
socket.emit("crypto/allAck", { base: "USD" }, (response) => {
  console.log("crypto/Acknowledgment for all crypto prices:", response);
});

// Example: Listen for a specific cryptocurrency price update
socket.emit("crypto/onlyListen", { base: "USD", symbol: "BTC" });
socket.on("crypto", (data) => {
  console.log("crypto/Specific cryptocurrency price update:", data);
});

// Example: Receive a specific cryptocurrency price as acknowledgment
socket.emit("crypto/onlyAck", { base: "USD", symbol: "BTC" }, (response) => {
  console.log("crypto/Acknowledgment for specific crypto price:", response);
});
```

### Notes
1. Replace `"your-api-key-here"` with your actual API key obtained from [babakcode.com](https://babakcode.com).
2. Ensure that the `base`, `currency`, or `symbol` fields match your subscription requirements.
3. Handle errors and reconnections to maintain a stable connection to the server.

Start using WebSocket to receive real-time updates on fiat and cryptocurrency prices!