// Dynamically import all assets from the clients folder
const logoImports = import.meta.glob('../../assets/clients/Asset *.{png,jpg,jpeg,svg}', { eager: true });

// Sort by number in filename
const logos = Object.entries(logoImports)
  .sort((a, b) => {
    const numA = parseInt(a[0].match(/Asset\s(\d+)/)[1]);
    const numB = parseInt(b[0].match(/Asset\s(\d+)/)[1]);
    return numA - numB;
  })
  .map(([, mod]) => mod.default);

const ClientMarquee = () => {
  // Generate row pattern dynamically: alternating 5 and 4 logos per row
  const rowPattern = [];
  let remaining = logos.length;
  let toggle = true;

  while (remaining > 0) {
    const count = toggle ? 5 : 4;
    rowPattern.push(Math.min(count, remaining));
    remaining -= count;
    toggle = !toggle;
  }

  // Slice logos according to the rowPattern
  let currentIndex = 0;
  const rows = rowPattern.map((count) => {
    const row = logos.slice(currentIndex, currentIndex + count);
    currentIndex += count;
    return row;
  });

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Our Esteemed Clients
      </h2>

      <div className="space-y-8 px-4 max-w-6xl mx-auto">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-wrap justify-center gap-x-10 gap-y-8`}
          >
            {row.map((logo, j) => (
              <div
                key={j}
                className="w-32 h-20 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`logo-${i}-${j}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientMarquee;
