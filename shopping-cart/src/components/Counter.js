import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <div>
                {this.props.counter.value}
                <button onClick={() => this.props.onIncrement(this.props.counter)}  className='btn btn-secondary btn-sm m-2'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter)} className='btn btn-secondary btn-sm m-2'>Delete</button>
            </div>
        );
    }
}
 
export default Counter;