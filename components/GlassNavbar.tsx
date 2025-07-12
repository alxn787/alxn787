

const GlassNavbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl px-6 py-3 flex justify-between items-center">
      <div className="text-white text-lg font-semibold">🍎 Apple Glass</div>
      <ul className="flex space-x-6 text-white text-sm font-medium">
        <li className="hover:text-gray-300 cursor-pointer transition">Home</li>
        <li className="hover:text-gray-300 cursor-pointer transition">Features</li>
        <li className="hover:text-gray-300 cursor-pointer transition">Pricing</li>
        <li className="hover:text-gray-300 cursor-pointer transition">Contact</li>
      </ul>
    </nav>
  );
};

export default GlassNavbar;
