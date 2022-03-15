import React from "react";
import { Helmet } from "react-helmet";
import MenuItem from "../components/MenuItems/MenuItem";
import cv from "../assets/cv.png";

export default function landingpage() {
  return (
    <>
      <Helmet>
        <title>My Portfolio | Hub</title>
      </Helmet>

      <div className="landingPage-container">
        <MenuItem title="Cv" linkTo="/Cv" imgSrc={cv} />
      </div>
    </>
  );
}
