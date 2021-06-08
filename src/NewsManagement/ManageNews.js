import React ,{Component} from 'react';
import Img from 'react-image';
import { CardImg } from 'reactstrap';
class StockTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            showMore:false
        }
    }
    handleClick(val) {
        this.setState({showMore: !val})
    }
    render() {
    console.log("elements",this.props.news.length)
    const noOfNews=this.state.showMore?this.props.news.length:7;

        return(

                    
                        
                        
                                        <div className="container">
                        {this.props.news.slice(0,noOfNews).map((item,index)=>
                                        <div className="col" style={{border: "0.2px solid", color: "#ffffff" ,marginBottom: "15px"}}>
                                            <div className="row">
                                                <div className="col-sm-4 " >
                                                
                                                    <img src={item.image} alt=" no image"style={{width:'100%',maxHeight:"100px",objectFit:'contain',verticalAlign: "middle",margin:'10px'}}/>
                                                </div>
                                                        <div className="col-sm-8" style={{}} >

                                                            <h6 style={{color: '#dee4e7', textAlign:'justify',padding:'15px',paddingLeft:'0px'}}>{item.title}</h6>

                                                    
                                                        </div>
                                                        <hr style={{background:'grey'}} />
                                            </div>
                                        </div>
                                                )}
                                                
                                                <div className="row">
                                        <button type="button" class="btn btn-primary" onClick={()=>this.handleClick(this.state.showMore)}>More News .......</button>
                                        </div>
</div>
                                                
                        

                    
        )
    }

}
export default StockTable;

