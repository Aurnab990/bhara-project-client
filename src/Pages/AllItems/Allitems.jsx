import React from 'react';
import Singleitem from '../SingleProduct/Singleitem';


const Allitems = ({items}) => {
    const {name,image,price,category,reviews,description} = items;
    return (
        <div className="md:col-span-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {
                items.map(item =><Singleitem item={item}>

                </Singleitem>)
            }
            
        </div>
    );
};

export default Allitems;