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
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import linearGradient from "assets/theme/functions/linearGradient";
import colors from "assets/theme/base/colors";

function Bill({ name, company, email, vat, noGutter }) {
  const { gradients } = colors;
  const billGradient = gradients.bill || { main: "#1a1d2e", state: "#293245", deg: 195 };

  return (
    <SoftBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ background: linearGradient(billGradient.main, billGradient.state, billGradient.deg), fontFamily: '"Poppins", sans-serif' }}
      borderRadius="lg"
      p="24px"
      mb={noGutter ? "0px" : "24px"}
      mt="20px"
    >
      <SoftBox width="100%" display="flex" flexDirection="column">
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb="5px"
        >
          <SoftTypography
            variant="button"
            color="white"
            fontWeight="medium"
            textTransform="capitalize"
            sx={{ fontFamily: '"Poppins", sans-serif' }}
          >
            {name}
          </SoftTypography>

          <SoftBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
            sx={({ breakpoints }) => ({
              [breakpoints.only("sm")]: {
                flexDirection: "column",
              },
            })}
          >
            <SoftBox mr={1}>
              <SoftButton variant="text" color="error">
                <Icon sx={{ mr: "4px" }}>delete</Icon>&nbsp;DELETE
              </SoftButton>
            </SoftBox>
            <SoftButton variant="text" color="text">
              <Icon sx={{ mr: "4px" }}>edit</Icon>&nbsp;EDIT
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="caption" color="text" sx={{ fontFamily: '"Poppins", sans-serif' }}>
            Company Name:&nbsp;&nbsp;&nbsp;
            <SoftTypography
              variant="caption"
              color="text"
              fontWeight="regular"
              textTransform="capitalize"
              sx={{ fontFamily: '"Poppins", sans-serif' }}
            >
              {company}
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="caption" color="text" sx={{ fontFamily: '"Poppins", sans-serif' }}>
            Email Address:&nbsp;&nbsp;&nbsp;
            <SoftTypography variant="caption" fontWeight="regular" color="text" sx={{ fontFamily: '"Poppins", sans-serif' }}>
              {email}
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <SoftTypography variant="caption" color="text" sx={{ fontFamily: '"Poppins", sans-serif' }}>
          VAT Number:&nbsp;&nbsp;&nbsp;
          <SoftTypography variant="caption" fontWeight="regular" color="text" sx={{ fontFamily: '"Poppins", sans-serif' }}>
            {vat}
          </SoftTypography>
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
