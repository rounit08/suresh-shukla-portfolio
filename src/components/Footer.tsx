import React from "react";
import facebooksvg from "../../public/assets/icons/faceboook2.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 custom-container py-10 text-white p-6 flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-start ">
        {/* Left Section */}
        <div className="footer-left">
          <h4 className="text-lg font-bold mb-2">संपर्क करें</h4>
          <p>
            श्री धर्मेश्वर नाथ मंदिर, लक्ष्मी नगर कालोनी
            <br />
            वार्ड सं. 07, गोला गोकर्णनाथ (खीरी), <br />
            उत्तर प्रदेश-262802
          </p>
          <p>
            ईमेल:{" "}
            <a href="mailto:sureshkumarshuklasandesh@gmail.com">
              sureshkumarshuklasandesh@gmail.com
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4 className="text-lg font-bold mb-2">त्वरित लिंक्स</h4>
          <ul className="list-none">
            <li>
              <a
                target="_blank"
                href="http://kavitakosh.org/kk/%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A5%87%E0%A4%B6_%E0%A4%95%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%B0_%E0%A4%B6%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%B2_%27%E0%A4%B8%E0%A4%82%E0%A4%A6%E0%A5%87%E0%A4%B6%27"
                className="hover:text-gray-400"
              >
                कविता कोश
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="border-t-2 border-t-gray-600 custom-container text-center py-3 text-gray-200">
        c सुरेश कुमार शुक्ल &apos;संदेश&apos;
      </div>
    </>
  );
};

export default Footer;
