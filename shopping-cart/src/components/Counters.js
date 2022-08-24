import React, { Component } from 'react';
import Counter from './Counter';
 class Counters extends Component { 
    render() { 
        return (
            <ul>
                {this.props.counter.map(counter => 
                    <li key={counter.id}>
                        <Counter counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}/>
                    </li>
                    )}
            </ul>
        );
    }
 }
  
 export default Counters;