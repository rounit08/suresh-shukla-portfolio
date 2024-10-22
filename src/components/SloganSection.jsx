const SloganSection = () => {
  return (
    <div className="relative text-gray-800 text-xl md:text-3xl text-center leading-[1.5] md:p-10 rounded-xl shadow-xl max-w-3xl mx-auto mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl -m-1.5"></div>
      <div className="relative bg-white p-8 rounded-xl border border-transparent">
        <p className="font-serif italic opacity-90 transition-opacity duration-500 ease-in-out hover:opacity-100">
          &apos; गन्धित आम्र निकुंज में शोभित कोकिला-सी मृदु बोलती हिन्दी। <br />{" "}
          अद्रि से आती पयस्विनी-सी मरुभूमि का पौरुष तोलती हिन्दी। &apos;
        </p>
      </div>
    </div>
  );
};

export default SloganSection;
