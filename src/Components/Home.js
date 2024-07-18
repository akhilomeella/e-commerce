import React from "react";
import minus from "../images/icon-minus.svg";
import add from "../images/icon-plus.svg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./assets/customStyles.css";
import { useState } from "react";

const Home = ({ addItemToCart }) => {
  const [value, setValue] = useState(0);

  const images = [
    {
      original: img1,
      thumbnail: thumb1,
    },
    {
      original: img2,
      thumbnail: thumb2,
    },
    {
      original: img3,
      thumbnail: thumb3,
    },
    {
      original: img4,
      thumbnail: thumb4,
    },
  ];

  const addition = () => {
    setValue(value + 1);
  };

  const subtract = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <div className="text-black py-12">
        <hr />
        <div className="flex pt-24 pl-48 gap-x-32">
          <div className="size-4/12 rounded-2xl">
            <div>
              <ImageGallery items={images} />
            </div>
          </div>
          <div className="flex flex-col justify-start tracking-wider pt-16 gap-y-8">
            <h1 className="uppercase text-[#f67d1c] text-sm">
              Sneaker Company
            </h1>
            <p className="text-5xl font-bold">
              Fall Limited Edition <br />
              Sneakers
            </p>
            <p className="text-[#666970]">
              These low-profile sneakers are your perfect casual wear <br />{" "}
              companion. Featuring a durable rubber outer sole, they'll <br />{" "}
              withstand everything the weather can offer.
            </p>

            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-2 ">
                <p className="text-2xl font-bold">$125.00</p>
                <div className="flex items-center bg-[#f8e3d2] text-[#f67d1c] rounded">
                  <p className="px-2 font-bold ">50%</p>
                </div>
              </div>
              <p className="line-through text-[#666970] font-bold">$250.00</p>
            </div>

            <div className="flex gap-x-4">
              <div className="flex bg-[#f7f8fd] justify-between gap-x-12 p-4 rounded-lg">
                <button onClick={subtract}>
                  <img src={minus} alt="" />
                </button>

                <h1>{value}</h1>
                <button onClick={addition}>
                  <img src={add} alt="" />
                </button>
              </div>

              <button
                onClick={() => addItemToCart("Item 1")}
                className="flex items-center bg-[#f67d1c] px-20 text-white gap-x-2 rounded-lg"
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#fff"
                    fill-rule="nonzero"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
