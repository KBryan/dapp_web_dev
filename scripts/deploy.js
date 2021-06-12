const Web3 = require('web3');
const GreeterJSON = require('../artifacts/Counter.json')
// https://data-seed-prebsc-1-s1.binance.org:8545/
async function deploy() {

    let ADDRESS = null
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    const from = await web3.eth.getAccounts()
    console.log(from)
    const gas = 1e6
    const arguments = ["Hello world"]
    const data = GreeterJSON.compilerOutput.evm.bytecode.object
    console.log(` Data: ${data}`);
    const abi = GreeterJSON.compilerOutput.abi
    console.log(abi);
    const Greeter = new web3.eth.Contract(abi,ADDRESS, {data})
    console.log(`From Data: ${from[0]}`)
    const greeter = await Greeter.deploy({arguments})
        .send({from:from[0],gas})
    console.log(greeter.options.address);
    // let greeter = new web3.eth.Contract(abi,ADDRESS);
    // let message = await greeter.methods.increase.call();
    // console.log(`Display Message ${message.toString().}`);

}
deploy();

