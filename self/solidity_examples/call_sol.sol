pragma solidity ^0.4.0;

contract contract_b 
{
    
 
    

    function call_c(uint index) public returns (bool)
    {   
        address add = 0x60fE23d2aAd60E1d8E2C196844A55A3c7D97529F;
        bool status =  add.call(bytes4(keccak256("get(uint)")),index);
        return status;
    }

    
}
