class Pagination extends React.Component{
    /*
     Necessite les props suivantes:
     length : le nombre maximal de pages
     setPage(pageNumber) : la fonction qui renvoie la pagination au parent
     currentPage : la page actuellement affichee
     */
    constructor(props) {
        super(props);
        if (this.props.min===undefined)
        {
            this.min=0;
        }
        else
        {
            this.min=this.props.min;
        }
    }
    previousPage=()=>{
        ////console.log(this.state.currentPage);
        this.setPage(Math.max(this.props.currentPage-1,this.min));
    };
    nextPage=()=>{
        ////console.log(this.state.currentPage);
        this.setPage(Math.min(this.props.currentPage+1,this.props.length));
    };
    setPage=(pageNumber)=>{
        //console.log("setPage in pagination" )
        this.props.setPage(pageNumber);
    }
    render(){
        return(
            <div>
        <p>page {this.props.currentPage+1}/{this.props.length+1}</p>
        <button onClick={this.previousPage} disabled={this.props.currentPage===this.min}>Page -</button>
        <button onClick={this.nextPage} disabled={this.props.currentPage===this.props.length}>Page +</button>
            </div>
    );
    }
}
