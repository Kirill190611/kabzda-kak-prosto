import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {UncontrolledOnOff} from "./components/uncontrolledonoff/UncontrolledOnOff";
import {OnOff} from "./components/onoff/OnOff";

const App = () => {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [on, setOn] = useState(false)

    return (
        <div className="App">
            {/*<UncontrolledAccordion accordionTitle="Menu"
                                   collapsed={true}/>
            <UncontrolledAccordion accordionTitle="Users"
                                   collapsed={false}/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledAccordion accordionTitle="Menu"/>
            <UncontrolledAccordion accordionTitle="Users"/>
            <UncontrolledRating/>
            <Accordion accordionTitle="menu1"
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>*/}
            <OnOff on={on}
                   onClick={setOn}/>
        </div>
    );
}

export default App;
