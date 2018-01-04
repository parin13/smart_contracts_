pragma solidity ^0.4.0;


contract Transaction{
    
    
    event SenderLog(address);
    event ValueLog(uint);
    
    address private owner;
    
    
    
    modifier isOwner{
        require(owner == msg.sender);
        _;
    }
    
    
    modifier validValue{
        
        assert(msg.value >=1 ether);
        _;
    }

    function Transaction(){
        
        owner = msg.sender;
    }
    
    
    function() payable isOwner validValue{
        SenderLog(msg.sender);
        ValueLog(msg.value);
    }
    
}
