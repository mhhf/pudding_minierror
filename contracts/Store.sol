contract Store {
  uint value;

  function Store(){
    value = 0;
  }

  function query() constant returns (uint val) {
    return value;
  }
}
