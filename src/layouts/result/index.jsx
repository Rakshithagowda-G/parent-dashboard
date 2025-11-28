import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ResultProfileCard from "components/results/ResultProfileCard";
import TopPerformersCard from "components/results/TopPerformersCard";
import RoundedPieChart from "components/results/RoundedPieChart";
import ActivityCard from "components/results/ActivityCard";
import CoursePerformance from "components/results/CoursePerformance";
import avatar from "assets/images/avatar-simmmple.png";

function Result() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box
        py={{ xs: 1, sm: 2, md: 2.5, lg: 3, xl: 3 }}
        px={{ xs: 1, sm: 1.5, md: 2, lg: 2, xl: 2 }}
        sx={{
          width: "100%",
          maxWidth: "none",
          overflowX: "hidden",
          "@media (min-width: 1366px)": {
            maxWidth: "none",
            width: "100%",
          },
        }}
      >
        <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}>
          <Grid item xs={12} md={12} lg={4} xl={4}>
            <ResultProfileCard
              title="Profile Information"
              avatar={avatar}
              info={{
                "Full Name": "Mark Johnson",
                Mobile: "(44) 123 1234 123",
                Email: "mark@simmmple.com",
                Location: "United States",
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={8} xl={8}>
            <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }} alignItems="stretch">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TopPerformersCard />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <RoundedPieChart />
              </Grid>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}
                  justifyContent="flex-start"
                  alignItems="stretch"
                  mt={1}
                >
                  <ActivityCard index={0} />
                  <ActivityCard index={1} />
                  <ActivityCard index={2} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={4}>
            <CoursePerformance />
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default Result;












