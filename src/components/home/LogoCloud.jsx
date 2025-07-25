import logo1 from '../../assets/developers/1.png';
import logo2 from '../../assets/developers/2.png';
import logo3 from '../../assets/developers/3.png';
import logo4 from '../../assets/developers/4.png';
import logo5 from '../../assets/developers/5.png';
import logo6 from '../../assets/developers/6.png';
import logo7 from '../../assets/developers/7.png';
import logo8 from '../../assets/developers/8.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const LogoCloud = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-10">
                    Our Esteemed Solar Developers
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-6 justify-items-center items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center p-2 sm:p-3 transition-transform duration-300 ease-in-out hover:scale-110"
                        >
                            <img
                                src={logo}
                                alt={`client-logo-${index}`}
                                className="h-12 md:h-16 w-auto object-contain max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default LogoCloud;
