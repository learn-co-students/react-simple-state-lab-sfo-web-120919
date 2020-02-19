import React,{Component} from 'react';

class Cell extends Component
{
    constructor(props)
    {
        super();
        this.state = {color:this.props.values}
    }
    handle()
    {
        this.setState({ color:  '#333' })
    }
    render()
    {
        return (
            <div className="cell" style = {{backgroundColor: `${this.state.color}`}} onClick={this.handle}>
            </div>
        )
    }
}

export default Cell;