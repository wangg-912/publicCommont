import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin";
import {Link, hasHistory} from "react-router";
import SearchInput from "../SearchInput"

import "./style.less"

class HomeHeader extends Component{
    constructor(porps,context){
        super(porps,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
          <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.porps.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/Login">
                        <i className=""icon-user></i>
                    </Link>
                </div> 
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>&nbsp;
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
          </div> 
        )
    }
    componnetDidMount(){

    }
    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader;