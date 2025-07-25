import { useState, useEffect } from "react";
import vid1 from "../../assets/vids/video1.mp4";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-20 scale-105 transition-transform duration-1000"
            >
                <source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Multi-layer Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/100 via-transparent to-black/60 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent -z-10" />

            {/* Animated particles effect */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-ping animation-delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400/20 rounded-full animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-green-300/40 rounded-full animate-ping animation-delay-3000"></div>
                <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-green-300/25 rounded-full animate-pulse animation-delay-500"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen sm:py-2 md:py-10 lg:py-20 text-white px-4 sm:px-6 md:px-8 lg:px-16">
                <div className="max-w-7xl w-full">
                    {/* Main heading with staggered animation */}
                    <div
                        className={`transform transition-all duration-1500 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                            }`}
                    >
                        <h1 className="mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6 sm:mb-8 leading-tight text-center md:text-left">
                            <span className="inline-block bg-gradient-to-r from-green-400 via-green-400 to-green-500 bg-clip-text text-transparent animate-gradient">
                                Mans Urja
                            </span>
                            <br />
                            <span className="text-white/95 font-light tracking-wide">
                                Private Limited
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle with delayed animation */}
                    <div
                        className={`transform transition-all duration-1500 delay-300 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="mb-8 md:mb-12">
                            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-400 mb-6 mx-auto md:mx-0"></div>
                            <p className="text-xl sm:text-2xl md:text-3xl font-light text-center md:text-left text-white text-shadow-lg mb-4 leading-relaxed">
                                Powering Tomorrow with Solar Innovation
                            </p>
                        </div>
                    </div>

                    {/* Description with more delayed animation */}
                    <div
                        className={`transform transition-all duration-1500 delay-500 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                            }`}
                    >
                        <p className="text-base sm:text-lg md:text-xl text-center md:text-left mb-8 md:mb-12 leading-relaxed max-w-4xl text-white text-shadow-lg">
                            At Mans, we have helped organizations obtain significant monetary
                            benefits through our expert advice and consultancy services. We
                            specialize in executing open access transactions in Uttar Pradesh,
                            providing comprehensive end-to-end services for our valued
                            customers.
                        </p>
                    </div>

                    {/* CTA buttons with final delayed animation */}
                    <div
                        className={`transform transition-all duration-1500 delay-700 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                            } text-center md:text-left`}
                    >
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
                            <a href="/about" className="btn">
                                <span className="relative z-10">About Us</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-10"></div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
                <div className="flex flex-col items-center">
                    <span className="text-sm mb-2">Scroll Down</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Hero;
