require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain essay hover arctic swift genre'; 
let testAccounts = [
"0xc00a140a391ed844d4adfce3e8df3978091c9f9fa3f90b4fda1c112b915f15ad",
"0x4f7e430139198acbbca945d5e237679b5bf65295a04c17cec8c83f078c39b30b",
"0x7ed998529598871448412a36d05a050ee02e4219f55c8cd382e59b069ec315f2",
"0x4e990fc3dc1801de2fdb6514c10255b8f6e4826ea61bf6993dc8bc159c6c1e70",
"0x5d514abb63e8da92d0bbfac533a6d3f7790ebf09159e7ad75ea81867cbff27e1",
"0xc09b5f519e8cd5ccc6d51f3fe15daa678510750497f2d13316e3121787395c22",
"0x967b4b9d17660fcf84fb44e65031ccaa2a273b3a0241f6229ff70e2b21b18eef",
"0x68eb08fa0c481e996d5ddbb53cd448802e9a1a83e2cdfd8c5767615e704590b8",
"0xae224d43559d9e49a3bfada0954213bfbb9ef9f12dd79b41f1e9897f8115e14a",
"0x88a170e1600bbf1682f8f207f8a1b65bdacfba58d9346d07130e2cb5ad4f0897"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


