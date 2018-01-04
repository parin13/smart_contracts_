pragma solidity ^0.4.0;

contract master_site{

    address private owner = msg.sender;

//add new function
//update icf_version
//ip: address,uint256,uint256
// site add,hash, icf_version
//op:  sit id


    struct site_details{

        bytes32[] investigator_name;
        bytes32[] site_location;
        uint256 number;
        bytes32 site_id;
        uint8 version;
        uint256 _hash;
        uint256 icf_version;
    }


    mapping(bytes32 => site_details) private  map_site_id_to_site_details;   // site id to  site_details
    mapping(address => site_details) private map_site_address_to_details;   // site address to site site_details
    mapping(address => address) private map_site_add_to_cont_add;  //site address to contract address

    site_details [] private sites_array;
    address [] site_address_array;
    site_details private site;

    function set_site(bytes32[] investigator_name,bytes32[] site_location,uint256 number,bytes32 site_id,uint8 version,uint256 _hash,uint256 icf_version) returns(bool)
    {

      require(owner == msg.sender);


        uint l =  investigator_name.length;

        bytes32[] memory inv_name= new bytes32[] (l);

        for(uint i=0;i<l;i++)
        {
            inv_name[i] = investigator_name[i];

        }

        l = site_location.length;

        bytes32[] memory site_loc= new bytes32[] (l);


        for(i=0;i<l;i++)
        {
            site_loc[i] = site_location[i];

        }

        var this_struct = site_details(inv_name,site_loc,number,site_id,version,_hash,icf_version);
        sites_array.push(this_struct);


        map_site_id_to_site_details[site_id] = this_struct;

        return true;


    }




    function map_address_to_details(bytes32 site_id,address site_address) returns(bool)
    {
          require(owner == msg.sender);

          var result = map_site_id_to_site_details[site_id];
          map_site_address_to_details[site_address]= result;

          site_address_array.length++;
          site_address_array[site_address_array.length-1] = site_address;    //storing address of site in site array

          return true;

    }


    function map_site_to_contract(address site_add,address contract_add) returns(bool)
    {
                 map_site_add_to_cont_add[site_add] = contract_add;
                 return true;
    }



    function get_site_details_from_add(address site_add) returns (bytes32[],bytes32[],uint256,bytes32,uint8,uint256,uint256)  //given the site address, all the data in struct should be printed out
    {
        var result = map_site_address_to_details[site_add];

        return(result.investigator_name,result.site_location,result.number,result.site_id,result.version,result._hash,result.icf_version);
    }


     function get_details_from_id(bytes32 site_id) returns (bytes32[],bytes32[],uint256,bytes32,uint8,uint256,uint256)  //given the site address, all the data in struct should be printed out
    {
        var result_siites = map_site_id_to_site_details[site_id];

        return(result_siites.investigator_name,result_siites.site_location,result_siites.number,result_siites.site_id,result_siites.version,result_siites._hash,result_siites.icf_version);
    }

}
