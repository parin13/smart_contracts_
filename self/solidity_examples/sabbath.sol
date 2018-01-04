pragma solidity ^0.4.13;

contract IdentityManagement{
		
		struct Details {
			
			string name;
			string dln;
			string ssn;
			uint256 detail_hash;
		}

		struct ShareDetails{

			address contract_address;
			address user_address;
		}

		struct Logs{
			
			string change;
			string previous;
			string New;
			uint256 prev_hash;
			uint256 changed_hash;

		}


		address private owner;
		Details private OwnerDetails;



		mapping (uint256 => Logs) private History;
		

		mapping (address => ShareDetails) private IShared;
		mapping (address => ShareDetails) private TheyShared;

		address [] meShare;
		address [] theyShare;

		

		function IdentityManagement(uint256 hsh,string drln,string sosn){
			owner = msg.sender;
			OwnerDetails.dln = drln;
			OwnerDetails.ssn = sosn;
			OwnerDetails.detail_hash = hsh;
			
		}

		function Edit(string changed_field, string new_val, uint256 new_hash, uint256 timestamp){
            require(msg.sender == owner);

            if(keccak256(changed_field) == keccak256('name')){
            	OwnerDetails.name = new_val;
            }
            if(keccak256(changed_field) == keccak256('dln')){
            	OwnerDetails.dln = new_val;
            }
            if(keccak256(changed_field) == keccak256('ssn')){
            	OwnerDetails.ssn = new_val;
            }

            OwnerDetails.detail_hash = new_hash;


            
            
		}

            
		function ShareMyDetails (address UserAddress, address ContractAddress) returns (bool success){
			require(msg.sender == owner);
			IShared[UserAddress] = ShareDetails({contract_address: ContractAddress, user_address:UserAddress});
			meShare.push(UserAddress);
			IdentityManagement im = IdentityManagement(ContractAddress);
			im.SharedWithMe(ContractAddress, UserAddress);
			return true;
		}

		function GetDetails() constant returns (string name, string dlno, string ssno){
			require(IShared[msg.sender].user_address == msg.sender || msg.sender == owner);
			name = OwnerDetails.name;
			dlno = OwnerDetails.dln;
			ssno = OwnerDetails.ssn;

			
		}

		function SharedWithMe(address ContractAddress, address UserAddress){
			TheyShared[UserAddress] = ShareDetails({contract_address: ContractAddress, user_address:UserAddress});
			theyShare.push(UserAddress);
			
		}


		

		
		
}
