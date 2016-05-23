var React = require("react");
var ContractInfo = require("./ContractInfo.jsx")
var AddContract = require("./AddContract.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddContract />
                </div>
                <div className="col-md-6">
                    {
                        this.props.contract.map(function(s,index){
                            return(
                                <ContractInfo info={s} key={"contract"+index} />
                            )         
                        })
                    }
                </div>
           </div>

       
       )
   } 
});