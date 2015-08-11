Store.new({ from: web3.eth.coinbase })
.then( function( instance ){
  return instance.query();
}).then(function( v ){
  console.log( v );
});
