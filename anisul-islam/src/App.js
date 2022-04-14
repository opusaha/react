import React from "react";
import Card from "./componemts/card";
import Data from './data.json'

function App() {
    // let items =[];
    // for (let i = 0; i < Data.length; i++) {
    //     items.push(<Card titleText ={Data[i].name} descriptionText ={Data[i].id}/>)
    // }

    return <div>
        <h1 className="hello"> welcome to react</h1>
        {/* {items} */}
        {Data.map((items, index)=> <Card key={index} titleText ={items.name} descriptionText ={items.id}/>)}
    </div>
}
export default App;



// for loop ere jonow comments kora ongshow. bakita map function bebohar kore kora hoiche. 2 tar kaj same.
