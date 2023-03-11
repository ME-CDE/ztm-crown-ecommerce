import styled from "styled-components";
import { BaseButton,GoogleSigninButton,InvertedButton } from "../button/button.styles";

export const ProductImage  = styled.img`
width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
`
export const ProductCardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

&:hover {
  ${ProductImage} {
    opacity: 0.8;
  }

  ${BaseButton},${GoogleSigninButton},${InvertedButton} {
    opacity: 0.85;
    display: flex;
  }
}

${BaseButton},${GoogleSigninButton},${InvertedButton}{
  width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
}
`
export const ProductCardFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    column-gap:10px;
    font-size: 18px;
    margin-bottom: 15px;
`
