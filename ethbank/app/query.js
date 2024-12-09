const { ethers, artifacts } = require("hardhat");

async function query(_provider, _address, _account) {
    const provider = new ethers.JsonRpcProvider(_provider);  
    const address = _address;
    const artifact = await artifacts.readArtifact('EthBank');
    
    const app = new ethers.Contract(address, artifact.abi, provider);
    
    signers = await ethers.getSigners();
    const filter = app.filters.Deposit(_account);
    
    app.queryFilter(filter, 0, 'latest').then((events) => { 
        events.forEach((event) => {
            console.log(`New deposit from ${event.args.account} with ${ethers.formatEther(event.args.amount)} ethers`);
        });
    });
}

query('http://127.0.0.1:8545','','');