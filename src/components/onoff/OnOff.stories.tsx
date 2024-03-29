import {Rating} from "../rating/Rating";
import {OnOff} from "./OnOff";

export default  {
    title: "OnOff stories",
    component: OnOff,
};

export const OnOffDemo = () => {
    return (
        <OnOff on={true}
               onClick={x => x}/>
    )
};