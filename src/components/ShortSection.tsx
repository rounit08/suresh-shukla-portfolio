const SloganSection = () => {
  return (
    <div className="relative text-gray-800 text-3xl text-center leading-[1.5] p-10 rounded-xl shadow-xl max-w-3xl mx-auto mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl -m-1.5"></div>
      <div className="relative bg-white p-8 rounded-xl border border-transparent">
        <p className="font-serif italic opacity-90 transition-opacity duration-500 ease-in-out hover:opacity-100">
          "अखंड राष्ट्र अक्षरे ! सुसाम गान सस्वरे ! प्रचण्ड शक्ति वर्धिनी नमामि
          हे वसुन्धरे ! <br /> विनम्र ज्योति ज्ञान की उभारती प्रसारती। नमामि
          अम्ब भारती !"
        </p>
      </div>
    </div>
  );
};

export default SloganSection;
