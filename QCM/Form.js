class Form extends React.Component{
    constructor(props) {
        super(props);
        this.questions=[];
        for(let question in this.props.questions)
        {   let q=this.props.questions[question];
            this.questions.push(q);
            console.log(q)
        }
        this.state={
        score:0
        }
    }

    render(){


        return (
            <form>
                {this.questions.map(
                (question, index) =>
                    (question.type==="select") ? <Select question={question} key={index}/> : <Radio question={question} key={index}/>

            )}
            </form>
        )
    }
}