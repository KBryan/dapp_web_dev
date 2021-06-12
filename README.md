# Ethereum Development for the Rest of US Lecture 0
### Creating a deployer script

In this lesson, the student will create their first Solidity smart contract / learn about Artifacts and create a simple dApp to illustrate the process. 

Install a version of ganache as described in the course outline.

Make sure it's running before running the deploy script

To get artifact

`sol-compiler`

request the Solidity compiler to output these two in a single JSON file we can then use

`solc --pretty-json --combined-json=abi,bin --overwrite \
-o ./build/contracts contracts/Counter.sol`

If you need specific Solidity versions 

`pip3 install solc-select` 

Follow the lecture material 

### To deploy the deployment script and get contract address 

`node ./scripts/deploy.js`

Displayed contents should be similar 
```console 
node ./scripts/deploy.js
[
  '0xb884FF4b46C7d0cCb68d280EF39B3cBE8Fd47590',
  '0x7b953144Da42fe99d15411ae9e945C877b1B839c',
  '0x9ea4c939BA86216cd668720fAB229957D47cB98c',
  '0xf933eCe5132655d98Cd3E5d64BD442FeFC65abe2',
  '0x602337414982f13c01ed0585472e45E2619e292A',
  '0x640Aef81f42299aD958aAc7b4e9F76247071aBB1',
  '0xd6aF3e021f835C8d324A31d366E82EcDeAaADE42',
  '0xE8a15D86E739FB60f81ade5fb4fc66B61cF4a0f9',
  '0x7AC91b385EC863427C4c1202086f75f359C5024b',
  '0x19F914E69cd70c9407f6e0F4470C536a176ea016'
]
 Data: 0x6080604052348015600f57600080fd5b5060a48061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80633fa4f245146037578063e8927fbc146053575b600080fd5b603d605b565b6040518082815260200191505060405180910390f35b60596061565b005b60005481565b60016000540160008190555056fea265627a7a723158208512ab97c17f75f11790959fd27662c7dd87bed34224e157dc55e4114760f86664736f6c63430005110032
[
  {
    constant: false,
    inputs: [],
    name: 'increase',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'value',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
]
From Data: 0xb884FF4b46C7d0cCb68d280EF39B3cBE8Fd47590
0x8d447167c9b4E33E4006c404424d2eC56F5042C0


```
