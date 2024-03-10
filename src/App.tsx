import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff1} from "./components/onoff/OnOff1";
import {OnOff} from "./components/onoff/OnOFF";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";

const App = () => {
    console.log("App rendered")
    return (
        <div className="App">
            {/*<UncontrolledAccordion accordionTitle="Menu" collapsed={true}/>
            <UncontrolledAccordion accordionTitle="Users" collapsed={false}/>
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
            <OnOff1 switcher={true}/>
            <OnOff1 switcher={false}/>*/}
            <OnOff />
            <OnOff />
            <UncontrolledAccordion accordionTitle="Menu"/>
            <UncontrolledAccordion accordionTitle="Users"/>
            <UncontrolledRating />
        </div>
    );
}

export default App;
