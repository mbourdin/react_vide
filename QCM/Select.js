class Select extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    handleChange=(event)=>{

        //console.log(event.currentTarget.value+" "+this.props.question.response)
        let score=0;
        if(event.target.value==this.props.question.response)
        {
            score=1
        }
        //console.log(score+","+this.props.questionId)
        this.props.sendScore(score,this.props.questionId);
    }

    render() {
        let jsx= <div>
            <h2>{this.props.question.title}</h2>
            <select
                name={this.props.question.name}
                onChange={this.handleChange}
                disabled={this.props.submitted}
                >
                {
                    this.props.question.choices.map((choice,index)=>{
                        return (<option key={index} value={index}>{choice}</option>)
                        }
                    )
                }

        </select>
            <div>
                {
                    this.props.submitted && <div>{this.props.question.feedback}</div>
                }
            </div>
        </div>;
        return (
           jsx
        );
    }
}