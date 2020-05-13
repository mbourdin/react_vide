class HelloReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<p>{this.props.name}</p>)
    }
}