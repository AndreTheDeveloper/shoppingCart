import React, { Component } from 'react'
import '../App.css';
import Counters from './Counters';
import NavBar from './NavBar';

class Main extends Component {
    state = { 
        counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        ]
    } 

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState( { counters });
    }

    handleDelete = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        if(counters[index].value > 0)
            counters[index].value--;

        this.setState( { counters });
    }

    render() { 
        return (
            <>
            <NavBar 
                totalCounters = {this.state.counters.filter(c => c.value > 0).length}
            />
            <Counters 
                counter={this.state.counters}
                onIncrement={this.handleIncrement} 
                onDelete={this.handleDelete} />
            </>
        );
    }
}
 
export default Main;