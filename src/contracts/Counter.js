import Artifacts from './Artifacts.json';
import {getWeb, getAccount} from "../eth/network";

let ADDRESS = ""

export default function Counter(web3,address,options = {}) {
    const name = "contracts/Counter.sol:Counter";
    const artifact = Artifacts.contracts[name];
    const abi = JSON.parse(artifact.abi);
    return new web3.eth.Contract(abi,address,options);
}

export async function getDeployed() {
    const web3 = getWeb3();
    const from = await getAccount();
    const address = ADDRESS;
    return Counter(web3,addr,{from});
}