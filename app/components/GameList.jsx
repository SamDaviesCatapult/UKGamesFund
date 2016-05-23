var React = require("react");
var GameInfo = require("./GameInfo.jsx")
var AddGame = require("./AddGame.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddGame />
                </div>
                <div className="col-md-6">
                    {
                        this.props.game.map(function(s,index){
                            return(
                                <GameInfo info={s} key={"game"+index} />
                            )         
                        })
                    }
                </div>
                
           </div>

       
       )
   } 
});