import React from "react";

import Redirect from "./redirect";

const Card = ({ title, description, image, route, buttonText }) => {

    return (
        <div className="border bg-white flex flex-col items-start gap-3 shadow-xl mx-5 my-5 flex-grow rounded-lg pb-3 min-h-fit">
            <img
                src={image}
                alt={title}
                className="border rounded-lg w-full h-auto max-h-40 p-1"
            />
            <div className="flex flex-col flex-grow px-3 justify-between">
                <div>
                <h2 className="text-2xl font-bold text-purple-primary">
                    {title}
                </h2>
                <p className="text-purple-tertiary">
                    {description}
                </p>
                </div>
                <Redirect route={route}>
                    <button
                        className="w-auto px-5 py-2 bg-custom-black hover:text-custom-black hover:bg-light-purple text-white rounded mt-5">
                        {buttonText}
                    </button>
                </Redirect>
            </div>
        </div>
    );
};

export default Card;