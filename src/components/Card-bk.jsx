import React from "react";
import starimg from '../img/star.png';

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    //console.log(props);
    return (
        <>
            <div className="card relative w-fit text-xs shrink-0 pb-5">
                { badgeText && <div className="absolute top-1.5 left-1.5 rounded-sm bg-white text-black p-1.5 font-semibold">{badgeText}</div>}
                <img className="mb-2" src={require(`../img/${props.coverImg}`)} alt="card feature" />
                <div className="flex justify-items-start items-baseline space-x-1 mb-2">
                    <img className="w-3.5 h-3.5" src={starimg} alt="" />
                    <span>{props.stats.rating}</span>
                    <span className="text-slate-500">({props.stats.reviewCount}) • </span>
                    <span className="text-slate-500">{props.country}</span>
                </div>
                <p className="overflow-hidden leading-3 mb-2">{props.title}</p>
                <p className="leading-3"> <span className="font-semibold">From ${props.price}</span>  / person</p>
            </div>
        </>
    )
}