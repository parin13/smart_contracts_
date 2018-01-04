pragma solidity ^0.4.0;

library IntExtended{
    
    function increment(uint _self) returns (uint){
        return _self+1;
    }

    
    function decrement(uint _self) returns (uint){
        
        return _self-1;
    }

    function incrementByval(uint _self,uint val) returns (uint){
                return _self + val;
    }    

    function decrementByval(uint _self,uint val) returns (uint){
        
        return _self-val;
    }    
    
    
} 
