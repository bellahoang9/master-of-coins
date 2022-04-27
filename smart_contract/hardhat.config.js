// https://eth-ropsten.alchemyapi.io/v2/oOlcuFFAd1OB7iLc-FFqv9RaXGzEwvXL
// 0x46BEF16fD561eceedfB6489C0c111DeEF50faEAF
require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks:{
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/oOlcuFFAd1OB7iLc-FFqv9RaXGzEwvXL',
      accounts : [ '14e7a0e43ce172d05ead36f88e1ae9e84cf4a4b1b38e8617e3225c82366ebe48' ]
    }
  }
}