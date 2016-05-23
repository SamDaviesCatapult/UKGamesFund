var React = require("react");
var actions = require("../actions/ContractActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          clauses:"",
          canDelete:""
      }  
    },
    addContract:function(e){
        e.preventDefault();
        actions.addContract(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    handleCheckInputChange:function(e){
      this.setState({canDelete: e.target.value});
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addContract}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Contract Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Contract Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="clauses">Clauses:</label>
                    <input type="text" className="form-control" id="clauses" name="clauses" value={this.state.clauses} onChange={this.handleInputChange} placeholder="Clauses" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="canDelete">Can delete?</label>
                    <input type="checkbox" className="form-control" id="canDelete" name="canDelete" checked={this.state.isChecked} onChange={this.handleCheckInputChange}/> 
                                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Contract</button>
                </div>
            </form>
        )
    }
})