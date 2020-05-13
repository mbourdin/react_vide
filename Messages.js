class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let messages=props.messages.map((message)=>
            <Message message={message}></Message>
        );
        return (
        <div>
            {messages}
        </div>
    );
    }
}