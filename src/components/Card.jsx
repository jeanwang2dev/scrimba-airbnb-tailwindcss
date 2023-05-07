import React from "react";
import starimg from '../img/star.png';

export default function Card(props) {
    let badgeText;
    if (props.node.cardMeta.openspots === 0 || props.node.cardMeta.openspots === null) {
        badgeText = "SOLD OUT"
    } else if (props.node.cardMeta.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <>
            <div className="card relative w-fit text-xs shrink-0 pb-5">
                { badgeText && <div className="absolute top-1.5 left-1.5 rounded-sm bg-white text-black p-1.5 font-semibold">{badgeText}</div>}
                <img className="mb-2" src={props.node.cardMeta.coverimg.sourceUrl} alt="card feature" />
                <div className="flex justify-items-start items-baseline space-x-1 mb-2">
                    <img className="w-3.5 h-3.5" src={starimg} alt="" />
                    <span>{props.node.cardMeta.stats.rating}</span>
                    <span className="text-slate-500">({props.node.cardMeta.stats.reviewcount}) • </span>
                    <span className="text-slate-500">{props.node.cardMeta.location}</span>
                </div>
                <p className="overflow-hidden leading-3 mb-2">{props.node.cardMeta.title}</p>
                <p className="leading-3"> <span className="font-semibold">From ${props.node.cardMeta.price}</span>  / person</p>
            </div>
        </>
    )
}