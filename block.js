class Block{
    constructor(timestamp,prevHash,hash,data){
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;

    }
}

const block1 = new Block('1/09/22','0xabc','0xc12','hello');
console.log(block1)