class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"wrapper "+this.props.className}>
                {this.props.children}
            </div>
        );
    }
}