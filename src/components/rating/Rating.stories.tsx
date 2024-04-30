import {Rating, RatingValueType} from "./Rating";
import {useCallback, useState} from "react";

export default  {
    title: "Rating",
    component: Rating,
};

export const EmptyStarts = () => {
    return (
        <Rating value={0}
                onClick={(x) => x}/>
    )
}

export const Rating1 = () => {
    return (
        <Rating value={1}
                onClick={(x) => x}/>
    )
}

export const Rating2 = () => {
    return (
        <Rating value={2}
                onClick={(x) => x}/>
    )
}

export const Rating3 = () => {
    return (
        <Rating value={3}
                onClick={(x) => x}/>
    )
}

export const Rating4 = () => {
    return (
        <Rating value={4}
                onClick={(x) => x}/>
    )
}

export const Rating5 = () => {
    return (
        <Rating value={5}
                onClick={(x) => x}/>
    )
}

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return (
       <Rating value={rating} onClick={setRating}/>
    )
}