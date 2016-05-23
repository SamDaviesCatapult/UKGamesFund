var React = require("react");
var actions = require("../actions/GameActions");
var showContract = false;


module.exports = React.createClass({
      getInitialState:function(){
      return {
        gameName:this.props.info.gameName,
        gameAddress:this.props.info.gameAddress,
        gameContract:"",
        gameContractHash:"",
        creatorAddress:this.props.info.creatorAddress,
        creatorEquity:this.props.info.creatorEquity,
        contributors:this.props.info.contributors,  
        }
    
    },
    deleteGame: function(e){
        e.preventDefault();
        actions.deleteGame(this.props.info);
    },
    viewContractInfo:function(e){
        console.log("Viewing Game Info");
        showContract = true;
        this.forceUpdate();
        //actions.addContractToGame(this.props.info);
    },
    addContractToGame:function(e){
         e.preventDefault();
        showContract = false;
        console.log(this.state);
        this.props.info.contract=this.state.contract;
        console.log(this.props.info);
        actions.addContractToGame(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      this.state = this.props.info;
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },

    render:function(){
        // console.log(this.props.info);
        if(showContract){
            return(
               <form className="form" onSubmit={this.addContractToGame}>
                <div className="panel-heading clearfix">
                        {this.props.info.gameName}
                        <span className="pull-right text-uppercase delete-button" onClick={this.deleteGame}>&times;</span>
                    </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="gameContract">Agreed contract</label>
                    <input type="text" className="form-control" id="gameContract" name="gameContract"
                    value={this.state.gameContract} onChange={this.handleInputChange} placeholder="Put your agreed contract here"  />                    
                </div> 
                <div className="form-group">
                    <button className="btn" type="submit">Add contract</button>
                </div>
                </form>
                
        )
        }
        else {
            return(
                <div className="panel panel-default">
                    <div className="panel-heading clearfix">
                        {this.props.info.gameName}
                        <span className="pull-right text-uppercase delete-button" onClick={this.deleteGame}>&times;</span>
                    </div>
                    <div className="panel-body">Game created: {this.props.info.gameAddress}</div>
                    <div>
                    <button className="btn" onClick={this.viewContractInfo}>Add contract</button>
                </div>
                </div>
            )
        }
  
    }
})