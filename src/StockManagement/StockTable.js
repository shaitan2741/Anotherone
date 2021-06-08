import React ,{Component} from 'react';
import {Button }from 'reactstrap';

class StockTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            showMore:false
        }
    }
    handleClick(val){
        this.setState({showMore:!val})
    }
    render() {
        const noOfDate=this.state.showMore?this.props.dateVal.length:22;
        const noOfOpen=this.state.showMore?this.props.openVal.length:22;
        const noOfHigh=this.state.showMore?this.props.highVal.length:22;
        const noOfLow=this.state.showMore?this.props.lowVal.length:22;
        const noOfClose=this.state.showMore?this.props.closeVal.length:22;

        return(

                    <div >
                    
                    
                    
                    
                        
                        <div className="row row-cols-5" >
                                            <div className="col" style={{border: '1px solid',padding:'9px',paddingLeft:'0px',paddingRight:'0px',textAlign:"center"}} >
                                            <h5 style={{color: 'white' ,textAlign: 'center'}}>Date</h5>
                                            <hr style={{background: "grey"}}/>
                                            {this.props.dateVal.slice(0,noOfDate).map((item) => {
                                                    return (
                                                    <div style={{color: 'aqua',padding:'9px',fontSize:"1.8vmin"}}>{item}
                                                    </div>
                                                    
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col " style={{border: '1px solid',padding:'9px',paddingLeft:'0px',paddingRight:'0px',textAlign: 'center'}}>
                                            <h5 style={{color: 'white' ,textAlign: 'center'}}>open</h5>
                                            <hr style={{background: "grey"}}/>
                                            {this.props.openVal.slice(0,noOfOpen).map((item) => {
                                                    return (
                                                    <div style={{color: '#8d93ab',fontSize:"1.8vmin",padding: '9px'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col" style={{border: '1px solid',padding:'9px',paddingLeft:'0px',paddingRight:'0px',textAlign: 'center'}}>
                                            <h5 style={{color: 'white' ,textAlign: 'center'}}>High</h5>
                                            <hr style={{background: "grey"}}/>

                                            {this.props.highVal.slice(0,noOfHigh).map((item) => {
                                                    return (
                                                    <div style={{marginBottom:'100',fontSize:"1.8vmin",padding: '9px',color: '#8d93ab'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col" style={{border: '1px solid',padding:'9px',textAlign: 'center',paddingLeft:'0px',paddingRight:'0px'}}>
                                            <h5 style={{color: 'white' }}>Low</h5>
                                            <hr style={{background: "grey"}}/>
                                            {this.props.lowVal.slice(0,noOfLow).map((item) => {
                                                    return (
                                                    <div style={{color: '#8d93ab', margin:'10',fontSize:"1.8vmin",padding: '9px'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>

                                            <div className="col" style={{border: '1px solid',padding:'9px',paddingLeft:'0px',paddingRight:'0px'}}>
                                            <h5 style={{color: 'white' ,textAlign: 'center'}}>Close</h5>
                                            <hr style={{background: "grey"}}/>
                                            {this.props.closeVal.slice(0,noOfClose).map((item) => {
                                                    return (
                                                    <div style={{color: '#8d93ab',fontSize:"1.8vmin",padding: '9px',textAlign: 'center'}}>{parseFloat(item).toFixed( 2 )}</div>
                                                    )
                                                    })
                                                }
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                        <button type="button" class="btn btn-primary" onClick= {()=>this.handleClick(this.state.showMore)}>See Trends of past ....</button>
                                        </div>
                                        
                                        

                    </div>
        )
    }

}
export default StockTable;

