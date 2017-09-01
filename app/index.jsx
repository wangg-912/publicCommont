import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import {hasHistory} from "react-router";
import './static/commo.less';


import RouterMap from "./router/routerMap";


ReactDOM.render(<routerMap history={hasHistory}/>,document.querySelector("#root"));
