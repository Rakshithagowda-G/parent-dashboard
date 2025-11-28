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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "100%", fontFamily: '"Poppins", sans-serif' }}>
      <SoftBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium" color="white" sx={{ fontFamily: '"Poppins", sans-serif' }}>
          Fee Receipts
        </SoftTypography>
        <SoftButton variant="contained" color="info" size="small">
          VIEW ALL
        </SoftButton>
      </SoftBox>
      <SoftBox>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2024" id="#TUI-415646" price="$1200" />
          <Invoice date="February, 10, 2024" id="#LAB-126749" price="$250" />
          <Invoice date="April, 05, 2024" id="#BUS-103578" price="$120" />
          <Invoice date="June, 25, 2023" id="#LIB-415646" price="$50" />
          <Invoice date="March, 01, 2023" id="#TUI-803481" price="$1100" noGutter />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Invoices;
