pragma solidity ^0.4.0;

contract First{
    
    struct {
        address owner;
        bytes32 [8] file_hash;
        address site_number;        
    }

    
    function First(address a,address sn,bytes32 hash)
    {
        uint l = file_hash.length;
        l++;
        owner = msg.sender;
        site_number = sn;
        file_hash[]= hash
    }
    
}




contract SimpleStorage 
{
    
    struct data 
    {
        string name;
        address hash;
        string date_time;
    }
    
    data [] public data_arr;
    
    function set(string name_,address hash_,string date_time_) public returns(uint)
    {
        //  data.name =name_;
        //  data.hash = hash_;
        //  data.date_time =date_time_;
        data_arr.length++;
        data_arr[data_arr.length-1].name =  name_;
        data_arr[data_arr.length-1].hash =  hash_;
        data_arr[data_arr.length-1].date_time =  date_time_;
        
        return data_arr.length-1;
        
    }
    

    function count()public returns (uint)
    {
        return data_arr.length-1;
        
    }


    function get(uint index) public returns(string,address,string)
    {
        return (data_arr[index].name,data_arr[index].hash,data_arr[index].date_time);
    }
    
}

