import Image from 'next/image';
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}

// Rating indicator (but only works with integers) using Icons
const generateRating = (rating: number) => {
    switch (rating) {
        case 5:
            return (
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
            );
        case 4:
            return (
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
            );
        case 3:
            return (
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            );
        case 2:
            return (
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            );
        case 1:
            return (
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            );
        default:
            return null;
    }
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, rating, price }) => {
    return (
        <div>
            <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
                <br />
                <Image className="w-full h-auto" src={img} width={200} height={300} alt={title} />
                <br />
                {/* <div className="p-4">
                    <Image className="w-full h-auto" src={img} width={200} height={300} alt={title} />
                </div> */}
                <hr />

                <div className="space-y-2 py-2">
                    <h2 className="text-accent font-medium uppercase">{title}</h2>
                    <p className="text-gray-500 max-w-[150px]">{desc}</p>
                    <div>{generateRating(rating)}</div>
                    <div className="font-bold flex gap-4">
                        ${price}.00
                        <del className="text-gray-500 font-normal">
                            {/* $100.00 */}
                            {/* ${parseInt(price) + 50}.00 */}
                            {/* ${parseInt(price) * 1.8}.00 */}
                            ${parseInt(price) / 0.5}.00
                        </del>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard