var React = require("react");
var actions = require("../actions/GameActions");
var addAddressAndEquity = false;
var CryptoJS = require("crypto-js");
module.exports = React.createClass({
    getInitialState:function(){
      return {
        gameName: "Demo Game Tranzfuser",
        authenticationCode:"notSureWhatThisDoes",
        talHolders: [
        {address: "0xUKGF", equityGold: 1, equitySilver: 0, equityBronze: 0,status: "funder"},
        {address: "0xContributor2", equityGold: 0,equitySilver: 0, equityBronze: 0,status: "creativeFounder"},
        {address: "0xContributor3", equityGold: 0,equitySilver: 0, equityBronze: 0,status: "creativeFounder"},
        {address: "0xContributor4", equityGold: 0,equitySilver: 0, equityBronze: 0,status: "creativeFounder"},
        {address: "0xContributor5", equityGold: 0,equitySilver: 0, equityBronze: 0,status: "creativeFounder"},
        {address: "0xContributor6", equityGold: 0,equitySilver: 0, equityBronze: 0,status: "creativeFounder"},
        {address: "0xContributor7", equityGold: 0,equitySilver: 0, equityBronze: 0,status: "creativeFounder"},
        ],
        gameAddress: String,
        gameHash: String,
        goldenTalsIssued: 0,
        goldenTalsAllocated: 0,
        silverTalsIssued: 0,
        silverTalsAllocated: 0,
        silverTalsRevenuePercent: 0,
        bronzeTalsIssued: 0,
        bronzeTalsAllocated: 0,
        bronzeTalsRevenuePercent: 0,
        newCreativeFounderPrinciples: "allocatefromUnallocated",
        newOtherCreativePrinciples: "allocatefromUnallocated",
        creativeFounderMutualLeave: "referToGoldenTal",
        creativeFounderDisuputeLeave:"referToGoldenTal",
        otherCreativeLeaves:"referToGoldenTal",
        fileHash: "",
        gameABI:"",
        }
      },
    addGame:function(e){
        e.preventDefault();
        addAddressAndEquity = false;
        console.log(this.state);
        actions.addGame(this.state);

    },
    getFileHash:function(event){
      event.preventDefault();
      var file = event.target.files[0];
      var reader = new FileReader();
      var state = this.state;
      var hashValue;
      reader.onload = function(e) {
            var contents = e.target.result;
            var wordArray = CryptoJS.lib.WordArray.create(contents);
            hashValue = CryptoJS.SHA256(wordArray).toString(CryptoJS.enc.Hex);

            state["fileHash"]=hashValue;
            this.setState(state);
      }.bind(this);
      reader.readAsArrayBuffer(file);
  
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    handleStatusChange:function(e){
      e.preventDefault();
      var name = e.target.name;      var state = this.state;
      var field = state["talHolders"][name];
      field.status = e.target.value;
      state["talHolders"][name] = field;
      this.setState(state);
    },
    handlePrincipleChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    handleSilverEquityInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      var field = state["talHolders"][name];
      field.equity = e.target.value;
      state["talHolders"][name] = field;
      this.setState(state);
    },
    handleBronzeEquityInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      var field = state["talHolders"][name];
      field.equity = e.target.value;
      state["talHolders"][name] = field;
      this.setState(state);
    },
    handleAddressInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      var field = state["talHolders"][name];
      field.address = e.target.value;
      state["talHolders"][name] = field;
      this.setState(state);
    },
    addContributors:function(){
      addAddressAndEquity = true;
      this.forceUpdate();
      },
    render:function(){
      if(!addAddressAndEquity){
        return(
            <div className="panel panel-default">
                <div className="form-group">
                    <label className="control-label" htmlFor="gameName">Name of Project as defined in Tranzfuser Agreement *</label>
                    <input type="text" className="form-control" id="gameName" name="gameName" value={this.state.gameName} onChange={this.handleInputChange} placeholder={this.props.gameName} />                    
                </div> 
                <div className="form-group">
                    <label className="control-label" htmlFor="authenticationCode">Authentication Code: </label>
                    <input type="text" className="form-control" id="authenticationCode" name="authenticationCode" value={this.state.authenticationCode} 
                    onChange={this.handleInputChange} placeholder={this.props.authenticationCode} />                    
                </div>
                <div>
                    <button className="btn" onClick={this.addContributors}>Add Contributors</button>
                </div>
            </div>
        )
      }else{
        return(
          <div className="panel panel-default">
            <form className="form" onSubmit={this.addGame}>
                <div className="form-group">
                    <label className="control-label" htmlFor="gameName">Name of Project as defined in Tranzfuser Agreement *</label>
                    <input type="text" className="form-control" id="gameName" name="gameName" value={this.state.gameName} 
                    onChange={this.handleInputChange} placeholder={this.props.gameName} />                    
                </div>
                <h3>UK Games Fund</h3>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor0Address">Name of Tal Holder 1: </label>
                    <input type="text" className="form-control" id="creator0Address" name="creator0Address" 
                    value={this.state.talHolders[0].address}placeholder="UK Games Talent and Finance CIC" />                    
                </div>
                    <div className="form-group">
                        <select value={this.state.talHolders[0].status} className="form-control" id="contributor1Equity" name="talHolder1Stat">
                            <option value="creativeFounder">Creative Founder</option>
                            <option value="otherCreativeteam">Other Creative Team</option>
                            <option value="funder">Funder</option>
                        </select>
                </div>

                <h3>Tal Holder 2</h3>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor2Address">Name of Tal Holder 2: </label>
                    <input type="text" className="form-control" id="creator2Address" name="creator2Address" 
                    value={this.state.talHolders[1].address} onChange={this.handleAddressInputChange} placeholder={this.state.talHolders[1].address} />                    
                </div>
                    <div className="form-group">
                    <label className="control-label" htmlFor="contributor1Status">Status of Tal Holder 2: </label>
                        <select value={this.state.talHolders[1].status} onChange={this.handleStatusChange}  className="form-control" id="contributor1Status" name="1">
                         <option value="creativeFounder">Creative Founder</option>
                        <option value="otherCreativeteam">Other Creative Team</option>
                        <option value="funder">Funder</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor2SilverEquity">Tal Holder 2 Silver</label>
                    <input type="text" className="form-control" id="contributor1SilverEquity" name="1"
                    value={this.state.talHolders[1].equitySilver} onChange={this.handleSilverEquityInputChange} placeholder="Second contributor silver equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor1BronzeEquity">Tal Holder 2 Bronze</label>
                    <input type="text" className="form-control" id="contributor1BronzeEquity" name="1"
                    value={this.state.talHolders[1].equityBronze} onChange={this.handleBronzeEquityInputChange} placeholder="Second contributor bronze equity" />                    
                </div>
                <h3>Tal Holder 3</h3>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor3Address">Name of Tal Holder 3: </label>
                    <input type="text" className="form-control" id="creator3Address" name="creator3Address" 
                    value={this.state.talHolders[2].address} onChange={this.handleAddressInputChange} placeholder={this.state.talHolders[2].address} />                    
                </div>
                    <div className="form-group">
                    <label className="control-label" htmlFor="contributor3Status">Status of Tal Holder 3: </label>
                        <select value={this.state.talHolders[2].status} onChange={this.handleStatusChange}  className="form-control" id="contributor3Equity" name="2">
                         <option value="creativeFounder">Creative Founder</option>
                        <option value="otherCreativeteam">Other Creative Team</option>
                        <option value="funder">Funder</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor3SilverEquity">Tal Holder 3 Silver</label>
                    <input type="text" className="form-control" id="contributor3SilverEquity" name="2"
                    value={this.state.talHolders[2].equitySilver} onChange={this.handleSilverEquityInputChange} placeholder="Third contributor silver equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor3BronzeEquity">Tal Holder 3 Bronze</label>
                    <input type="text" className="form-control" id="contributor3BronzeEquity" name="2"
                    value={this.state.talHolders[2].equityBronze} onChange={this.handleBronzeEquityInputChange} placeholder="Third contributor bronze equity" />                    
                </div>

                <h3>Tal Holder 4</h3>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor4Address">Name of Tal Holder 4: </label>
                    <input type="text" className="form-control" id="creator4Address" name="creator4Address" 
                    value={this.state.talHolders[3].address} onChange={this.handleAddressInputChange} placeholder={this.state.talHolders[3].address} />                    
                </div>
                    <div className="form-group">
                    <label className="control-label" htmlFor="contributor4Status">Status of Tal Holder 4: </label>
                        <select value={this.state.talHolders[3].status} onChange={this.handleStatusChange}  className="form-control" id="contributor4Equity" name="3">
                         <option value="creativeFounder">Creative Founder</option>
                        <option value="otherCreativeteam">Other Creative Team</option>
                        <option value="funder">Funder</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor4SilverEquity">Tal Holder 4 Silver</label>
                    <input type="text" className="form-control" id="contributor4SilverEquity" name="3"
                    value={this.state.talHolders[3].equitySilver} onChange={this.handleSilverEquityInputChange} placeholder="Fourth contributor silver equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor4BronzeEquity">Tal Holder 4 Bronze</label>
                    <input type="text" className="form-control" id="contributor4BronzeEquity" name="3"
                    value={this.state.talHolders[3].equityBronze} onChange={this.handleBronzeEquityInputChange} placeholder="Fourth contributor bronze equity" />                    
                </div>

                <h3>Tal Holder 5</h3>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor5Address">Name of Tal Holder 5: </label>
                    <input type="text" className="form-control" id="creator5Address" name="creator5Address" 
                    value={this.state.talHolders[4].address} onChange={this.handleAddressInputChange} placeholder={this.state.talHolders[4].address} />                    
                </div>
                    <div className="form-group">
                    <label className="control-label" htmlFor="contributor5status">Status of Tal Holder 5: </label>
                        <select value={this.state.talHolders[4].status} onChange={this.handleStatusChange}  className="form-control" id="contributor5Equity" name="4">
                         <option value="creativeFounder">Creative Founder</option>
                        <option value="otherCreativeteam">Other Creative Team</option>
                        <option value="funder">Funder</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor5SilverEquity">Tal Holder 5 Silver</label>
                    <input type="text" className="form-control" id="contributor5SilverEquity" name="4"
                    value={this.state.talHolders[4].equitySilver} onChange={this.handleSilverEquityInputChange} placeholder="Fifth contributor silver equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor5BronzeEquity">Tal Holder 5 Bronze</label>
                    <input type="text" className="form-control" id="contributor5BronzeEquity" name="4"
                    value={this.state.talHolders[4].equityBronze} onChange={this.handleBronzeEquityInputChange} placeholder="Fifth contributor bronze equity" />                    
                </div>

                <h3>Tal Holder 6</h3>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor6Address">Name of Tal Holder 6: </label>
                    <input type="text" className="form-control" id="creator6Address" name="creator6Address" 
                    value={this.state.talHolders[5].address} onChange={this.handleAddressInputChange} placeholder={this.state.talHolders[5].address} />                    
                </div>
                    <div className="form-group">
                    <label className="control-label" htmlFor="contributor6status">Status of Tal Holder 6: </label>
                        <select value={this.state.talHolders[5].status} onChange={this.handleStatusChange}  className="form-control" id="contributo6Equity" name="5">
                         <option value="creativeFounder">Creative Founder</option>
                        <option value="otherCreativeteam">Other Creative Team</option>
                        <option value="funder">Funder</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor6SilverEquity">Tal Holder 6 Silver</label>
                    <input type="text" className="form-control" id="contributor6SilverEquity" name="5"
                    value={this.state.talHolders[5].equitySilver} onChange={this.handleSilverEquityInputChange} placeholder="Sixth contributor silver equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor6BronzeEquity">Tal Holder 6 Bronze</label>
                    <input type="text" className="form-control" id="contributor6BronzeEquity" name="5"
                    value={this.state.talHolders[5].equityBronze} onChange={this.handleBronzeEquityInputChange} placeholder="Sixth contributor bronze equity" />                    
                </div>
                <h3>Tal Holder 7</h3>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor7Address">Name of Tal Holder 7: </label>
                    <input type="text" className="form-control" id="creator7Address" name="creator7Address" 
                    value={this.state.talHolders[6].address} onChange={this.handleAddressInputChange} placeholder={this.state.talHolders[6].address} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor7status">Status of Tal Holder 7: </label>
                        <select value={this.state.talHolders[6].status} onChange={this.handleStatusChange}  className="form-control" id="contributo6Equity" name="6">
                         <option value="creativeFounder">Creative Founder</option>
                        <option value="otherCreativeteam">Other Creative Team</option>
                        <option value="funder">Funder</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor7SilverEquity">Tal Holder 7 Silver</label>
                    <input type="text" className="form-control" id="contributor7SilverEquity" name="6"
                    value={this.state.talHolders[6].equitySilver} onChange={this.handleSilverEquityInputChange} placeholder="Seventh contributor silver equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor7BronzeEquity">Tal Holder 7 Bronze</label>
                    <input type="text" className="form-control" id="contributor7BronzeEquity" name="6"
                    value={this.state.talHolders[6].equityBronze} onChange={this.handleBronzeEquityInputChange} placeholder="Seventh contributor bronze equity" />                    
                </div>
                <h3>Issue of tals for the project</h3>
                <div className="form-group">
                    <label className="control-label" htmlFor="goldenTalsIssued">Golden Tals total: </label>
                    <input type="text" className="form-control" id="goldenTalsIssued" name="goldenTalsIssued" 
                    value={this.state.goldenTalsIssued} onChange={this.handleInputChange} placeholder={this.state.goldenTalsIssued} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="goldenTalsAllocated">Golden Tals allocated: </label>
                    <input type="text" className="form-control" id="goldenTalsAllocated" name="goldenTalsAllocated" 
                    value={this.state.goldenTalsAllocated} onChange={this.handleInputChange} placeholder={this.state.goldenTalsAllocated} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="silverTalsIssued">Silver Tals total: </label>
                    <input type="text" className="form-control" id="silverTalsIssued" name="silverTalsIssued" 
                    value={this.state.silverTalsIssued} onChange={this.handleInputChange} placeholder={this.state.silverTalsIssued} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="silverTalsAllocated">Silver Tals allocated: </label>
                    <input type="text" className="form-control" id="silverTalsAllocated" name="silverTalsAllocated" 
                    value={this.state.silverTalsAllocated} onChange={this.handleInputChange} placeholder={this.state.silverTalsAllocated} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="bronzeTalsIssued">Bronze Tals total: </label>
                    <input type="text" className="form-control" id="bronzeTalsIssued" name="bronzeTalsIssued" 
                    value={this.state.bronzeTalsIssued} onChange={this.handleInputChange} placeholder={this.state.bronzeTalsIssued} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="bronzeTalsAllocated">Bronze Tals allocated: </label>
                    <input type="text" className="form-control" id="bronzeTalsAllocated" name="bronzeTalsAllocated" 
                    value={this.state.bronzeTalsAllocated} onChange={this.handleInputChange} placeholder={this.state.bronzeTalsAllocated} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="silverTalsRevenuePercent">Silver Tals revenue Percentage:  </label>
                    <input type="text" className="form-control" id="silverTalsRevenuePercent" name="silverTalsRevenuePercent" 
                    value={this.state.silverTalsRevenuePercent} onChange={this.handleInputChange} placeholder={this.state.silverTalsRevenuePercent} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="bronzeTalsRevenuePercent">Bronze Tals revenue Percentage: </label>
                    <input type="text" className="form-control" id="bronzeTalsRevenuePercent" name="bronzeTalsRevenuePercent" 
                    value={this.state.bronzeTalsRevenuePercent} onChange={this.handleInputChange} placeholder={this.state.bronzeTalsRevenuePercent} />                    
                </div>
                <div className="form-group">
                <h3>Principles to be applied to subsequent amendments (joiners)</h3>
                    <label className="control-label" htmlFor="newCreativeFounderPrinciples">New Creative Founder joins; </label>
                        <select value={this.state.newCreativeFounderPrinciples} onChange={this.handlePrincipleChange}  
                        className="form-control" id="newCreativeFounderPrinciples" name="newCreativeFounderPrinciples">
                         <option value="allocatefromUnallocated">Allocate Tals from unalocated Tals in that class</option>
                        <option value="redistributeFromAllocated">Redistribute Tals from unallocated Tals in that class</option>
                        <option value="referToGoldenTal">Refer to Golden Tal Holder for decision</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="newOtherCreativePrinciples">New Other Creative joins; </label>
                        <select value={this.state.newOtherCreativePrinciples} onChange={this.handlePrincipleChange}  
                        className="form-control" id="newOtherCreativePrinciples" name="newOtherCreativePrinciples">
                         <option value="allocatefromUnallocated">Allocate Tals from unalocated Tals in that class</option>
                        <option value="redistributeFromAllocated">Redistribute Tals from unallocated Tals in that class</option>
                        <option value="referToGoldenTal">Refer to Golden Tal Holder for decision</option>
                        </select>
                </div>
                <div className="form-group">
                <h3>Principles to be applied to subsequent amendments (leavers)</h3>
                    <label className="control-label" htmlFor="creativeFounderMutualLeave">New Creative Founder leaves in mutually agreed circumstances: </label>
                        <select value={this.state.creativeFounderMutualLeave} onChange={this.handlePrincipleChange}  
                        className="form-control" id="creativeFounderMutualLeave" name="creativeFounderMutualLeave">
                         <option value="allocatefromUnallocated">Allocate Tals from unalocated Tals in that class</option>
                        <option value="redistributeFromAllocated">Redistribute Tals from unallocated Tals in that class</option>
                        <option value="referToGoldenTal">Refer to Golden Tal Holder for decision</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="creativeFounderDisuputeLeave">Creative Founder leaves in disputed circumstances: </label>
                        <select value={this.state.creativeFounderDisuputeLeave} onChange={this.handlePrincipleChange}  
                        className="form-control" id="creativeFounderDisuputeLeave" name="creativeFounderDisuputeLeave">
                         <option value="allocatefromUnallocated">Allocate Tals from unalocated Tals in that class</option>
                        <option value="redistributeFromAllocated">Redistribute Tals from unallocated Tals in that class</option>
                        <option value="referToGoldenTal">Refer to Golden Tal Holder for decision</option>
                        </select>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="otherCreativeLeaves">Other Creative leaves for any reason: </label>
                        <select value={this.state.otherCreativeLeaves} onChange={this.handlePrincipleChange}  
                        className="form-control" id="otherCreativeLeaves" name="otherCreativeLeaves">
                         <option value="allocatefromUnallocated">Allocate Tals from unalocated Tals in that class</option>
                        <option value="redistributeFromAllocated">Redistribute Tals from unallocated Tals in that class</option>
                        <option value="referToGoldenTal">Refer to Golden Tal Holder for decision</option>
                        </select>
                </div>
                <div className="form-group">
                <label className="control-label" htmlFor="uploadPaperContract">Please upload the paper contract here: </label>
                <input type="file" onChange={this.getFileHash} />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Create Game</button>
                </div>
                
            </form>
            </div>
          

        )
      }
      
    }
})