pragma solidity ^0.4.0;

contract DataTypes{


    address sender;
    uint value;
        
    function DataTypes() payable{
        
        sender = msg.sender;
        value = msg.value;            
    }
    bool myBool = false;
    
    int myInt = -128;   //should be devisible by8
    uint8 myUint = 255;   //0 to  255
    
    //string is stored in array
    
    string myString;
    
    uint8 [] myStringArr;
    
    function myFunc(string s){   //we can pass array as well  but not string array only string of numbers is allowed
                                    // why array of string is not allowed is cz string of array will be nested array a
                                    //and nested array is not allowed to pass 
    }
    
    byte myValue;
    bytes1 bVal;           // we can declare bye  1 and 32  no need of divisible by 8
    bytes32 val;
    
//we will deal with fixed point np letter    // fixed256x8 myfixed = 128;    //    fixed point no is like floating point   255.0
    // ufixed  

    enum Action  {ADD,REMOVE,UPDATE}
    
    Action myAction = Action.ADD;
    
    address myAddress;
    
    //payable is the function we need to assign address
    
    function assignAddress(){   //this are the function we can do with address
        
        myAddress = msg.sender;
        myAddress.balance;
        myAddress.transfer(10);
        
    }
    
    
    //array
    
    // can be defined in two ways
    
    uint[] myIntArr = [1,2,3];   //infinite size array
    
    function  arrFun() returns (uint){

        myIntArr.push(10);  //insert
        // myIntArr[0];  //accessing val
        // return(myIntArr)
        return(myIntArr[3]);
    }
    
    
    //
    
    uint[10] myFixedArr;   //fixed length arr
    
    
    //mapping
    
    struct Account{    //in this example we need struct to map
        
        uint balance;
        uint dailyLimit;
        
    }
    
    Account myAccount;
    
    function structFunc(){
        myAccount.balance =100;
        
    }
    
    mapping (address => Account) _accounts;
    
    function mappingFunc()payable returns(uint) {
        
        _accounts[msg.sender].balance += msg.value;
        return(_accounts[msg.sender].balance);
    }
    
    function getBalance() returns(uint){
        
        return _accounts[msg.sender].balance; 
    }
    
    
}

