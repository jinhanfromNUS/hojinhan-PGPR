import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
    {
        img: "/banner-1.jpg",
        title: "Trending Item",
        desc: "WOMEN'SLATEST FASHION SALE",
        rating: 5,
        price: "20",
    },
    {
        img: "/banner-2.jpg",
        title: "Trending Accessories",
        desc: "MODERN SUNGLASSES",
        rating: 4,
        price: "15",
    },
    {
        img: "/banner-3.jpg",
        title: "Sales Offer",
        desc: "NEW FASHION SUMMER SALE",
        rating: 5,
        price: "30",
    },
]

const NewProducts = () => {
    return (
        <div>
            <div className="container pt-16">
                <h2 className="font-medium text-2xl pb-4">New Products</h2>
                <div className="grid gird-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productsData.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewProducts