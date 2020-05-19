class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Wrapper className="app" show={true}>
                <Form questions={this.props.questions} className="form">
                </Form>
            </Wrapper>
        );
    }
}