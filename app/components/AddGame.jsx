var React = require("react");
var actions = require("../actions/GameActions");
var addAddressAndEquity = false;
module.exports = React.createClass({
    getInitialState:function(){
      return {
          gameName:"I am a demo game",
          gameAddress:"",
          gameContract:"",
          gameContractHash:"",
          creatorAddress:"0xUKGF",
          creatorEquity:"5",
          contributors:[
          {address:"0xContributor1", equity:"50"},
          {address:"0xContributor2", equity:"30"},
          {address:"0xContributor3", equity:"10"},
          {address:"0xContributor4", equity:"5"},
          ]  
        }
    },
    addGame:function(e){
        e.preventDefault();
        addAddressAndEquity = false;
        actions.addGame(this.state);

    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    handleEquityInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      var field = state["contributors"][name];
      field.equity = e.target.value;
      state["contributors"][name] = field;
      this.setState(state);
    },
    handleAddressInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      var field = state["contributors"][name];
      field.address = e.target.value;
      state["contributors"][name] = field;
      this.setState(state);
    },
    addContributors:function(){
      console.log("Adding contrubtors");
      addAddressAndEquity = true;
      this.forceUpdate();
      },
    render:function(){
      if(!addAddressAndEquity){
        return(
            <div className="panel panel-default">
                <div className="form-group">
                    <label className="control-label" htmlFor="gameName">Name of game:</label>
                    <input type="text" className="form-control" id="gameName" name="gameName" value={this.state.gameName} onChange={this.handleInputChange} placeholder={this.props.gameName} />                    
                </div>
                <div>
                    <button className="btn" onClick={this.addContributors}>Add Contributors</button>
                </div>
            </div>
        )
      }else{
        return(
            <form className="form" onSubmit={this.addGame}>
                <div className="form-group">
                    <label className="control-label" htmlFor="gameName">Name of game:</label>
                    <input type="text" className="form-control" id="gameName" name="gameName" value={this.state.gameName} onChange={this.handleInputChange} placeholder={this.props.gameName} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="creatorAddress">Address:</label>
                    <input type="text" className="form-control" id="creatorAddress" name="creatorAddress" value={this.state.creatorAddress} onChange={this.handleInputChange} placeholder="Wallet address of creator (i.e. UKGF)" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor1Address">Contributor 1 Address</label>
                    <input type="text" className="form-control" id="contributor1Adress" name="0"
                    value={this.state.contributors[0].address} onChange={this.handleAddressInputChange} placeholder="First contributor address" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor1Equity">Contributor 1 equity</label>
                    <input type="text" className="form-control" id="contributor1Equity" name="0"
                    value={this.state.contributors[0].equity} onChange={this.handleEquityInputChange} placeholder="First contributor equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor2Address">Contributor 2 Addresss</label>
                    <input type="text" className="form-control" id="contributor2Address" name="1"
                    value={this.state.contributors[1].address} onChange={this.handleAddressInputChange} placeholder="Second contributor address"  />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor2Equity">Contributor 2 Equity</label>
                    <input type="text" className="form-control" id="contributor2Equity" name="1"
                    value={this.state.contributors[1].equity} onChange={this.handleEquityInputChange} placeholder="Second contributor equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor3Address">Contributor 3 Address</label>
                    <input type="text" className="form-control" id="contributor3Address" name="2"
                    value={this.state.contributors[2].address} onChange={this.handleAddressInputChange} placeholder="Third contributor address"  />  
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor3Equity">Contributor 3 Equity</label>
                    <input type="text" className="form-control" id="contributor3Equity" name="2"
                    value={this.state.contributors[2].equity} onChange={this.handleEquityInputChange} placeholder="Third contributor equity" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor4Address">Contributor 4 Address</label>
                    <input type="text" className="form-control" id="contributor4Address" name="3"
                    value={this.state.contributors[3].address} onChange={this.handleAddressInputChange} placeholder="Fourth contributor address"  />  
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="contributor4Equity">Contributor 4 Equity</label>
                    <input type="text" className="form-control" id="contributor4Equity" name="3"
                    value={this.state.contributors[3].equity} onChange={this.handleEquityInputChange} placeholder="Fourth contributor equity" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Create Game</button>
                </div>
            </form>
        )
      }
      
    }
})