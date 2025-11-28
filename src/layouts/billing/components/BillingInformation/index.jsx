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
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

// Billing page components
// import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <SoftBox
      id="delete-account"
      className="fee-breakdown-card"
      sx={{
        height: "100%",
        fontFamily: '"Poppins", sans-serif',
        display: "flex",
        flexDirection: "column",
        backgroundColor: isDarkMode ? '#0f123b' : '#ffffff',
        background: isDarkMode ? '#0f123b' : '#ffffff',
        backdropFilter: 'none',
        backgroundImage: 'none',
        border: isDarkMode ? '1px solid rgba(86, 87, 122, 0.3)' : '1px solid rgba(0, 0, 0, 0.125)',
        borderRadius: '16px',
        boxShadow: '0 20px 27px 0 rgba(0, 0, 0, 0.05)',
        padding: '22px',
      }}
    >
      <SoftBox mb="28px">
        <SoftTypography variant="lg" color="white" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif' }}>
          Fee Breakdown
        </SoftTypography>
      </SoftBox>
      <SoftBox className="fee-table-wrapper">
        <TableContainer>
          <MuiTable>
            <SoftBox component="thead">
              <TableRow>
                <SoftBox component="th" color="text" fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom="1px solid #56577a" py={1.5} pl={1} pr={1} textAlign="left" sx={{ fontFamily: '"Poppins", sans-serif' }}>CATEGORY</SoftBox>
                <SoftBox component="th" color="text" fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom="1px solid #56577a" py={1.5} pl={1} pr={1} textAlign="left" sx={{ fontFamily: '"Poppins", sans-serif' }}>AMOUNT</SoftBox>
                <SoftBox component="th" color="text" fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom="1px solid #56577a" py={1.5} pl={1} pr={1} textAlign="left" sx={{ fontFamily: '"Poppins", sans-serif' }}>PAID</SoftBox>
                <SoftBox component="th" color="text" fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom="1px solid #56577a" py={1.5} pl={1} pr={1} textAlign="left" sx={{ fontFamily: '"Poppins", sans-serif' }}>PENDING</SoftBox>
                <SoftBox component="th" color="text" fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom="1px solid #56577a" py={1.5} pl={1} pr={1} textAlign="left" sx={{ fontFamily: '"Poppins", sans-serif' }}>DUE DATE</SoftBox>
                <SoftBox component="th" color="text" fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom="1px solid #56577a" py={1.5} pl={1} pr={1} textAlign="left" sx={{ fontFamily: '"Poppins", sans-serif' }}>STATUS</SoftBox>
              </TableRow>
            </SoftBox>
            <TableBody>
              {[
                { category: "Tuition Fee", amount: "₹15,000", paid: "₹15,000", pending: "₹0", dueDate: "2024-01-15", status: "Paid" },
                { category: "Sports Fee", amount: "₹2,000", paid: "₹2,000", pending: "₹0", dueDate: "2024-01-15", status: "Paid" },
                { category: "Lab Fee", amount: "₹3,000", paid: "₹3,000", pending: "₹0", dueDate: "2024-01-15", status: "Paid" },
                { category: "Library Fee", amount: "₹1,000", paid: "₹1,000", pending: "₹0", dueDate: "2024-01-15", status: "Paid" },
                { category: "Activity Fee", amount: "₹2,000", paid: "₹0", pending: "₹2,000", dueDate: "2024-01-31", status: "Pending" },
                { category: "Examination Fee", amount: "₹3,000", paid: "₹0", pending: "₹3,000", dueDate: "2024-01-31", status: "Pending" },
              ].map((row, index) => (
                <TableRow key={index}>
                  <SoftBox component="td" py={1.5} pl={1} pr={1} borderBottom="1px solid #56577a">
                    <SoftTypography variant="button" color="white" fontWeight="medium" sx={{ fontFamily: '"Poppins", sans-serif' }}>{row.category}</SoftTypography>
                  </SoftBox>
                  <SoftBox component="td" py={1.5} pl={1} pr={1} borderBottom="1px solid #56577a">
                    <SoftTypography variant="button" color="text" fontWeight="regular" sx={{ fontFamily: '"Poppins", sans-serif' }}>{row.amount}</SoftTypography>
                  </SoftBox>
                  <SoftBox component="td" py={1.5} pl={1} pr={1} borderBottom="1px solid #56577a">
                    <SoftTypography variant="button" color="success" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif' }}>{row.paid}</SoftTypography>
                  </SoftBox>
                  <SoftBox component="td" py={1.5} pl={1} pr={1} borderBottom="1px solid #56577a">
                    <SoftTypography variant="button" color="error" fontWeight="bold" sx={{ fontFamily: '"Poppins", sans-serif' }}>{row.pending}</SoftTypography>
                  </SoftBox>
                  <SoftBox component="td" py={1.5} pl={1} pr={1} borderBottom="1px solid #56577a">
                    <SoftTypography variant="button" color="text" fontWeight="regular" sx={{ fontFamily: '"Poppins", sans-serif' }}>{row.dueDate}</SoftTypography>
                  </SoftBox>
                  <SoftBox component="td" py={1.5} pl={1} pr={1} borderBottom="1px solid #56577a">
                    <SoftBadge
                      variant="standard"
                      badgeContent={row.status}
                      color={row.status === "Paid" ? "success" : "error"}
                      size="xs"
                      container
                      sx={({ palette: { white, success, error } }) => ({
                        background: row.status === "Paid" ? success.main : error.main,
                        color: white.main,
                        borderRadius: "8px",
                        padding: "4px 8px",
                        fontFamily: '"Poppins", sans-serif',
                      })}
                    />
                  </SoftBox>
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </SoftBox>
    </SoftBox>
  );
}

export default BillingInformation;
