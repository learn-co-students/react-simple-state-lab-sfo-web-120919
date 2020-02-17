import React, {Component} from 'react';


class Cell extends Component {
    
    state = {
        color: this.props.value
    }
    
    
    render() {
      return (
          <div onClick={() => this.setState({color: "#333" })} className="cell" style={{backgroundColor: `${this.state.color}`}}></div>
      )
    }
}

export default Cell



