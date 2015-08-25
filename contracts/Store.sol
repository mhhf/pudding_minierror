contract Store {
  uint value;

  function Store(){
    value = 0;
  }
  
  function setValue ( uint v ) {
    value = v;
  }

  function query() constant returns (uint val) {
    return value;
  }
}
