class Input extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let jsx=<div>
            <h2>{this.props.title}</h2>
            <input type={this.props.type} />
        </div>
        return (
           jsx
        );
    }
}