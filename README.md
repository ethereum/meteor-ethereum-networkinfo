# Meteor package - Ethereum network info

Waits for a `web3` connection and then extracts network info.

It fetches the Genesis block information and places it into a 
Promise - `NetworkInfoPromise` - for use throughout your application.

## Installation

    $ meteor add hiddentao:ethereum-networkinfo

## Usage

Use the extracted network information via the Promise:

```js
NetworkInfoPromise.then(function(networkInfo) {
  console.log(info);

  /*
  type: 'main',
  uniqueId: 'fb25ce3f...',
  genesis: {...},
   */
})
```

