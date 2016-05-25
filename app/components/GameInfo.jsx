var React = require("react");
var actions = require("../actions/GameActions");
var viewGameInfo = false;


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

        gameName: this.props.info.gameName,
        gameID: this.props.info._id,
        talHolder1Address:this.props.info.talHolders[0].address,
        talHolder1GoldEquity:this.props.info.talHolders[0].equityGold,
        talHolder1SilverEquity:this.props.info.talHolders[0].equitySilver,
        talHolder1BronzeEquity:this.props.info.talHolders[0].equityBronze,
        talHolder1Status:this.props.info.talHolders[0].status,
        talHolder2Address:this.props.info.talHolders[1].address,
        talHolder2SilverEquity:this.props.info.talHolders[1].equitySilver,
        talHolder2BronzeEquity:this.props.info.talHolders[1].equityBronze,
        talHolder2Status:this.props.info.talHolders[1].status,
        talHolder3Address:this.props.info.talHolders[2].address,
        talHolder3SilverEquity:this.props.info.talHolders[2].equitySilver,
        talHolder3BronzeEquity:this.props.info.talHolders[2].equityBronze,
        talHolder3Status:this.props.info.talHolders[2].status,
        talHolder4Address:this.props.info.talHolders[3].address,
        talHolder4SilverEquity:this.props.info.talHolders[3].equitySilver,
        talHolder4BronzeEquity:this.props.info.talHolders[3].equityBronze,
        talHolder4Status:this.props.info.talHolders[3].status,
        talHolder5Address:this.props.info.talHolders[4].address,
        talHolder5SilverEquity:this.props.info.talHolders[4].equitySilver,
        talHolder5BronzeEquity:this.props.info.talHolders[4].equityBronze,
        talHolder5Status:this.props.info.talHolders[4].status,
        talHolder6Address:this.props.info.talHolders[5].address,
        talHolder6SilverEquity:this.props.info.talHolders[5].equitySilver,
        talHolder6BronzeEquity:this.props.info.talHolders[5].equityBronze,
        talHolder6Status:this.props.info.talHolders[5].status,
        talHolder7Address:this.props.info.talHolders[6].address,
        talHolder7SilverEquity:this.props.info.talHolders[6].equitySilver,
        talHolder7BronzeEquity:this.props.info.talHolders[6].equityBronze,
        talHolder7Status:this.props.info.talHolders[6].status,
        gameAddress: this.props.info.gameAddress,
        gameHash: this.props.info.gameHash,
        fileHash: this.props.info.fileHash,
        goldenTalsIssued: this.props.info.goldenTalsIssued,
        goldenTalsAllocated: this.props.info.goldenTalsAllocated,
        silverTalsIssued: this.props.info.silverTalsIssued,
        silverTalsAllocated: this.props.info.silverTalsAllocated,
        silverTalsRevenuePercent: this.props.info.silverTalsRevenuePercent,
        bronzeTalsIssued: this.props.info.bronzeTalsIssued,
        bronzeTalsAllocated: this.props.info.bronzeTalsAllocated,
        bronzeTalsRevenuePercent: this.props.info.bronzeTalsRevenuePercent,
        newCreativeFounderPrinciples: this.props.info.newCreativeFounderPrinciples,
        newOtherCreativePrinciples: this.props.info.newOtherCreativePrinciples,
        creativeFounderMutualLeave: this.props.info.creativeFounderMutualLeave,
        creativeFounderDisuputeLeave:this.props.info.creativeFounderDisuputeLeave,
        otherCreativeLeaves:this.props.info.otherCreativeLeaves,

        }
    
    },

    deleteGame: function(e){
        e.preventDefault();
        actions.deleteGame(this.props.info);
    },
    hideInfo: function(e){
        viewGameInfo = false;
        this.forceUpdate();
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

    viewGameInfo: function(e){
        viewGameInfo = true;
        this.forceUpdate();
    },
    checkConfirmation:function(e){
        this.forceUpdate();
    },

    render:function(){
        console.log(this.props.info);

        if(viewGameInfo){
            if(this.state.gameAddress != undefined){
                return(
                    <div>
                   <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            Game Information:
                            <span className="pull-right text-uppercase delete-button" onClick={this.hideInfo}>&times;</span>
                        </div>
                        <div className="panel-body">Game Name: {this.state.gameName}</div>
                        <div className="panel-body">Game ID: {this.state.gameID}</div>
                        <div className="panel-body">Game Ethereum Address: {this.state.gameAddress}</div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            TAL Holder 1 information
                        </div>
                        <div className="panel-body">Address: {this.state.talHolder1Address}</div>
                        <div className="panel-body">Gold Equity: {this.state.talHolder1GoldEquity}</div>
                        <div className="panel-body">Status: {this.state.talHolder1Status}</div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            TAL Holder 2 information
                        </div>
                        <div className="panel-body">Address: {this.state.talHolder2Address}</div>
                        <div className="panel-body">Silver Equity: {this.state.talHolder2SilverEquity}</div>
                        <div className="panel-body">Bronze Equity: {this.state.talHolder2BronzeEquity}</div>
                        <div className="panel-body">Status: {this.state.talHolder2Status}</div>
                    </div>
                    <div className="panel panel-default">
                        
                        <div className="panel-heading clearfix">
                            Tal issue:
                        </div>
                        <div className="panel-body">Golden tals issued: {this.state.goldenTalsIssued}</div>
                        <div className="panel-body">Golden tals allocated: {this.state.goldenTalsAllocated}</div>
                        <div className="panel-body">Silver tals issued: {this.state.silverTalsIssued}</div>
                        <div className="panel-body">Silver tals allocated: {this.state.silverTalsAllocated}</div>
                        <div className="panel-body">Bronze tals issued: {this.state.bronzeTalsIssued}</div>
                        <div className="panel-body">Bronze tals allocated: {this.state.bronzeTalsAllocated}</div>

                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            Revenue percentages:
                        </div>
                        <div className="panel-body">Silver tals revenue percent: {this.state.silverTalsRevenuePercent}</div>
                        <div className="panel-body">Bronze tals revenue percent: {this.state.bronzeTalsRevenuePercent}</div>

                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            Principles:
                        </div>
                        <div className="panel-body">New creative founder principles: {this.state.newCreativeFounderPrinciples}</div>
                        <div className="panel-body">New other creative principles: {this.state.newOtherCreativePrinciples}</div>
                        <div className="panel-body">Creative founder leavers mutual decision: {this.state.creativeFounderMutualLeave}</div>
                        <div className="panel-body">Creative founder leavers disputed decision: {this.state.creativeFounderDisuputeLeave}</div>
                        <div className="panel-body">Other creative leavers decision: {this.state.otherCreativeLeaves}</div>

                    </div>
                    </div>
                    
                    )
                }else{
                    return(
                        <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            Game Information:
                            <span className="pull-right text-uppercase delete-button" onClick={this.hideInfo}>&times;</span>
                        </div>
                        <div className="panel-body">Game Name: {this.state.gameName}</div>
                        <div className="panel-body">Game ID: {this.state.gameID}</div>
                        <div className="panel-body">Game Ethereum Address: **Awaiting Confirmation**</div>
                        <button className="btn" onClick={this.checkConfirmation}>Check mining status</button>
                    </div>
                    )
                }
        }
        else {
            return(
                <div className="panel panel-default">
                    <div className="panel-heading clearfix">
                        {this.props.info.gameName}
                        <span className="pull-right text-uppercase delete-button" onClick={this.deleteGame}>&times;</span>
                    </div>
                    <div className="panel-body">Game ID: {this.props.info._id}</div>
                    <div>
                    <button className="btn" onClick={this.viewGameInfo}>View Game Info</button>
                </div>

                </div>
            )
        }
  
    }
})