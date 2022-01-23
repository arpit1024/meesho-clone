import React from "react";
import "./page.css";
import { Navbar } from "../components/header-footer'/Navbar";
import { useEffect, useState } from "react";
import { FaPercentage } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Cart/Action";
export const PageUi = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => ({
    data: state.addDataReducer.productData,
  }));

  let newData = data.data.filter((ele) => {
    if (ele._id == id) {
      return ele;
    }
  });
  newData = newData[0];

  return (
    <>
      <Navbar />
      <div className="productView">
        <div className="productViewLeft">
          <img className="productMainimg" src={newData.images} alt="product" />
          <div>
            <button
              className="AddtoCart btn  btn-lg btn-block"
              onClick={() => {
                dispatch(addToCart(newData));
              }}
            >
              <FaCartPlus className="cartIcon" />
              Add To Cart
            </button>
          </div>
        </div>

        <div className="productViewRight">
          <div className="productDiscription text-left">
            <div className="card-title">
              <h3 className="">saree</h3>
            </div>

            <div className="price">
              <div className="currentPrice text-size=">
                <FaRupeeSign />
                5000
              </div>
              <div className="actualPrice">
                <del>4000</del>
              </div>
              <div className="discount">
                <FaPercentage className="percentage" />
                20 off
              </div>
            </div>

            <div className="startingOffer">
              <p className="startingOffer">
                <FaPercentage className="percentage" />
                <FaRupeeSign />
                100 disocunt on first order
              </p>
            </div>

            <div className="freeDelivery text-center">
              <div className="badge">
                <span>Free Delivery</span>
              </div>
            </div>
          </div>

          <div className="selectSize"></div>

          <div className="productDetails"></div>
          <div className="soldBy trustedPara text-dark">
            <h2 className="soldByHeading text-left">Sold by</h2>
            <div className="viewShop">
              <div className="houseIcon  bottomPageAlign">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvqsS7ukFND5XQo069cYeQ3aKuZO5wTGRpKo6t01mih8WsJPQy" />
              </div>
              <div className="Sellers  bottomPageAlign">
                <h2 className="SellersHeading text-left">
                  V.K <br /> Creation
                </h2>
              </div>
              <div className="viewShop  bottomPageAlign">
                <button type="button" class="btn viewShopButton">
                  View Shop
                </button>
              </div>
            </div>
          </div>
          <div className="bottomPage">
            <div className="LowestPrice bottomPageAlign">
              <div>
                <img
                  className="mlogo"
                  src="https://meesho.com/_next/image?url=https%3A%2F%2Fimages.meesho.com%2Fimages%2Fmarketing%2F1631781675199.png&w=1920&q=75"
                />
              </div>
              <div>
                <p className="logoDesc">
                  Lowest
                  <br />
                  Price
                </p>
              </div>
            </div>
            <div className="dayReturns bottomPageAlign">
              <div>
                <img
                  className="mlogo"
                  src="data:image/png;base64,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"
                />
              </div>
              <div>
                <p className="logoDesc">
                  7-day
                  <br />
                  return
                </p>
              </div>
            </div>
            <div className="CashOnDelivery bottomPageAlign">
              <div>
                <img
                  className="mlogo"
                  src="https://meesho.com/_next/image?url=https%3A%2F%2Fimages.meesho.com%2Fimages%2Fmarketing%2F1631781662245.png&w=1920&q=75"
                />
              </div>

              <div>
                <p className="logoDesc">
                  Cash On
                  <br />
                  delivery
                </p>
              </div>
            </div>
          </div>
          <div className="trusted">
            <div className="trustedPara">
              <p>
                <img
                  className="mlogo"
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGfRSTEgRJ7TlrO97r0YEHe8u22HppvPzikHsZj9p4ab83he-n"
                />
                <span className="logoDescription">Trusted</span>
                Best quality products from trusted
                <br />
                suppliers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
