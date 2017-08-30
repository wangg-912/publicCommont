import React,{Component} from "react";
import ReactDOM from "react-dom";

import './static/commo.less';

export default class App extends Component{
    clickBtn(e){
        alert("123");
    }
    render(){
        const list = ["苹果","香蕉","石榴"];
        return(
            <div>
                <h1 className='test1' onClick= {this.clickBtn.bind(this)}>Hello World！</h1>
                <h2 style={{color:'grey'}}>I am Coming...</h2>
                <hr/>
                <strong>水果列表：</strong>
                <ul>
                    {list.map((item,idx)=>{
                        return <li key={idx}>我是水果成员，我是{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));
