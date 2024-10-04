import React from 'react';

const hotProducts = [
    { name: 'Canon DSLR Camera', image: 'https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg', price: '$500', reviews: '★★★★★ (120 reviews)' },
    { name: 'MacBook Pro', image: 'https://www.zdnet.com/a/img/resize/05b0f02348dde33158a9c06809dbe64c6de47432/2023/11/06/ff2ab50d-93b8-4954-96e5-7176557f03b5/dsc02399-enhanced-nr.jpg?auto=webp&fit=crop&height=1200&width=1200', price: '$1500', reviews: '★★★★☆ (89 reviews)' },
    { name: 'Leather Sofa', image: 'https://hatil-image.s3.ap-southeast-1.amazonaws.com/Nop_Image/HATIL%20Sofa%20Set%20Hyperbole-317%20(1%2B2%2B2%20Seat)2.jpg', price: '$800', reviews: '★★★★☆ (65 reviews)' },
    { name: 'Mountain Bike', image: 'https://www.wheelbase.co.uk/wp-content/uploads/2019/06/Feature-Image.jpg', price: '$350', reviews: '★★★★★ (180 reviews)' },
    { name: 'Noise Cancelling Headphones', image: 'https://i5.walmartimages.com/seo/onn-Over-Ear-Noise-Canceling-Headphones_802b1c8a-1f07-4597-9fda-46149404e9e1.71123c111f57819a9eb0749b5e3cc3e7.jpeg', price: '$200', reviews: '★★★★☆ (45 reviews)' },
];

const HotProduct = () => {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Hot Products</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                {hotProducts.map((product, index) => (
                    <div 
                        key={index}
                        className="p-4 transition-all duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-lg"
                    >
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-700 font-bold mb-2">{product.price}</p>
                        <p className="text-yellow-500">{product.reviews}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotProduct;
