import React, {Component} from 'react';

class BrokenClick extends Component {
    constructor (props) {
        super (props);
        this.state = {clicked: false};
    }
    handleClick (e) {
        this.setState({clicked : true});
    }

    //This will create TypeError: Cannot read property 'setState' of undefined error
    //this.handleClick needs to be binded, React can't find setState, therefore is undefined
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked!!!':'Not Clicked'}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );

    }
}

export default BrokenClick;