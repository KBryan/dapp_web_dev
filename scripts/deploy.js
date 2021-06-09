const Web3 = require('web3');
const GreeterJSON = require('../artifacts/Counter.json')

async function deploy() {
    let ADDRESS = ""
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    const [from] = await web3.eth.getAccounts()
    const gas = 1e6
    const arguments = ["Hello world"]
    const data = GreeterJSON.compilerOutput.evm.bytecode.object
    console.log(` Data: ${data}`);
    const abi = GreeterJSON.compilerOutput.abi
    console.log(abi);
    const Greeter = new web3.eth.Contract(abi,null, {data})
    const greeter = await Greeter.deploy({arguments})
        .send({from,gas})
    console.log(greeter.options.address);
    // let greeter = new web3.eth.Contract(abi,ADDRESS);
    // let message = await greeter.methods.greet().call();
    // console.log(`Display Message ${message}`);
}
deploy();

