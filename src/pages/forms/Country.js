import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import ProgressBar from '../../images/formimages/progressbar2.svg';
import { ReactSketchCanvas } from "react-sketch-canvas";
import JhbCoat from '../../images/formimages/jhb.png';
import WC from '../../images/formimages/wc.png';
import FS from '../../images/formimages/fs.png';
import kzn from "../../images/formimages/kzn.png";
import lpp from "../../images/formimages/limp.png";
import mp from "../../images/formimages/mp.png";
import nc from "../../images/formimages/nc.png";
import nw from "../../images/formimages/nw.png";
import ec from '../../images/formimages/ec.png';
import gp from '../../images/formimages/gauteng.png';
import pta from '../../images/formimages/pta.jpg';
import bloem from "../../images/formimages/bloem.jpg";
import blv from "../../images/formimages/belville.png";
import welkom from "../../images/formimages/welkom.jpg";
import pinelands from "../../images/formimages/pinelands.png";

import Select from 'react-select';

export default function Country() {
 
  
 const [state, setState] = React.useState(false);
 const [errorMessage, setErrorMessage] = React.useState("");
  const canvasStyles = {
    border: "4px solid #252762",
    borderRadius: "15px",
  };
   const handleProvinceChange = (selectedOption) => {
     const selectedProvince = selectedOption.value;
     setState(selectedProvince === "nope");
     setErrorMessage(
       selectedProvince === "nope" ? "That is a city, dummy." : ""
     );
   };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    if (selectedCountry === "Other") {
      setState(true);
    } else {
      setState(false);
    }
    console.log(setState)
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const options = [
    {
      value: "nope",
      label: <img src={JhbCoat} height="30px" width="30px" />,
    },
    {
      value: "Western Cape",
      label: <img src={WC} height="60px" width="60px" />,
    },
    {
      value: "Free State",
      label: <img src={FS} height="60px" width="60px" />,
    },
    {
      value: "Kwa-Zulu Natal",
      label: <img src={kzn} height="60px" width="60px" />,
    },
    {
      value: "Eastern Cape",
      label: <img src={ec} height="60px" width="60px" />,
    },
    {
      value: "nope",
      label: <img src={pta} height="30px" width="30px" />,
    },
    {
      value: "nope",
      label: <img src={welkom} height="30px" width="30px" />,
    },
    {
      value: "Gauteng",
      label: <img src={gp} height="60px" width="60px" />,
    },
    {
      value: "nope",
      label: <img src={blv} height="30px" width="30px" />,
    },
    {
      value: "Northern Cape",
      label: <img src={nc} height="60px" width="60px" />,
    },
    {
      value: "Limpopo",
      label: <img src={lpp} height="60px" width="60px" />,
    },
    {
      value: "nope",
      label: <img src={bloem} height="30px" width="30px" />,
    },
    {
      value: "nope",
      label: <img src={pinelands} height="30px" width="30px" />,
    },
    {
      value: "Mpumalanga",
      label: <img src={mp} height="60px" width="60px" />,
    },
    {
      value: "Nort West Province",
      label: <img src={nw} height="60px" width="60px" />,
    },
   
  ];
  return (
    <main>
      <img src={ProgressBar} alt="progressbar" className="progressBar" />

      <form className="formContainer form">
        <h1 className="p-name formTitle">Where are you from?</h1>

        <form action="" className="nameSection">
          <section className="inputCountry">
            <p className="inputTitles">Select your country *</p>
            <select
              name="country"
              id="country"
              className="inputsFull"
              onChange={handleCountryChange}
            >
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="United States">United States of America</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Other">Other</option>
            </select>
          </section>
        </form>

        <section
          className={`drawContainer ${setState ? "showDraw" : "hideDraw"}`}
        >
          <p className="inputTitles">if other, please draw your flag:</p>
          <p className="psa">
            {" "}
            * please note that because it seems that you are not from a legit
            country, some/most content will not be available in your region
          </p>

          <section className="drawContainer">
            <ReactSketchCanvas
              style={canvasStyles}
              strokeWidth={4}
              width="600px"
              height="400px"
              strokeColor="yellow"
              className="canvasDraw"
            />
          </section>
          <p className="psa">AWE!! SAFFA!!</p>
        </section>

        <section className="adressForm">
          <form>
            <p className="inputTitles">Address</p>
            <input type="number" placeholder="#" className="inputsC" />
            <input placeholder="Street Name" className="inputsB" />
            <select placeholder="road type" className="inputsD">
              <option value="Avenue"> Ave</option>
              <option value="Lane">Lane</option>
              <option value="Drive">Drive</option>
              <option value="Road">Road</option>
              <option value="Street">Street</option>
            </select>
          </form>
        </section>
        <section className="City">
          <p className="inputTitles">Province</p>
          <Select
            options={options}
            placeholder="province"
            onChange={handleProvinceChange}
          />
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          <p className="inputTitles">Please choose your phone number</p>
          <Slider min={2700000000} max={2799999999} valueLabelDisplay="auto" color='success' />
        </section>

        <section className="countryNav">
          <button className="more">more</button>
          <button onClick={goBack} className="back">
            Back
          </button>
          <p className="next">
            click{" "}
            <Link to="/Password" className="thisLink">
              THIS{" "}
            </Link>{" "}
            to <em className="proceed">proceed</em>
          </p>
        </section>
      </form>
    </main>
  );
}
