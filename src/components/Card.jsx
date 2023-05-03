import starimg from '../img/star.png';

export default function Card(props) {
    //console.log(props);
    return (
        <>
            <div className="card w-fit text-xs shrink-0 pb-5">
                <img className="mb-2" src={require(`../img/${props.img}`)} alt="card feature" />
                <div className="flex justify-items-start items-baseline space-x-1 mb-2">
                    <img className="w-3.5 h-3.5" src={starimg} alt="" />
                    <span>{props.rating}</span>
                    <span className="text-slate-500">({props.reviewCount}) • </span>
                    <span className="text-slate-500">{props.country}</span>
                </div>
                <p className="overflow-hidden leading-3 mb-2">{props.title}</p>
                <p className="leading-3"> <span className="font-semibold">From ${props.price}</span>  / person</p>
            </div>
        </>
    )
}