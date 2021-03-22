import { Button, Input } from "antd";
import { useState } from "react";
import { StyledMain } from "./StyledComponents";

const Main = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [mobNumber, setMobNumber] = useState(
    localStorage.getItem("mobileNumber") || ""
  );

  const stepUp = () => {
    setCurrentStep(currentStep + 1);
  };
  const stepDown = () => {
    setCurrentStep(currentStep - 1 >= 0 ? currentStep - 1 : 0);
  };
  const handleMobNumber = ({ target: { value } }) => {
    if (value.length > 10 || value < 0) {
      return;
    }
    setMobNumber(value);
  };

  const storeToLocalStorage = () => {
    localStorage.setItem("mobileNumber", mobNumber);
    stepUp();
  };

  return (
    <StyledMain>
      <div className="top_section_containter">
        <div className="top_section"></div>
        <h2 className="top_section_text">Congratulations</h2>
      </div>
      <div className="coupon_section">
        <div className="coupon_image">{""}</div>
      </div>
      {currentStep < 2 && (
        <p className="coupon_description">
          {" "}
          You have WON paytm gift card of Rs 200 for{" "}
          <strong> placing the order on Man Matters</strong>
        </p>
      )}
      {currentStep < 1 ? (
        <div className="input_button_container">
          <Input
            className="mob_input"
            size="large"
            type="number"
            placeholder="Enter Mobile number"
            value={mobNumber}
            onChange={handleMobNumber}
          />
          <Button
            type="primary"
            size="large"
            style={{
              background: `${mobNumber.length < 10 ? "gray" : " #51a0e3"}`,
            }}
            disabled={mobNumber.length < 10}
            className="btn"
            onClick={storeToLocalStorage}>
            {" "}
            Wow! Get my Paytm Gift Card{" >"}
          </Button>
        </div>
      ) : (
        <div className="congrats_section">
          <h2>Congratulations</h2>
        </div>
      )}
    </StyledMain>
  );
};

export default Main;
