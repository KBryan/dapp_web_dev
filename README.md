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

deployed contract address :

0x7476FF00f127c0aDC5fb23C65F853490C5967835

```
