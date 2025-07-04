import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
const AddListing = ({ onNext, onPrevious }) => {
    const [listingType, setListingType] = useState('Rent');
    const [propertyCategory, setPropertyCategory] = useState('House');
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center p-4 font-poppins">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-xl md:max-w-4xl relative border border-gray-300">
                {/* Close Button */}
                <button onClick={() => navigate("/listings")} className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700">
                    <IoClose size={24} md:size={28} />
                </button>

                {/* Progress Bar */}
                <div className="w-1/2 h-1.5 md:h-1.6 bg-gray-200 rounded-full mb-6 md:mb-10 mx-auto">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '25%' }}></div>
                </div>

                <h1 className="text-xl md:text-3xl font-bold text-center text-[#3D3D3D] mb-6 md:mb-10">
                    Hi kk, Fill details of your real estate
                </h1>

                {/* Input Field */}
                <div className="mb-6 md:mb-10 w-full max-w-sm md:max-w-md mx-auto">
                    <div className="relative w-[80%] border border-black rounded-xl flex items-center p-3 md:p-4 mx-auto">
                        <input
                            type="text"
                            placeholder="The Lodge House"
                            className="ml-2 flex-1 outline-none text-base md:text-lg font-semibold text-[#000000]"
                        />
                        <FaMapMarkerAlt className="text-gray-400 ml-2 md:ml-3" />
                    </div>
                </div>

                {/* Listing Type */}
                <div className="mb-6 md:mb-10 text-center">
                    <h2 className="text-lg md:text-xl font-semibold text-[#3D3D3D] mb-3 md:mb-4">Listing Type</h2>
                    <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
                        <button
                            className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${listingType === 'Rent'
                                ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                : 'bg-white border border-[#949494] text-[#5A5A59]'
                                }`}
                            onClick={() => setListingType('Rent')}
                        >
                            Rent
                        </button>
                        <button
                            className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${listingType === 'Sell'
                                ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                : 'bg-white border border-[#949494] text-[#5A5A59]'
                                }`}
                            onClick={() => setListingType('Sell')}
                        >
                            Sell
                        </button>
                    </div>
                </div>

                {/* Property Category */}
                <div className="mb-8 md:mb-14 text-center">
                    <h2 className="text-lg md:text-xl font-semibold text-[#3D3D3D] mb-3 md:mb-4">Property Category</h2>
                    <div className="flex flex-col items-center gap-3 md:gap-4">
                        <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
                            <button
                                className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${propertyCategory === 'House'
                                    ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                    : 'bg-white border border-[#949494] text-[#5A5A59]'
                                    }`}
                                onClick={() => setPropertyCategory('House')}
                            >
                                House
                            </button>
                            <button
                                className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${propertyCategory === 'Apartment'
                                    ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                    : 'bg-white border border-[#949494] text-[#5A5A59]'
                                    }`}
                                onClick={() => setPropertyCategory('Apartment')}
                            >
                                Apartment
                            </button>
                            <button
                                className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${propertyCategory === 'Hotel'
                                    ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                    : 'bg-white border border-[#949494] text-[#5A5A59]'
                                    }`}
                                onClick={() => setPropertyCategory('Hotel')}
                            >
                                Hotel
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
                            <button
                                className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${propertyCategory === 'Villa'
                                    ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                    : 'bg-white border border-[#949494] text-[#5A5A59]'
                                    }`}
                                onClick={() => setPropertyCategory('Villa')}
                            >
                                Villa
                            </button>
                            <button
                                className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${propertyCategory === 'Cottage'
                                    ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                    : 'bg-white border border-[#949494] text-[#5A5A59]'
                                    }`}
                                onClick={() => setPropertyCategory('Cottage')}
                            >
                                Cottage
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-center px-4 gap-3 sm:gap-4">
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-300 rounded-lg text-base font-semibold text-[#5A5A59] hover:bg-gray-100 transition-colors duration-200"
                        onClick={onPrevious}
                    >
                        Previous
                    </button>
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-[#6D1E3D] text-white rounded-lg text-base font-semibold hover:bg-[#5a1832] transition-colors duration-200"
                        onClick={onNext}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AddListing;
