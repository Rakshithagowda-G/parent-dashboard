/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
// @mui material components
import Card from "@mui/material/Card";
import billingCard from "assets/images/billing-background-card.png";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import { RiMastercardFill } from "react-icons/ri";

function MasterCard({ number, valid, cvv }) {
  const numbers = [...`${number}`];

  if (numbers.length < 16 || numbers.length > 16) {
    throw new Error(
      "Invalid value for the prop number, the value for the number prop shouldn't be greater than or less than 16 digits"
    );
  }

  const num1 = numbers.slice(0, 4).join("");
  const num2 = numbers.slice(4, 8).join("");
  const num3 = numbers.slice(8, 12).join("");
  const num4 = numbers.slice(12, 16).join("");

  return (
    <Card sx={{ background: `url('${billingCard}')`, backdropfilter: "blur(31px)", fontFamily: '"Poppins", sans-serif' }}>
      <SoftBox p={2} pt={0}>
        <SoftBox
          color="white"
          lineHeight={0}
          display="flex"
          justifyContent="space-beetween"
          alignItems="center"
          width="100%"
          sx={{ width: "100%" }}
        >
          <SoftTypography color="white" variant="lg" fontWeight="bold" mr="auto" sx={{ fontFamily: '"Poppins", sans-serif' }}>
            EduLearn
          </SoftTypography>
          <RiMastercardFill size="48px" color="white" />
        </SoftBox>
        <SoftTypography
          variant="h4"
          color="white"
          mt="auto"
          fontWeight="medium"
          sx={({ breakpoints }) => ({ 
            mt: 8,
            pb: 1,
            fontFamily: '"Poppins", sans-serif',
            [breakpoints.only("sm")]: {
              fontSize: "22px",
            },
          })}
        >
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </SoftTypography>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          <SoftBox display="flex" alignItems="center">
            <SoftBox mr={3} lineHeight={1}>
              <SoftTypography variant="xxs" color="white" fontWeight="medium" opacity={0.8} sx={{ fontFamily: '"Poppins", sans-serif' }}>
                VALID THRU
              </SoftTypography>
              <SoftTypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
                sx={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {valid}
              </SoftTypography>
            </SoftBox>
            <SoftBox lineHeight={1}>
              <SoftTypography variant="xxs" color="white" fontWeight="medium" opacity={0.8} sx={{ fontFamily: '"Poppins", sans-serif' }}>
                CVV
              </SoftTypography>
              <SoftTypography variant="h6" color="white" fontWeight="medium" sx={{ fontFamily: '"Poppins", sans-serif' }}>
                {cvv}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "text",
  ]),
};

export default MasterCard;
