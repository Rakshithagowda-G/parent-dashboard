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

import React from "react";

// @mui components
import { Card, Stack } from "@mui/material";

// Soft UI Dashboard assets
import balance from "assets/images/billing-background-balance.png";
import Graph from "assets/images/shapes/graph-billing.svg";

import palette from "assets/theme/base/colors";

// Soft UI Dashboard components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// React icons
import { FaEllipsisH } from "react-icons/fa";
import { MdOutlineDomain } from "react-icons/md";

const CreditBalance = () => {
  return (
    <Card sx={{ padding: "30px", fontFamily: '"Poppins", sans-serif' }}>
      <SoftBox display="flex" flexDirection="column">
        <SoftBox
          mb="32px"
          p="20px"
          display="flex"
          flexDirection="column"
          sx={{ backgroundImage: `url(${balance})`, backgroundSize: "cover", borderRadius: "18px" }}
        >
          <SoftBox display="flex" justifyContent="space-beetween" alignItems="center">
            <SoftTypography variant="caption" color="white" fontWeight="medium" mr="auto" sx={{ fontFamily: '"Poppins", sans-serif' }}>
              Pending Fees
            </SoftTypography>
            <FaEllipsisH color="white" size="18px" sx={{ cursor: "pointer" }} />
          </SoftBox>
          <SoftBox display="flex" justifyContent="space-beetween" alignItems="center">
            <SoftTypography variant="h2" color="white" fontWeight="bold" mr="auto" sx={{ fontFamily: '"Poppins", sans-serif' }}>
              $1,250
            </SoftTypography>
            <SoftBox component="img" src={Graph} sx={{ width: "58px", height: "20px" }} />
          </SoftBox>
        </SoftBox>
        <SoftTypography color="text" variant="xxs" fontWeight="medium" mb="8px" sx={{ fontFamily: '"Poppins", sans-serif' }}>
          NEWEST
        </SoftTypography>
        <SoftBox display="flex" justifyContent="space-beetween" alignItems="center">
          <Stack direction="row" spacing="10px" mr="auto">
            <SoftBox
              display="flex"
              mr="10px"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: "rgba(34, 41, 78, 0.7)",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
              }}
            >
              <MdOutlineDomain color={palette.success.main} size="20px" />
            </SoftBox>
            <SoftBox display="flex" flexDirection="column">
              <SoftTypography color="white" variant="button" fontWeight="medium" sx={{ fontFamily: '"Poppins", sans-serif' }}>
                Tuition Fee
              </SoftTypography>
              <SoftTypography color="text" variant="button" fontWeight="medium" sx={{ fontFamily: '"Poppins", sans-serif' }}>
                Today, 16:36
              </SoftTypography>
            </SoftBox>
          </Stack>
          <SoftTypography variant="button" color="white" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif' }}>
            $1,250
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
};

export default CreditBalance;



