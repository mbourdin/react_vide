class Select extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let jsx= <div>
            <h2>{this.props.question.title}</h2>
            <select type="radio">
        </select>
        </div>;
        return (
           jsx
        );
    }
}