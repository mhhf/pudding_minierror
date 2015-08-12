contract('Store', function(accounts) {
  
  it("should assert true", function(done) {
    
    web3.eth.defaultAccount = web3.eth.coinbase;

    Store.new()
      .then( function( instance ){
        return instance.query();
      }).then(function( v ){
        console.log( v );
      });

    
  });
  
});
