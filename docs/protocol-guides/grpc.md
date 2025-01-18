---
sidebar_position: 4
---

# gRPC
 
**Using gRPC Services to Fetch Currency Prices**

This guide demonstrates how to use the gRPC services defined in `crypto.proto` and `fiat.proto` using **JavaScript** and **Postman**.

## Prerequisites

- **For JavaScript**: Install Node.js and the required gRPC packages.
- **For Postman**: Ensure the Postman desktop app is installed.

---

## Using gRPC Services in JavaScript

First, install the required packages:

```bash
npm install grpc @grpc/proto-loader
```

Then, create a JavaScript client to interact with the gRPC services.

```javascript
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Load crypto.proto
const cryptoProtoPath = './crypto.proto';
const cryptoPackageDefinition = protoLoader.loadSync(cryptoProtoPath);
const cryptoGrpc = grpc.loadPackageDefinition(cryptoPackageDefinition).crypto;

// Load fiat.proto
const fiatProtoPath = './fiat.proto';
const fiatPackageDefinition = protoLoader.loadSync(fiatProtoPath);
const fiatGrpc = grpc.loadPackageDefinition(fiatPackageDefinition).fiat;

// gRPC Server address
const serverAddress = 'grpc.babakcode.com'; // Replace with your server address

// Example function to get a single Crypto object
function getCrypto(base, symbol) {
  const client = new cryptoGrpc.CryptoGRPCService(serverAddress, grpc.credentials.createInsecure());
  const request = { base, symbol };

  client.GetCrypto(request, (error, response) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    console.log('Crypto:', response.crypto);
  });
}

// Example function to get a single Fiat object
function getFiat(currency, base) {
  const client = new fiatGrpc.FiatService(serverAddress, grpc.credentials.createInsecure());
  const request = { currency, base };

  client.GetFiat(request, (error, response) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    console.log('Fiat:', response.fiat);
  });
}

// Usage examples
getCrypto('USD', 'BTC'); // Fetch Bitcoin price in USD
getFiat('EUR', 'USD');  // Fetch Euro price in USD
```

---

## Using gRPC Services in Postman

You can also use **Postman** to make gRPC requests with the proto files.

### Steps to Use gRPC in Postman

Download the following file or create a new file wth `.proto` extension and writ in the following codes.

1. **Import Proto Files:**

    - Open Postman and click the **Import** button.

```protobuf 
syntax = "proto3";

package crypto;

// Define the Crypto message
message Crypto {
  string logo = 1;
  string name = 2;
  string symbol = 3;
  double usd = 4;            // Optional field
  int64 timestamp = 5;
  double price = 6;
  string priceStr = 7;
  string fa = 8;             // Optional field
}

// Define a request message for simple data fetching
message CryptoRequest {
  string base = 1;
  string symbol = 2;
}

// Define a response message for returning a list of Cryptos
message CryptoListResponse {
  repeated Crypto cryptos = 1;
}

// Define a response message for a single Crypto object
message CryptoResponse {
  Crypto crypto = 1;
}

// Define the CryptoService
service CryptoGRPCService {
  // Simple method to get a single Crypto object
  rpc GetCrypto(CryptoRequest) returns (CryptoResponse);

  // Simple method to get a list of Crypto objects
  rpc GetCryptoList(CryptoRequest) returns (CryptoListResponse);

  // Stream method to return a single Crypto object as a stream
  rpc StreamCrypto(CryptoRequest) returns (stream CryptoResponse);

  // Stream method to return a list of Crypto objects as a stream
  rpc StreamCryptoList(CryptoRequest) returns (stream CryptoResponse);
}

```


```protobuf
syntax = "proto3";

package fiat;

// Define the Fiat message
message Fiat {
  string currency = 1;
  string priceStr = 2;
  double price = 3;
  double usd = 4;
  string name = 5;
  string fa = 6;             // Optional field
  string svg = 7;
  int64 timestamp = 8;
}

// Define a request message for simple data fetching
message FiatRequest {
  string currency = 1;
  string base = 2;
}

// Define a response message for returning a list of Fiats
message FiatListResponse {
  repeated Fiat fiats = 1;
}

// Define a response message for a single Fiat object
message FiatResponse {
  Fiat fiat = 1;
}

// Define the FiatService
service FiatService {
  // Simple method to get a single Fiat object
  rpc GetFiat(FiatRequest) returns (FiatResponse);

  // Simple method to get a list of Fiat objects
  rpc GetFiatList(FiatRequest) returns (FiatListResponse);

  // Stream method to return a single Fiat object as a stream
  rpc StreamFiat(FiatRequest) returns (stream FiatResponse);

  // Stream method to return a list of Fiat objects as a stream
  rpc StreamFiatList(FiatRequest) returns (stream FiatResponse);
}

```
- Upload the `crypto.proto` and `fiat.proto` files.

2. **Create a gRPC Request:**

    - Click **New Request** and select `gRPC`.
    - Enter the server address (e.g., `grpc.babakcode.com`).

3. **Define gRPC Body:**

    - Add the required fields in JSON format based on the proto files.

### Example gRPC Requests

#### Fetch a Single Crypto Object

```json
{
  "base": "USD",
  "symbol": "BTC"
}
```

#### Fetch a Single Fiat Object

```json
{
  "currency": "EUR",
  "base": "USD"
}
```

4. **Send the Request:**

    - Click **Send** to execute the gRPC call.
    - View the response directly in Postman.

---

## Conclusion

You can now use the `crypto.proto` and `fiat.proto` files with both JavaScript and Postman to interact with the gRPC services. Adjust the parameters and server addresses according to your setup.