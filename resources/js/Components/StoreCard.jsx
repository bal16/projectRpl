import { memo } from "react";
function StoreCard({store}) {
    return (
        <div className="mb-3 shadow-xl w-52 card bg-base-100">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="object-cover rounded-xl"
                />
            </figure>
            <div className="items-center text-center card-body">
                <h2 className="card-title">{store.name}</h2>
                <p>{store.description}</p>
                {/* <div className="card-actions">
                    <button className="btn btn-primary">See</button>
                </div> */}
            </div>
        </div>
    );
}

export default memo(StoreCard);
