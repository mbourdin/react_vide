class Input extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let jsx=<div>
            <h2>{this.props.question.title}</h2>
            <input type="text"/>
        </div>
        return (
           jsx
        );
    }
}