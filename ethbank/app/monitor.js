const { ethers, artifacts } = require("hardhat");

async function subsribe(_provider, _address) {
    const provider = new ethers.JsonRpcProvider(_provider);  
    const address = _address;
    const artifact = await artifacts.readArtifact('EthBank');
    
    const app = new ethers.Contract(address, artifact.abi, provider);
    app.on('Deposit', (from, amount) => {
        console.log(`New deposit from ${from} with ${ethers.formatEther(amount)} ethers`);
    });
}

subsribe('http://127.0.0.1:8545', '');