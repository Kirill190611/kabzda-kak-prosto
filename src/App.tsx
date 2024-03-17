import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";

const App = () => {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)

    return (
        <div className="App">
            {/*<UncontrolledAccordion accordionTitle="Menu"
                                   collapsed={true}/>
            <UncontrolledAccordion accordionTitle="Users"
                                   collapsed={false}/>
            <OnOff1 switcher={true}/>
            <OnOff1 switcher={false}/>*/}
            {/*<OnOff />
            <OnOff />*/}
            <UncontrolledAccordion accordionTitle="Menu"/>
            <UncontrolledAccordion accordionTitle="Users"/>
            <UncontrolledRating/>
            <Accordion accordionTitle="menu1"
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
        </div>
    );
}

export default App;
