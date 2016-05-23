//Create the UKGF as the top level owner of the game
contract ukgf{
	address public ukgf;  //public address of the UKGF
	mapping(address => uint256) public escrow;
	
	//set the ukgf as the initialiser of the contract
	function owned(){
		ukgf = msg.sender;
	}

	modifier onlyUkgf{
		if(msg.sender != ukgf) throw; //if the UKGF aren't the sender of the message, bug out
	}

	//Allows transfer only if the onlyOwner modifier is met
	function transferOwnership(address newOwner) onlyUkgf {
		ukgf = newOwner;
	}

}


contract Game is ukgf{ // is ukgf inherits functions from the UKGF contract
//public contract variables
string public gameName;
string public gameSymbol;
uint8 public gameDecimals;
address public gameOwner;
//Game [] public GameComponents;
string public contractElements;


//Array of unit265s which holds all the balances
//public accessor is balanceOf with address e.g. balanceOf[address]
mapping(address => uint256) public balanceOf;
//Frozen accounts:
mapping(address => bool) public frozenAccount;
event FrozenEquity(address target, bool frozen);
event ReleaseFrozenEquity(address target);
event Transfer(address indexed from, address indexed to, uint256 value);
event EscrowAddition(address target, uint256 equity);

mapping(address => string) public subContract;

//Main method called at creation
//sets balance of initial creation to constructor parameter initialSupply
	function Game(uint256 initialSupply, string gameNameConstructor, string gameSymbolConstructor, uint8 gameDecimalConstructor, address originalOwner){
		balanceOf[msg.sender] = initialSupply;
		gameName = gameNameConstructor;
		gameSymbol = gameSymbolConstructor;
		gameDecimals = gameDecimalConstructor;
		if (gameOwner !=0) ukgf = msg.sender;
		contractElements = ""; //initialise
		

	}

	//allows for transfer of ownership of portion of game to and address _to
	function transferGameEquity(address _to, uint256 _value){
	//Check that neither accounts are frozen
	if(frozenAccount[msg.sender] || frozenAccount[_to]) throw;

	//first check transfer is allowable in that we're not creating debt or a value wraparound
	if(balanceOf[msg.sender] < _value || balanceOf[_to] + _value < balanceOf[_to] )
		throw; //bug out of function
	//First remove value of ownership from address calling function
	balanceOf[msg.sender] -= _value;
	balanceOf[_to] += _value;
	Transfer(msg.sender, _to, _value);
	}

	function freezeEquity(address target) onlyUkgf{
		frozenAccount[target] = true;
		FrozenEquity(target, true);
	}

	function unFreezeEquity(address target) onlyUkgf{
		frozenAccount[target] = false;
		FrozenEquity(target, false);
	}

	function forceRemoval(address target) onlyUkgf{
		uint256 targetValue = balanceOf[target];
		balanceOf[target] = 0;
		escrow[target] = targetValue;
		freezeEquity(target);
		EscrowAddition(target, targetValue);
	}

	function reinstateEscrow(address target) onlyUkgf{
		unFreezeEquity(target);
		balanceOf[target] = escrow[target];
		escrow[target] = 0;
		ReleaseFrozenEquity(target);
		
	}

	// function setContractHash(string contractClause){
	// 	contractHash = sha256(contractClause);
	// }

	// function setContract(string contractClause){
	// 	contractElements = contractClause;
	// 	contractHash = sha256(contractClause);
	// }


	function getContractElements() constant returns (string){
		return contractElements;
	}

	function getContractAddress() constant returns (address) 
	{
		return this;
	}
	function kill() onlyUkgf
    { 
        if (msg.sender == ukgf)
            suicide(ukgf);  // kills this contract and sends remaining funds back to creator
    }


	//function addGameComponent(Game component){
    //GameComponents[GameComponents.length] = component;
	//} 
		
}
