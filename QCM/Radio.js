class Radio extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let jsx=<div>
            <h2>{this.props.question.title}</h2>
            <input type="radio"/>
        </div>
        return (
            jsx
        );
    }
}