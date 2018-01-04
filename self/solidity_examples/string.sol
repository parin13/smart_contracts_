pragma solidity ^0.4.0;

library Strings{
    
    function concat(string _base,string _value) internal returns(string){
        bytes memory _baseBytes = bytes(_base);   //stack memory storage
                        //stack:anyting  in function and gets destroyed when functon execution ends
                        //memory: related to executin of transaction 
                        //storage : passing a value which doesnt want to be clone  -->  pointer in C
        bytes memory _valueBytes = bytes(_value);
        string memory _tempValue = new string(_baseBytes.length+ _valueBytes.length);   //to typecast to string keyword "new" is used which is ot necessary for other concersion
        bytes memory  _newValue = bytes(_tempValue);    //no need of new for typecase to bytes
        
        string memory a ="parin";
        bytes memory a_ = bytes(a);    
        uint p=2;
        
        // string memory __a = new string(a_);   //shows strring to byte concersion also not allowed
            

        uint i;  //
        uint j=0;  //iterate over new value
        
        for(i=0;i<_baseBytes.length;i++)
        {
            _newValue[j++] = _baseBytes[i];
            
            
        }
        
        for(i=0;i<_valueBytes.length;i++)
        {
            _newValue[j++]= _valueBytes[i];
        }
        
        return string(_newValue);
        
        
    }
}
