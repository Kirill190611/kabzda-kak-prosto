import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled Rating",
    component: UncontrolledRating,
}

const onchange = action("onClick")

export const UncontrolledRatingDemo = () => {
    return (
        <UncontrolledRating onChange={onchange}/>
    )
}

export const EmptyStars = () => {
    return (
        <UncontrolledRating defaultValue={0}
                            onChange={onchange}/>
    )
}

export const Star1 = () => {
    return (
        <UncontrolledRating defaultValue={1}
                            onChange={onchange}/>
    )
}

export const Star2 = () => {
    return (
        <UncontrolledRating defaultValue={2}
                            onChange={onchange}/>
    )
}

export const Star3 = () => {
    return (
        <UncontrolledRating defaultValue={3}
                            onChange={onchange}/>
    )
}

export const Star4 = () => {
    return (
        <UncontrolledRating defaultValue={4}
                            onChange={onchange}/>
    )
}

export const Star5 = () => {
    return (
        <UncontrolledRating defaultValue={5}
                            onChange={onchange}/>
    )
}