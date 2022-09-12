import React from "react";
import ReactPropTypes from "prop-types";
import Cards from "./Cards"

const Body = () => {
    return(
        <>
        <Header header = {header} />
        <Cards cards = {cards} /> 
        </>
        )
}

/* Body.header.propTypes ={

    body: PropTypes.object.isRequired
}; 
 */
export default Body