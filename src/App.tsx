import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/rating/Rating";
import {OnOff} from "./components/onoff/OnOff";

const App = () => {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [on, setOn] = useState(false)

    return (
        <div className="App">
            <OnOff on={on}
                   onClick={setOn}/>
        </div>
    );
}

export default App;
