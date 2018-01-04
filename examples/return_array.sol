pragma solidity ^0.4.0;


contract Ret_array{
    
    uint [] d_arr ;
    uint[10] arr_ = [1,2,3,4,5,6,7,8,9,10];
    uint [] _arr;
    
    function push (uint no) {
        
        d_arr.push(no);
        
    }
    
    function pop() returns(uint,uint){
    
        uint l = d_arr.length;
        return(d_arr[l-1],l); 
    }
    
    function pop_dynamic_arr() returns(uint){
        uint l = d_arr.length;
        uint temp =l;
        uint x=0;
      

        while(x != (l-1))
        {
            _arr[x] = d_arr[x];
            x++;    
        }

        return (_arr[2]);
        
    } 
}
