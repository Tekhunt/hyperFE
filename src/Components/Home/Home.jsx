import React from "react";
import { HomeWrapper } from "./HomeStyles";

export const Home = () => {
    const authUser = JSON.parse(localStorage.getItem('user') || '{}')
    console.log(authUser)
  return (
    <HomeWrapper>
      <div className="grid-two">
        <div className="col-1">
          <h2>Special offers for first time customers</h2>
          <h1>
            Get <br />
            <span className="amazing">Amazing</span> <br /> Deals Here!{" "}
            <span>
              <i className="fa-solid fa-arrow-trend-up"></i>
            </span>
          </h1>
          <p>
          Get AgensSQL now for stable operation and management services at a reduced
maintenance cost
            <br /> Contact us
          </p>
          <div className="btns">
            <a href="#" className="btn-1">
              Get started
            </a>
            <a href="#" className="btn-2">
              Discover
            </a>
          </div>
        </div>

        <div className="col-2">
          {/* <img src="https://i.postimg.cc/nVv10FZP/st.jpg" alt="" /> */}
          <img src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
      </div>
    </HomeWrapper>
  );
};
