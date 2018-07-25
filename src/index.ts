import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // sayHello = () => "Hello"; // Block이 선언되어야지 사용이 가능

  //static으로 선언해야만 클래스 함수로 이용 가능(선언하지 않아도 이용가능)
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SH256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "202020202022", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];
//blockchain은 Block형태를 요소로 하는 배열형태
// blockchain.push("stuff") //작동되지 않음

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 100);

console.log(blockchain);

export {};
