import React from 'react';
import Singleitem from '../SingleProduct/Singleitem';


const Allitems = ({items}) => {
    const {name,image,price,category,reviews,description} = items;
    console.log(items);
    return (
        <div className="mt-8">
            <h1 className="text-2xl font-semibold text-center mb-6 font-poppins">Products for You</h1>
            <div className="md:col-span-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            
            {
                items.map(item =><Singleitem item={item}>

                </Singleitem>)
            }
            
        </div>
        </div>
    );
};

export default Allitems;