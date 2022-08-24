import React, { Component } from 'react';


class navBar extends Component {
    render() { 
        return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Total items: {this.props.totalCounters}</span>

            </div>
        </nav>  
        );
    }
}
 
export default navBar;