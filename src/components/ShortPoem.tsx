import React from "react";
import { ReactTyped } from "react-typed";
import "./ShortPoem.css";

const ShortPoem = () => {
  return (
    <div className="relative mb-8 text-gray-800 text-2xl text-center leading-relaxed p-10 rounded-xl shadow-xl max-w-3xl mx-auto mt-16">
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl -m-1.5"></div>

      {/* Content Container */}
      <div className="relative bg-white p-8 rounded-xl border border-transparent">
        {/* Typewriter Effect for the Poem */}
        <ReactTyped
          className="font-serif italic opacity-90"
          strings={[
            `" वेदों की जननी महामही, जय सस्यश्यामला वसुन्धरा ! <br /> 
            तेरा अभिनन्दन कर प्राची हो उठती है अनुरागवती, <br /> 
            तुझको प्रणाम करती जगती हे जगती, जग की महासती ! <br /> 
            आरती निशापति करता है तारों की दीप असंख्य जला, <br /> 
            पग-नीरज की रज धोता है सागर संयम में ढला-पला। <br /> 
            चन्द्रिका स्नात तेरा अंचल प्रिय लगता सबको, सुधाकरा! "`,
          ]}
          typeSpeed={15}
          backSpeed={30}
          showCursor={true}
          loop={false}
        />
      </div>

      {/* Butterflies */}
      <div className="butterfly butterfly-1"></div>
      <div className="butterfly butterfly-2"></div>
      <div className="butterfly butterfly-3"></div>
    </div>
  );
};

export default ShortPoem;
