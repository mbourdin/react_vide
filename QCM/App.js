class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.questions)
    }

    render() {
        return (
            <Wrapper>
                <Form questions={this.props.questions}>
                </Form>
            </Wrapper>
        );
    }
}