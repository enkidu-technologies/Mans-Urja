// Dynamically import all developer logos
const logoImports = import.meta.glob('../../assets/developers/Asset *.{png,jpg,jpeg,svg}', { eager: true });

// Sort by number in filename
const logos = Object.entries(logoImports)
  .sort((a, b) => {
    const numA = parseInt(a[0].match(/Asset\s(\d+)/)[1]);
    const numB = parseInt(b[0].match(/Asset\s(\d+)/)[1]);
    return numA - numB;
  })
  .map(([, mod]) => mod.default);

const LogoCloud = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          Our Esteemed Solar Developers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-8 justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-20 flex justify-center items-center 
                         transition-transform duration-300 ease-in-out"
            >
              <img
                src={logo}
                alt={`developer-logo-${index}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
