import React, {Component} from 'react';

class Inputtodo extends Component{

render(){
    const {item ,handleChange, handlesubmit, addtodo  }=this.props;
    return(<div className="card card-body my-3">

        <form onSubmit={handlesubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text by-primary text-white">
                        <i className="fas fa-book" />
                    </div>

                </div>
                <input  value={item}  type="text" placeholder="Add your todo" onChange={handleChange}/>
                <button  type="submit" className="btn btn-success" onClick={addtodo} > + </button>
              
               


            </div>


        </form>
    </div>
    );
}
}
export default Inputtodo;