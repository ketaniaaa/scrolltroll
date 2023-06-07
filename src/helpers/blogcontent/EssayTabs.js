import React from "react";
import { useState } from "react";
import '../../styles/blogTab.css';


function EssayTabs (){

const [toggleState, setToggleState] = useState(1);

const toggleTab = (index) =>{
    setToggleState(index);
};

    return (

        <main className="blogContainer">

        <div className="navigation tabList">
            <button  className={toggleState === 1 ? "tab activeTab button" : "tab"}
          onClick={() => toggleTab(1)}> Blog</button>
          <button className={toggleState === 2 ? "tab active-tabs button" : "tab"}
          onClick={() => toggleTab(2)}> References</button>
        </div>

<article className="contentTabs e-content">
    <section className={toggleState === 1 ? "content  activeContent" : "content"}>
    <h1> Blog</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae exercitationem in facere harum suscipit velit doloribus. Voluptatum blanditiis, officia magnam dolor necessitatibus officiis illum, natus odit sint velit quidem?</p>
    </section>


     <section className={toggleState === 2 ? "content  activeContent" : "content"}
>
    <h1>References</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae exercitationem in facere harum suscipit velit doloribus. Voluptatum blanditiis, officia magnam dolor necessitatibus officiis illum, natus odit sint velit quidem?</p>
    </section>
</article>
</main>
    );
}
export default EssayTabs;