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
                                        <div className="col" style={{border: "0.5px solid", color: "#ffffff" ,marginBottom: "20px"}}>
                                            <div className="row row-cols-2">
                                                <div className="col" >
                                                
                                                    <img src={item.image} alt=" no image"style={{width:"100%",maxHeight:"100%",objectFit:'contain',padding:'5px',marginBottom:"0px",paddingBottom:"0px"}}/>
                                                </div>
                                                        <div className="col" >

                                                            <div style={{color: '#dee4e7',padding:'10px',fontSize:"0.5vh or 3vw"}}>{item.title}</div>

                                                    
                                                        </div>
                                                        
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

