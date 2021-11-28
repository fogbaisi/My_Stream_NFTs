require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/KRgpjn9yQvmq38QUcjUKSNNwAosQ6zk2',
      accounts: ['857dad15720c3657b1a347419a53fcecae789570c6809dbc995eabd10bb5ef9a'],
    },
  },
};