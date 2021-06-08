import React, { Component } from 'react';
import '../App.css';
import StockUtils from '../StockManagement/StockUtils';
import Cards from './card';
import {Input} from 'reactstrap';
import Chart from './chart';
import Loading from './Loader';
import StockTable from '../StockManagement/StockTable';
import ManageNews from '../NewsManagement/ManageNews';



class MarketTrack extends Component {
    constructor(props) {
        super(props);
        this.state={
            Stock:StockUtils,
            x_val:[],
            y_val:[],
            closed:[],
            high:[],
            low:[],
            wholeLow:[],
            wholeHigh:[],
            wholeClose:[],
            articles:[],                                                                
            presetLow:[],
            stock_Name:'FB',
            initial_Name:'Facebook Inc.',
            loading:true,
            presentDate:'',
            stockWhole:[],
            
        }

    }
    handleClick(val) {
        this.setState({showMore: !val})
    }
    handleChartTable(val){
        this.setState({showMoreChart: !val})
    }


    handleChange = (event) => {
        this.setState({loading:true})
        this.handleClick(true);
        this.handleChartTable(true);
        var symbol=event.target.value;
        console.log('what',symbol);
        var i;
        var index;
        for(i=0;i<symbol.length;i++){
            if(symbol[i]==='-'){
                index=i;
                break;
            }
        }
        //callback function......
        this.setState({
            stock_Name: symbol.substring(index+1),
            initial_Name: symbol.substring(0,index)
        }, () => {
            this.Stocker()
            this.getNews()
            console.log("state",this.state.stock_Name);
        })
    };

    componentDidMount(){
        this.Stocker();
        this.getNews();


    }

    Stocker(){
        const pointerToThis =this;
        // console.log(pointerToThis);
        const API_Key='X662IPBO4D3M25MX';
        const Stock_Symbol=this.state.stock_Name;
        console.log(Stock_Symbol);
        //we are using backtick so that we can copy API directly here by putting in it
        let API_Call=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${Stock_Symbol}&outputsize=compact&apikey=${API_Key}`;
        let stocksXval=[];
        let stocksYval=[];
        let presentDate=[];
        let wholeHigh=[];
        let wholeLow=[];
        let wholeClose=[];

        fetch(API_Call)
            .then(
                function(
                    response){
                        return response.json();
                })
            .then(
                function(data){
                    var x=1;
                    console.log(data);
                    // this.setState({loading:true});
                    for (var key in data['Time Series (Daily)']){
                        stocksXval.push(key);
                        stocksYval.push(
                            data['Time Series (Daily)'][key]['1. open']
                            );
                            wholeHigh.push(
                                data['Time Series (Daily)'][key]['2. high']
                                );
                                wholeLow.push(
                                    data['Time Series (Daily)'][key]['3. low']
                                    );
                                    wholeClose.push(
                                        data['Time Series (Daily)'][key]['4. close']
                                        );

                            if(x>=1){
                                presentDate.push(key)
                                    x=x-1
                            }
                    }


                    console.log('dates are here',stocksXval);
                    pointerToThis.setState({
                        x_val:stocksXval,
                        y_val:stocksYval,
                        presentDate:presentDate,
                        wholeHigh:wholeHigh,
                        wholeLow:wholeLow,
                        wholeClose:wholeClose,
                        loading:false,
                    })
                }
            )
    }

    getNews(){
        const Stock_Name=this.state.initial_Name;
        console.log('Given News Name::',Stock_Name);
        let API_Call=`https://gnews.io/api/v4/search?q=${this.state.stock_Name}&country=us&token=1a09b0dcb1c66a5b7f6e463a0f17aa60`;
        console.log("myAPI",API_Call)

        fetch(API_Call)
        .then(
                    (
                        response)=>{
                            return response.json();
                    })
                .then((data)=>{
                    console.log('response to what',data);
                    this.setState({
                        articles: data.articles
                    })
                    .catch((error) => {
                        // Handle the error
                        console.log(error);
                        this.setState({
                            articles:['Api','Timed','Out']
                        })
                    })
    
                }
                )
    
    }
    

    render() {
            console.log("Gnews is here",this.state.articles)
        const{loading} =this.state
        
        return (

            <div>

            {/* creating a jumbotron for searching stock */}
                <div className="jumbotron jumbotron-fluid bg-dark text-light">
                    <div className="container">
                        <h2 className="display-3">React Stock Market</h2>
                            <p className="lead">A simple stock market API app hello</p>
                                <div className="row">
                                    <div className="col input-group">
                                        <Input className="inputBrand" type="select" name="carbrand" id="carBrand" onChange={this.handleChange} style={{background_color:'red'}} >
                                            <option>Please select a stock</option>
                                            {StockUtils.map((data) => {
                                            return <option key={data.id}>{data.name}-{data.symbol}</option>
                                            })}
                                        </Input>
                                    </div>
                                </div>
                                <br />
                    </div>
                </div>

                
                <br />
                <div className="container" >
                    <div className="row ">
                        <div className="col-md-7 col-xs-12 col-sm-12 graph_container " >
                            {loading ?<Loading /> :<Chart x_axis={this.state.x_val} y_axis={this.state.y_val} loader={this.state.loading}  />}
                        </div>

                    <div className="col-md-5 col-sm-12 ">
                        <h2 style={{align: 'left' ,color:"white",style:'underline'}}>{this.state.initial_Name}</h2>

                                            <hr  style={{background: "grey",}} />
                                            {loading ?<Loading /> :<Cards  open={this.state.y_val} close={this.state.wholeClose} high={this.state.wholeHigh} low={this.state.wholeLow} date={this.state.presentDate} />}
                                            <hr style={{background: "grey"}}></hr>
                    </div>
                </div>

                <div className="container1">
                <br/>
                
                <div className="row mt-4x">
                    <div className="col-md-7 col-sm-12">
                        <div className="container">
                        <div className="col-md-2"></div>
                        
                            <h2 className="font-italic text-white text-uppercase" style={{fontStyle:'italic',paddingBottom:"10px"}}>Trends</h2>
                            {loading?<Loading />:<StockTable openVal={this.state.y_val} closeVal={this.state.wholeClose} highVal={this.state.wholeHigh} dateVal={this.state.x_val} lowVal={this.state.wholeLow}/>}
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                            <div className="container-fluid">
                            <h2 className="text-white text-uppercase " style={{paddingLeft:"20px",fontStyle:'italic',paddingBottom:"10px"}}>News</h2>
                        {loading ?<Loading />:<ManageNews news={this.state.articles}/>}
                        </div>
                    </div>
                    

                </div>
                            </div>
                            
                            </div>

                
                    </div>

            
);
        }
}
export default MarketTrack;
