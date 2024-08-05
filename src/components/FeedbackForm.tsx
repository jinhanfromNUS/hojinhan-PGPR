import Image from 'next/image'
import React from 'react'

const FeedbackForm = () => {
    return (
        <div>
            <div className="container pt-16 pb-16">
                <div className="bg-pink-100 rounded-2xl grid place-items-center relative overflow-hidden" style={{ paddingBottom: '34%' }}>
                    <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/Testimonial__Background.jpg)', opacity: 0.5 }}></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="bg-[#ffffffab] min-w-[350px] sm:min-w-[400px] md:min-w-[600px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                            <h2 className="font-extrabold text-2xl text-[#272727]">
                                Send your anonymous feedback form
                            </h2>
                            <a href="https://forms.gle/yUUZWD2R2JH8Ctwk6" className="bg-blackish text-white p-2 rounded-md">
                                Click Here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackForm
