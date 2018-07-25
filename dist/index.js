"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
// sayHello = () => "Hello"; // Block이 선언되어야지 사용이 가능
//static으로 선언해야만 클래스 함수로 이용 가능(선언하지 않아도 이용가능)
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SH256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "202020202022", "", "Hello", 123456);
let blockchain = [genesisBlock];
//blockchain은 Block형태를 요소로 하는 배열형태
// blockchain.push("stuff") //작동되지 않음
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 100);
console.log(blockchain);
//# sourceMappingURL=index.js.map