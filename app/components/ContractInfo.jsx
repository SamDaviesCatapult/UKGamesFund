var React = require("react");
var actions = require("../actions/ContractActions");

module.exports = React.createClass({
    deleteContract: function(e){
        e.preventDefault();
        actions.deleteContract(this.props.info);
    },
    render:function(){
        console.log(this.props.info.canDelete);
        if(this.props.info.canDelete){
            return(
                <div className="panel panel-default">
                    <div className="panel-heading"> Contract: 
                        {this.props.info.name}
                        <span className="pull-right text-uppercase delete-button" onClick={this.deleteContract}>&times;</span>
                    </div>
                    <div className="panel-body">{this.props.info.clauses}</div>
                    <div className="panel-body">{this.props.info.canDelete}</div>
                </div>
            )
        } else {
            return(
                <div className="panel panel-default">
                    <div className="panel-heading">Contract (no delete); 
                        {this.props.info.name}
                    </div>
                    <div className="panel-body">{this.props.info.clauses}</div>
                    <div className="panel-body">{this.props.info.canDelete}</div>
                </div>
            )
        }
    }
})