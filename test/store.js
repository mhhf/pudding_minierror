contract('Store', function(accounts) {
  
  it("should assert true", function(done) {
    
    var SStore = Pudding.whisk( Store.abi, Store.binary );
    
    SStore
      .new({ from: web3.eth.coinbase })
      .then( function( instance ){
        return instance.query();
      }).then(function( v ){
        console.log( v );
      });
    
  });
  
});
