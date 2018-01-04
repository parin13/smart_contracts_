pragma solidity ^0.4.0;

contract master_site{

    address private owner = msg.sender;


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

        sites_array.length++;

        sites_array[sites_array.length-1].investigator_name = inv_name;
        sites_array[sites_array.length-1].site_location = site_loc;
        sites_array[sites_array.length-1].number = number;
        sites_array[sites_array.length-1].site_no = site_no;
        sites_array[sites_array.length-1].version = version;
        sites_array[sites_array.length-1]._hash = _hash;
        sites_array[sites_array.length-1].icf_version = icf_version;

        var site = site_details(sites_array[sites_array.length-1].investigator_name,sites_array[sites_array.length-1].site_location,sites_array[sites_array.length-1].number,sites_array[sites_array.length-1].site_no,sites_array[sites_array.length-1].version,sites_array[sites_array.length-1]._hash,sites_array[sites_array.length-1].icf_version);

        map_site_id_to_site_details[site_id] = site;

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



    function get_site_details_from_add(address site_add) returns (bytes32[],bytes32[],uint256,bytes32,uint8,uint256)  //given the site address, all the data in struct should be printed out
    {
        var result = map_site_address_to_details[site_add];

        return(result.investigator_name,result.site_location,resul.number,result.site_no,result.version,result._hash,result.icf_version);
    }


     function get_details_from_id(bytes32 site_id) returns (bytes32[],bytes32[],uint256,bytes32,uint8,uint256)  //given the site address, all the data in struct should be printed out
    {
        var result_siites = map_site_id_to_site_details[site_id];

        return(result_siites.investigator_name,result_siites.site_location,result_siites.number,result_siites.site_no,result_siites.version,result_siites._hash,result_siites.icf_version);
    }

}
