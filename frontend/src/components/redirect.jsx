import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({route, children, beforeRedirect}) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        if (beforeRedirect) {
            beforeRedirect();
        }
        navigate(route);
    }

    return(
        <div onClick={handleRedirect}>
            {Children.map(children, (child) => (
                child
            ))}
        </div>
    )
}

export default Redirect;