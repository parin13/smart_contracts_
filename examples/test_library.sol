pragma solidity ^0.4.0;

import "browser/library.sol";


contract TestLibrary{
    
    using IntExtended for uint;    
    
    function testIncrement(uint base) returns(uint){
        
        return IntExtended.increment(base);
    }
    
    function testDecrement(uint base) returns (uint){
        return IntExtended.decrement(base);
    }
    
    
    function testIncrementByVal(uint8 val,uint8 base)returns (uint){
        
        return IntExtended.incrementByval(val,base);
        
    }
    
    function testDecrementByVal(uint8 val, uint base) returns(uint){
        
        return base.decrementByval(val);
        
    }
}

