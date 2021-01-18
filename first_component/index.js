class Hello extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello there!</h2>
                <h2>Hello again!</h2>
                <h2>Hello for the last time!</h2>
            </div>     
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));