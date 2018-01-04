pragma solidity ^0.4.18;




interface Regulator{
    
    function checkValue(uint amount) returns (bool);
    function loan() returns (bool);
} 


contract Bank is Regulator{
    
    uint private value;
    address private owner;

   
    

    function Bank(uint amount){
        
        value += amount;
        owner = msg.sender;
        
    }
    
    modifier ownerFunc{
        require(owner == msg.sender);
            _;
        
    }
    
    
    function deposit(uint amount) ownerFunc{
        
        value += amount;
    }
    
    function withdraw(uint amount)ownerFunc{
       
            value -= amount;
        
    }
    
    function balance() returns (uint){
        return value;
    }
    

    function checkValue(uint amount) returns(bool){
        
        return value>amount;
    }
    
    
    function loan() returns(bool){
        return value > 0 ;
    }
}


contract  MyFirstContract is Bank(10){
    string private name;
    uint private age;
    
    
    function setName(string newName){
        name =newName;
    }
    
    function getName() returns(string){
        
        return name;
    }
    
    function setAge(uint newAge){
        
        age = newAge;
    }
    
    function getAge() returns (uint){
        return age;
    }
    
    
    function loan () returns (bool){
        return true;
    }
}


contract TestThrows {    //to check throw catch
    
    function testAssert(){
        assert(1 ==2);      //pass boolen value
    }
    
    
    function testRequire(){     
        require( 2 == 1);             //pass boolen value
    } 
    
    function testRevert(){
        
    }
    
    function TestThrow(){   //pass boolen value
      throw;  
    }
    

}

