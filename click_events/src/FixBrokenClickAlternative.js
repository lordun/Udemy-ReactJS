import React, {Component} from 'react';

class FixBrokenClickAlternative extends Component {
    // Remember: this is not valid Javascript!
    state = {clicked: false};
        // this.handleClick = this.handleClick.bind(this);
    // handleclick alternative to bind, again not valid Javascript, this syntax uses Babel
    handleClick = (e) => {
        this.setState({clicked : true});
    };
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? "Clicked!!!":"Not Clicked"}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );

    }
}

export default FixBrokenClickAlternative;