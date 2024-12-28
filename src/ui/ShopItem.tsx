import React from 'react'

function ShopItem({ height, title, img }) {

    return (

        <div style={{height: height}} className={`shop-item`}>
            <div className='absolute w-full h-full '>
                <h2 className='invisible hover:visible'>{title}</h2>
            </div>
            <img src={img} alt="artwork img" />
        </div>

    )
}

export default ShopItem;