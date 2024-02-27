import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {AppTitle} from "./components/AppTitle";

const App = () => {
    console.log("App rendered")
    return (
        <div className="App">
            <AppTitle />
            <Accordion accordionTitle="Menu" collapsed={true}/>
            <Accordion accordionTitle="Users" collapsed={false}/>
            <>Статья 1</>
            <Rating value={2}/>
            <>Статья 2</>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={6}/>
        </div>
    );
}

export default App;
