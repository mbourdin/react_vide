class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
             this.props.show ?
            <div className={"wrapper "+this.props.className}>
                {this.props.children}
            </div>
            :   <div></div>

        );
    }
}