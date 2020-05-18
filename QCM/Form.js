class Form extends React.Component{
    constructor(props) {
        super(props);
        this.questions=[];
        let index=0;
        for(let question in this.props.questions)
        {   let q=this.props.questions[question];
            q.score=0;
            this.questions.push(q);
        }

    }
    recieveScore=(score,index)=>{
        this.questions[index].score=score;
        let tempScore=0;
        for(let question of this.questions)
        {
            tempScore+=question.score;
        }
        console.log(tempScore);
    }
    render(){


        return (
            <form>
                {this.questions.map(
                (question, index) =>
                    (question.type==="select") ?
                    <Select
                        question={question}
                        key={index}
                        questionId={index}
                        sendScore={this.recieveScore}
                    />
                        :
                    <Radio
                        question={question}
                        key={index}
                        questionId={index}
                        sendScore={this.recieveScore}
                    />

            )}
            </form>
        )
    }
}