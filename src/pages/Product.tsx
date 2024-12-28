import React from 'react'
import { useParams } from 'react-router-dom';
function Product() {


    const { id } = useParams();

    return (
        <div>

            <img />

            <h1>{id}</h1>

        </div>
    )
}

export default Product