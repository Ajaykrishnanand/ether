const {ethers} = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
const signer0 = "";
const signer1 = "";
const privatekey1 = "";
const wallet = new ethers.Wallet(privatekey1 ,provider);
const main = async ()=>{
    const sender = await provider.getBalance(signer0);
    const recever= await provider.getBalance(signer1);
    console.log(`\n sender balance before : ${ethers.utils.formatEther(sender)}`)
    console.log(`\n sender balance before : ${ethers.utils.formatEther(recever)}`)
    const tx =  await wallet.sendTransaction({
        to : signer1,
        value: ethers.utils.parseEther("0.023")
    })

    await tx.wait();
    console.log(tx);



}
main();