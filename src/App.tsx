import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onoff/OnOff";

const App = () => {
    console.log("App rendered")
    return (
        <div className="App">
            <Accordion accordionTitle="Menu" collapsed={true}/>
            <Accordion accordionTitle="Users" collapsed={false}/>
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
            <OnOff switcher={true}/>
            <OnOff switcher={false}/>
            <OnOff switcher={true}/>
        </div>
    );
}

export default App;
