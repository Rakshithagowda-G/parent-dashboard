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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// react-router components
import { Link } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

function BuildByDevelopers() {
  return (
    <Card sx={{ width: "100%", maxWidth: "none", overflow: "hidden" }}>
      <SoftBox p={{ xs: 1.5, sm: 2, md: 2, lg: 2, xl: 2 }}>
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 }}>
          <Grid item xs={12} lg={6} xl={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography 
                  variant="body2" 
                  color="text" 
                  fontWeight="medium"
                  sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "0.875rem", lg: "0.875rem", xl: "0.875rem" } }}
                >
                  Parent Dashboard
                </SoftTypography>
              </SoftBox>
              <SoftTypography 
                variant="h5" 
                fontWeight="bold" 
                gutterBottom
                sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "1.75rem", xl: "1.75rem" } }}
              >
                Track Your Child's Progress
              </SoftTypography>
              <SoftBox mb={{ xs: 3, sm: 4, md: 5, lg: 6, xl: 6 }}>
                <SoftTypography 
                  variant="body2" 
                  color="text"
                  sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "0.875rem", lg: "0.875rem", xl: "0.875rem" } }}
                >
                  Monitor attendance, assignments, grades, and academic performance all in one place.
                  Stay connected with your child's educational journey.
                </SoftTypography>
              </SoftBox>
              <SoftTypography
                component={Link}
                to="/performance"
                variant="button"
                color="text"
                fontWeight="medium"
                sx={{
                  mt: "auto",
                  mr: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",
                  textDecoration: "none",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translate(2px, -0.5px)`,
                    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                  },

                  "&:hover .material-icons-round, &:focus  .material-icons-round": {
                    transform: `translate(6px, -0.5px)`,
                  },
                }}
              >
                View Details
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={5} xl={5} sx={{ position: "relative", ml: { lg: "auto" } }}>
            <SoftBox
              height={{ xs: "200px", sm: "250px", md: "300px", lg: "100%", xl: "100%" }}
              minHeight={{ xs: "200px", sm: "250px", md: "300px" }}
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
              sx={{ position: "relative", overflow: "hidden" }}
            >
              <SoftBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
                sx={{ objectFit: "cover" }}
              />
              <SoftBox 
                component="img" 
                src={rocketWhite} 
                alt="rocket" 
                width="100%" 
                maxWidth="100%"
                height="auto"
                pt={3}
                sx={{ 
                  objectFit: "contain",
                  maxHeight: { xs: "180px", sm: "220px", md: "280px", lg: "100%", xl: "100%" }
                }} 
              />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
