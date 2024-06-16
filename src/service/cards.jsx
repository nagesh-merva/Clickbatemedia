import React from 'react';
import contentCreationImage from './content_creation.jpg';
import marketingImage from './marketing.jpg';
import websiteDesignImage from './website_design.jpg';

function Cards() {
    return (
        <div className='p-10 w-full space-x-8 flex flex-row'>
            <div className="bg-white h-auto w-1/3 shadow-lg rounded-lg overflow-hidden">
                <img
                    src={websiteDesignImage}
                    alt="content creation"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
                <div className="p-6">
                    <h3 className="text-4xl font-poppins font-normal mb-4">Website and Graphic Design </h3>
                    <p className="text-gray-700 text-sm font-poppins">Designing stunning websites and graphics that engage your audience is our specialty.</p>
                </div>
                <div className='w-full h-10 flex items-center bg-gray-100'>
                    <a href={""} className="pl-5 text-lg text-blue-600 hover:text-blue-900">Read more</a>
                </div>
            </div>
            <div className="bg-white h-auto w-1/3 shadow-lg rounded-lg overflow-hidden">
                <img
                    src={contentCreationImage}
                    alt="content creation"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
                <div className="p-6">
                    <h3 className="text-4xl font-poppins font-normal mb-4">Content Creation </h3>
                    <p className="text-gray-700 text-sm font-poppins">We transform raw footage into polished, engaging videos that tell your story compellingly, captivating your audience and enhancing your brand’s presence.</p>
                </div>
                <div className='w-full h-10 flex items-center bg-gray-100'>
                    <a href={""} className="pl-5 text-lg text-blue-600 hover:text-blue-900">Read more</a>
                </div>
            </div>
            <div className="bg-white h-auto w-1/3 shadow-lg rounded-lg overflow-hidden">
                <img
                    src={marketingImage}
                    alt="content creation"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
                <div className="p-6">
                    <h3 className="text-4xl font-poppins font-normal mb-4">Social Media Marketing</h3>
                    <p className="text-gray-700 text-sm font-poppins ">We elevate your social media presence and drive meaningful results for your brand.  </p>
                </div>
                <div className='w-full h-10 flex items-center bg-gray-100'>
                    <a href={""} className="pl-5 text-lg text-blue-600 hover:text-blue-900">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Cards;
