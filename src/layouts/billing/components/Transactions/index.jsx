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
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%", fontFamily: '"Poppins", sans-serif' }}>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="18px"
        sx={({ breakpoints }) => ({
          [breakpoints.down("lg")]: {
            flexDirection: "column",
          },
        })}
      >
        <SoftTypography
          variant="lg"
          fontWeight="bold"
          textTransform="capitalize"
          color="white"
          sx={({ breakpoints }) => ({
            fontFamily: '"Poppins", sans-serif',
            [breakpoints.only("sm")]: {
              mb: "6px",
            },
          })}
        >
          Payment History
        </SoftTypography>
        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="white" mr="6px" lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular" sx={{ fontFamily: '"Poppins", sans-serif' }}>
            01 - 30 March 2024
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox>
        <SoftBox mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="uppercase"
            sx={{ fontFamily: '"Poppins", sans-serif' }}
          >
            newest
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_downward"
            name="Tuition Fee"
            description="27 March 2024, at 12:30 PM"
            value="- $ 1,200"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Scholarship"
            description="27 March 2024, at 04:30 AM"
            value="+ $ 500"
          />
        </SoftBox>
        <SoftBox mt={1} mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="uppercase"
            sx={{ fontFamily: '"Poppins", sans-serif' }}
          >
            yesterday
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Bus Fee Refund"
            description="26 March 2024, at 13:45 PM"
            value="+ $ 50"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Lab Deposit Return"
            description="26 March 2024, at 12:30 PM"
            value="+ $ 100"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Library Deposit"
            description="26 March 2024, at 08:30 AM"
            value="+ $ 50"
          />
          <Transaction
            color="text"
            icon="priority_high"
            name="Exam Fee"
            description="26 March 2024, at 05:00 AM"
            value="Pending"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Transactions;
