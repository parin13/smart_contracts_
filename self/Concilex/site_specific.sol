pragma solidity ^0.4.0;


contract site_specific{

    address owner;
    address[] patient_address_arr;

  struct site_details{

      bytes32[] investigator_name;
      bytes32[] site_location;
      uint256 number;
      bytes32 site_no;
      uint8 version;
      uint256 _hash;
      uint256 icf_version;
  }


  site_details [] private this_site;    //to store site details via constructor
  site_details [] private site_details_arr;


//time for constructor

  function site_specific(
    bytes32[] investigator_name,
    bytes32[] site_location,
    uint256 number,
    bytes32 site_no,
    uint8 version,
    uint256 _hash,
    uint256 icf_version)
  {
    owner = msg.sender;
    uint l =  investigator_name.length;

    bytes32[] memory inv_name= new bytes32[] (l);

    for(uint i=0;i<l;i++)
    {
        inv_name[i] = investigator_name[i];

    }

    l =  site_location.length;

    bytes32[] memory site_loc= new bytes32[] (l);

    for( i=0;i<l;i++)
    {
        site_loc[i] = site_location[i];

    }

    this_site.length++;

    this_site[this_site.length-1].investigator_name = inv_name;
    this_site[this_site.length-1].site_location = site_loc;
    this_site[this_site.length-1].number = number;
    this_site[this_site.length-1].site_no = site_no;
    this_site[this_site.length-1].version = version;
    this_site[this_site.length-1]._hash = _hash;
    this_site[this_site.length-1].icf_version = icf_version;
  }  //end of constructor


  function get_site_details() returns (bytes32[],bytes32[],uint256,bytes32,uint8,uint256,uint256)
  {

        require(owner == msg.sender);

      return(this_site[0].investigator_name,
            this_site[0].site_location,
            this_site[0].number,
            this_site[0].site_no,
            this_site[0].version,
            this_site[0]._hash,
            this_site[0].icf_version
            );

  } //end of get_site_details


  struct patient_details{   //store patient details

    bytes32[] patient_name;
    bytes32[] location;
    bytes32 patient_id;

  }

  patient_details [] patient_details_array;
  mapping(bytes32 => patient_details) map_patientIdToDetails;    //patient id to patient details

  mapping(address => patient_details) map_patient_add_to_patient_details;  //patient add to patient details

  function add_patient_details(bytes32[] patient_name,bytes32[] location,bytes32 patient_id) returns (bool)
  {
        require(owner == msg.sender);

      uint l =  patient_name.length;

      bytes32[] memory patient_name_= new bytes32[] (l);

      for(uint i=0;i<l;i++)
      {
          patient_name_[i] = patient_name[i];

      }

      l =  location.length;

      bytes32[] memory location_= new bytes32[] (l);

      for(i=0;i<l;i++)
      {
          location_[i] = location[i];

      }


     var this_struct = patient_details(patient_name_,location_,patient_id);
     patient_details_array.push(this_struct);



      map_patientIdToDetails[patient_id] = this_struct;

      return true;

  } //end of additing patient details



      function get_patient_details(bytes32 patient_id) returns(bytes32[],bytes32[],bytes32)
      {

                  require(owner == msg.sender);

          var result = map_patientIdToDetails[patient_id];

        return(result.patient_name,result.location,result.patient_id);

      }  //end of getter


     struct signature_details{

         bytes32 patient_sign;
         bytes32 site_sign;
         uint256 icf_version;

     }

     mapping(address => signature_details) map_add_to_sign;

     signature_details [] signature_array;

    function add_signature_details(address patient_address,bytes32 patient_sign,bytes32 site_sign,uint256 icf_version) returns (bool)
    {

        require(owner == msg.sender);

            var this_struct = signature_details(patient_sign,site_sign,icf_version);

            signature_array.push(this_struct);
            map_add_to_sign[patient_address] = this_struct;

            return true;

    }

    function get_signature_detail(address patient_address) returns(bytes32,bytes32,uint256)
    {
         require(owner == msg.sender);

        var result = map_add_to_sign[patient_address];

            return(result.patient_sign,result.site_sign,result.icf_version);

    }


    function map_add_to_patient_details(address patient_address,bytes32 patient_id) returns(bool)
    {
         require(owner == msg.sender);

         var result = map_patientIdToDetails[patient_id];

        map_patient_add_to_patient_details[patient_address] = result;

            patient_address_arr.length++;
            patient_address_arr[patient_address_arr.length-1]= patient_address;

        return true;

    }

    function get_patientDetails_by_address(address patient_address) returns (bytes32[],
                                                                            bytes32[],
                                                                            bytes32)
    {

        require( owner == msg.sender);

        var result = map_patient_add_to_patient_details[patient_address];

        return(result.patient_name,result.location,result.patient_id);
    }


    mapping( address => address) map_pat_add_to_cont_add;

    function map_patient_address_to_cont_address(address patient_address, address contract_address) returns(bool)
    {

         require(owner == msg.sender);

        map_pat_add_to_cont_add[patient_address] = contract_address;

        return true;
    }

}
