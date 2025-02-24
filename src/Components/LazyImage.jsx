import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout/Layout";

// Dummy Image Data (Replace with API data if needed)
const imageData = Array.from({ length: 500 }, (_, index) => ({
    id: index + 1,
    url: `https://picsum.photos/id/${index + 1}/400/300`,
}));

const LazyImage = () => {
    const [visibleImages, setVisibleImages] = useState(10); // Number of images initially loaded
    const [images, setImages] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize the gallery with the image data
        setImages(imageData);
    }, []);

    // Load more images as the user scrolls
    const loadMoreImages = () => {
        setVisibleImages((prev) => Math.min(prev + 10, images.length));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreImages();
                }
            },
            { rootMargin: "200px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [images]);

    return (
        <>
        <Layout>
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Lazy Loading Image Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.slice(0, visibleImages).map((image) => (
                    <div key={image.id} className="relative">
                        <img
                            src={image.url}
                            alt={`Image ${image.id}`}
                            loading="lazy"
                            className="w-full h-60 object-cover rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>

            {/* Loading Indicator */}
            {visibleImages < images.length && (
                <div
                    ref={containerRef}
                    className="flex justify-center items-center mt-6"
                >
                    <p className="text-gray-600 text-sm">Loading more images...</p>
                </div>
            )}
        </div>
        </Layout>
        </>
    );
};

export default LazyImage;



// 5. 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮𝗻 𝗜𝗺𝗮𝗴𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝘄𝗶𝘁𝗵 𝗟𝗮𝘇𝘆 𝗟𝗼𝗮𝗱𝗶𝗻𝗴:
// Build an image gallery that loads images as the user scrolls down the page (lazy loading). 
// Optimize the app for performance, ensuring smooth scrolling and fast loading times.