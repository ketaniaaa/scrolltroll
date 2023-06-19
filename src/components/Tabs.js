import { Component } from "react";
import React from "react";
import { HashLink } from "react-router-hash-link";

export default class Tabs extends Component{
     constructor(props) {
    super(props);
    this.state = {
    activeTab: 0,
    };
  }

  handleTabClick = (index) => {
  this.setState({ activeTab: index });
  };

    
    render(){
         const { activeTab } = this.state;
        return(
            <>
             <ul className="tabList navigation">
                <li className="blogLi"><button onClick={() => this.handleTabClick(0)}><HashLink to ="#blogActive"> Blog</HashLink></button></li>
                <li className="blogLi"><button onClick={() => this.handleTabClick(1)}><HashLink to ="#refActive"> References</HashLink></button></li>
             </ul>
            </>
        )
    }
}