import React from "react";
import minus from "../../../assets/minus.png";
import plus from "../../../assets/plus.png";
import { useState } from "react";

const HomeFaq = () => {
  const [showText, setShowText] = useState(false);
  const handleShowText = () => {
    setShowText((prev) => !prev);
  };

  const [showText1, setShowText1] = useState(false);
  const handleShowText1 = () => {
    setShowText1((prev) => !prev);
  };

  const [showText2, setShowText2] = useState(false);
  const handleShowText2 = () => {
    setShowText2((prev) => !prev);
  };

  const [showText3, setShowText3] = useState(false);
  const handleShowText3 = () => {
    setShowText3((prev) => !prev);
  };

  const [showText4, setShowText4] = useState(false);
  const handleShowText4 = () => {
    setShowText4((prev) => !prev);
  };

  const [showText5, setShowText5] = useState(false);
  const handleShowText5 = () => {
    setShowText5((prev) => !prev);
  };

  const [showText6, setShowText6] = useState(false);
  const handleShowText6 = () => {
    setShowText6((prev) => !prev);
  };
  return (
    <div className="mt-[80px] w-[50%] mx-auto pb-5 h-auto">
      <h3 className="text-center text-2xl font-bold">
        Frequently asked <br/>Questions
      </h3>
      <div className="bg-[#4D69FF] text-white mt-8 h-auto p-10 rounded-lg flex flex-col gap-8 mb-3">
        {/* FAQ QUESTION 1 */}
        <div className="flex items-center justify-between relative border-b">
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              Who are the key personnel at Dartcom Projects Nigeria Limited?
            </h2>
            {showText && (
              <p className="pb-5 text-[14px]">
                Dartcom Projects Nigeria Limited is a company owned and managed
                by a group of indegeneous professionals and seasoned engineers.
                The company specializes in engineering and management
                discplines, particularly in the Oil and Gas Industry, and has
                been operational since 2009.
              </p>
            )}
          </div>
          <img
            onClick={handleShowText}
            className="absolute right-0 top-2 w-3"
            src={showText ? minus : plus}
            alt=""
          />
        </div>

        {/* FAQ QUESTION 2 */}
        <div className="flex items-center justify-between relative border-b">
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              What is Dartcom Projects Nigeria Limited?
            </h2>
            {showText1 && (
              <p className="pb-5 text-[14px]">
                Dartcom Projects Nigeria Limited is a company owned and managed
                by a group of indegeneous professionals and seasoned engineers.
                The company specializes in engineering and management
                discplines, particularly in the Oil and Gas Industry, and has
                been operational since 2009.
              </p>
            )}
          </div>
          <img
            onClick={handleShowText1}
            className="absolute right-0 top-2 w-3"
            src={showText1 ? minus : plus}
            alt=""
          />
        </div>

        {/* FAQ QUESTION 3 */}
        <div className="flex items-center justify-between relative border-b">
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              What is the mission of Dartcom Project Nigeria?
            </h2>
            {showText2 && (
              <p className="pb-5 text-[14px]">
                Dartcom Projects Nigeria Limited is a company owned and managed
                by a group of indegeneous professionals and seasoned engineers.
                The company specializes in engineering and management
                discplines, particularly in the Oil and Gas Industry, and has
                been operational since 2009.
              </p>
            )}
          </div>
          <img
            onClick={handleShowText2}
            className="absolute right-0 top-2 w-3"
            src={showText2 ? minus : plus}
            alt=""
          />
        </div>

        {/* FAQ QUESTION 4 */}
        <div className="flex items-center justify-between relative border-b">
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              How does Dartcom Projects collaborate with clients?
            </h2>
            {showText3 && (
              <p className="pb-5 text-[14px]">
                Dartcom Projects Nigeria Limited is a company owned and managed
                by a group of indegeneous professionals and seasoned engineers.
                The company specializes in engineering and management
                discplines, particularly in the Oil and Gas Industry, and has
                been operational since 2009.
              </p>
            )}
          </div>
          <img
            onClick={handleShowText3}
            className="absolute right-0 top-2 w-3"
            src={showText3 ? minus : plus}
            alt=""
          />
        </div>

        {/* FAQ QUESTION 5 */}
        <div className="flex items-center justify-between relative border-b">
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              How does Dartcom Projects collaborate with clients?
            </h2>
            {showText4 && (
              <p className="pb-5 text-[14px]">
                Dartcom Projects Nigeria Limited is a company owned and managed
                by a group of indegeneous professionals and seasoned engineers.
                The company specializes in engineering and management
                discplines, particularly in the Oil and Gas Industry, and has
                been operational since 2009.
              </p>
            )}
          </div>
          <img
            onClick={handleShowText4}
            className="absolute right-0 top-2 w-3"
            src={showText4 ? minus : plus}
            alt=""
          />
        </div>

        {/* FAQ QUESTION 6 */}
        <div className="flex items-center justify-between relative border-b">
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              What is the company's founding pronciple?
            </h2>
            {showText5 && (
              <p className="pb-5 text-[14px]">
                Dartcom Projects Nigeria Limited is a company owned and managed
                by a group of indegeneous professionals and seasoned engineers.
                The company specializes in engineering and management
                discplines, particularly in the Oil and Gas Industry, and has
                been operational since 2009.
              </p>
            )}
          </div>
          <img
            onClick={handleShowText5}
            className="absolute right-0 top-2 w-3"
            src={showText5 ? minus : plus}
            alt=""
          />
        </div>

        {/* FAQ QUESTION 7 */}
        <div className="flex items-center justify-between relative border-b">
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              How can i contact Dartcom Project Nigeria Limited?
            </h2>
            {showText6 && (
              <p className="pb-5 text-[14px]">
                Dartcom Projects Nigeria Limited is a company owned and managed
                by a group of indegeneous professionals and seasoned engineers.
                The company specializes in engineering and management
                discplines, particularly in the Oil and Gas Industry, and has
                been operational since 2009.
              </p>
            )}
          </div>
          <img
            onClick={handleShowText6}
            className="absolute right-0 top-2 w-3"
            src={showText6 ? minus : plus}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
