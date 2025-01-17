"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export const Carousel = ({ 
    items = [
        {
            src: 'https://img.freepik.com/free-photo/beautiful-shot-sunny-meadow-covered-by-green-grass-with-trees-mountain-background_181624-2835.jpg',
            alt: 'Sunny Meadow',
            link: '/sunny-meadow'
        },
        {
            src: 'https://img.freepik.com/free-photo/beautiful-shot-northern-lights-sky-during-nighttime_181624-10745.jpg',
            alt: 'Northern Lights',
            link: '/northern-lights'
        },
        {
            src: 'https://img.freepik.com/free-photo/tropical-beach-sea-with-umbrella-chairs-blue-sky_74190-7432.jpg',
            alt: 'Tropical Beach',
            link: '/tropical-beach'
        },
        {
            src: 'https://img.freepik.com/free-photo/beautiful-shot-rocky-mountain-surrounded-by-sea_181624-2603.jpg',
            alt: 'Rocky Mountain by Sea',
            link: '/rocky-mountain'
        }
    ]
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);
    }, [items.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div id="default-carousel" className="relative h-95 w-4/4 m-1 lg:w-3/4 m-3 sm:m-4 md:m-6 lg:m-8 p-0.5   bg-gray-900 rounded-lg" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${
                            index === currentIndex ? 'block' : 'hidden'
                        } duration-700 ease-in-out`}
                        data-carousel-item
                    >
                        <Link href={item.link}>
                            <img
                                src={item.src}
                                className="absolute object-cover	 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer"
                                alt={item.alt || 'Carousel Image'}
                            />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="absolute z-9 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {items.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        aria-current={index === currentIndex ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToPrevious}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 right-0 z-9 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};
