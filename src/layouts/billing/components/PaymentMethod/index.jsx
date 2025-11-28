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

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAlert from "components/SoftAlert";

function PaymentMethod() {
  return (
    <Card id="delete-account" sx={{ height: "100%", fontFamily: '"Poppins", sans-serif' }}>
      <SoftAlert color="error">
        <SoftBox display="flex" flexDirection="column">
          <SoftBox display="flex" alignItems="center" mb={1}>
            <Icon sx={{ color: "white", mr: 1 }}>error</Icon>
            <SoftTypography variant="h6" color="white" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif' }}>
              Pending Payment
            </SoftTypography>
          </SoftBox>
          <SoftTypography variant="button" color="white" fontWeight="regular" sx={{ fontFamily: '"Poppins", sans-serif' }}>
            You have ₹5,000 pending. Please make the payment by January 31, 2024 to avoid late fees.
          </SoftTypography>
        </SoftBox>
      </SoftAlert>
    </Card>
  );
}

export default PaymentMethod;
