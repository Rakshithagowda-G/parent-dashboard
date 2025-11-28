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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import AttendanceCalendar from "components/AttendanceCalendar";

// React hooks
import { useMemo } from "react";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {
  const { size } = typography;
  
  // Compute current month attendance percentage
  // TODO: Replace with actual API data when available
  const attendancePercent = useMemo(() => {
    if (process.env.NODE_ENV === "development") {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      
      let presentDays = 0;
      let totalTrackedDays = 0;
      
      // Generate deterministic mock data: 80% present rate (same logic as AttendanceCalendar)
      // Using a seeded approach for consistency
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        // Skip future dates
        if (date > today) continue;
        // Skip weekends (optional - adjust as needed)
        const dayOfWeek = date.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) continue;
        
        totalTrackedDays++;
        // Deterministic 80% present rate based on day number for consistency
        // This ensures the percentage matches what the calendar displays
        const seed = (currentYear * 10000 + currentMonth * 100 + day) % 10;
        if (seed < 8) { // 80% present rate
          presentDays++;
        }
      }
      
      if (totalTrackedDays > 0) {
        return (presentDays / totalTrackedDays) * 100;
      }
    }
    // In production, this would come from API/props
    return null;
  }, []);

  // Announcements data - can be moved to context/API/parent module
  const announcements = [
    {
      title: "Parent–Teacher Conference Scheduled",
      date: "25 MAR · 2:00 PM",
      description: "Please confirm your attendance for the upcoming conference.",
      color: "info",
      icon: "event",
    },
    {
      title: "New Assignment Posted",
      date: "24 MAR · 10:30 AM",
      description: "Science project assignment has been added to the portal.",
      color: "success",
      icon: "assignment",
    },
    {
      title: "School Holiday Notice",
      date: "23 MAR · 9:00 AM",
      description: "School will be closed on March 30th for a public holiday.",
      color: "warning",
      icon: "celebration",
    },
    {
      title: "Report Cards Available",
      date: "22 MAR · 3:15 PM",
      description: "Mid-term report cards are now available for download.",
      color: "primary",
      icon: "description",
    },
    {
      title: "Library Books Due Reminder",
      date: "20 MAR · 1:00 PM",
      description: "Please return borrowed library books by March 25.",
      color: "info",
      icon: "menu_book",
    },
    {
      title: "Sports Meet Announcement",
      date: "18 MAR · 9:30 AM",
      description: "Annual sports day practice schedule has been released.",
      color: "success",
      icon: "sports_soccer",
    },
    {
      title: "Field Trip Consent Form",
      date: "17 MAR · 11:00 AM",
      description: "Submit consent form for the upcoming field trip.",
      color: "warning",
      icon: "description",
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox
        py={{ xs: 1, sm: 2, md: 2.5, lg: 3, xl: 3 }}
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
        <SoftBox mb={{ xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 }}>
          {/* Four mini stat cards with equal width and height - percentage deltas hidden */}
          <Grid
            container
            spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}
            sx={{
              display: 'flex',
              alignItems: 'stretch', // Equal height for all cards
            }}
          >
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <MiniStatisticsCard
                title={{ text: "attendance rate" }}
                count="95%"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: "event" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <MiniStatisticsCard
                title={{ text: "assignments completed" }}
                count="24"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "assignment" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <MiniStatisticsCard
                title={{ text: "average grade" }}
                count="A-"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: "school" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <MiniStatisticsCard
                title={{ text: "pending tasks" }}
                count="5"
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "pending_actions",
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={{ xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 }}>
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}>
            <Grid item xs={12} lg={7} xl={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5} xl={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={{ xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 }}>
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}>
            <Grid item xs={12} lg={5} xl={5}>
              <Card sx={{ height: "100%" }}>
                <SoftBox padding="1rem" aria-live="polite">
                  <SoftBox mb={2}>
                    <SoftTypography 
                      variant="h6" 
                      fontWeight="medium" 
                      component="h3"
                      aria-label={`Monthly Attendance Overview${attendancePercent ? ', current month attendance: ' + Math.round(attendancePercent) + ' percent' : ', attendance data unavailable'}`}
                    >
                      Monthly Attendance Overview
                    </SoftTypography>
                    <SoftTypography 
                      component="div" 
                      variant="button" 
                      color="text" 
                      fontWeight="regular"
                      sx={{ 
                        fontSize: '0.75rem',
                        opacity: 0.7,
                        mt: 0.5
                      }}
                    >
                      {attendancePercent
                        ? `(+${Math.round(attendancePercent)}% this month)`
                        : '(attendance data unavailable)'}
                    </SoftTypography>
                  </SoftBox>
                  <SoftBox height="12.5rem">
                    <AttendanceCalendar studentId={null} />
                  </SoftBox>
                </SoftBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={7} xl={7}>
              <GradientLineChart
                title="Grade Progress"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      8% improvement{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        this semester
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }}>
          <Grid item xs={12} md={12} lg={8} xl={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={12} lg={4} xl={4}>
            <OrderOverview announcements={announcements} />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
