import styled from "styled-components";

export const StyledMain = styled.section`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  .top_section_containter {
    background: #ced7e2;
    padding: 2rem 0 10rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .top_section {
    min-width: 25%;
    height: 10rem;
    background: url("https://manmatters.com/wp-content/uploads/2019/12/manmat.png"),
      #ced7e2;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .top_section_text {
    background: linear-gradient(
      130deg,
      #ff7a18,
      #af002d 41.07%,
      #319197 76.05%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .coupon_section {
    width: 100%;
    position: relative;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .coupon_image {
    position: absolute;
    top: -8rem;
    background: url("https://i.pinimg.com/736x/97/14/19/971419efad17993109dd345625c68104.jpg");
    min-width: 400px;
    max-width: 25%;
    height: 15rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .coupon_description {
    font-size: 1.5rem;
    padding: 1rem;

    margin: 0 auto;
    min-width: 300px;
    max-width: 25%;
  }
  .input_button_container {
    margin: 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    .mob_input {
      text-align: center;
      padding: 1rem;
      min-width: 400px;
      max-width: 25%;
      height: 3rem;
      border-radius: 30px;
      outline: none;
      border: none;
      border: 1px solid gray;
      font-size: 20px;
      font-weight: 700;
    }

    .btn {
      margin: 3rem;
      padding: 1rem;
      min-width: 400px;
      max-width: 25%;
      height: 3rem;
      background: #51a0e3;
      color: white;
      font-size: 20px;
      font-weight: 700;
      outline: none;
      border: none;
      line-height: 0rem;
      border-radius: 30px;
    }
  }
  .congrats_section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 40px;
    h2 {
      background: linear-gradient(
        130deg,
        #ff7a18,
        #af002d 41.07%,
        #319197 76.05%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
