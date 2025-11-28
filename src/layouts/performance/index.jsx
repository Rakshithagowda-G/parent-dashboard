import { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import typography from "assets/theme/base/typography";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

// Performance vs Class Average data
const performanceData = [
  { subject: "Math", yourChild: 90, classAverage: 78 },
  { subject: "Science", yourChild: 95, classAverage: 80 },
  { subject: "English", yourChild: 88, classAverage: 82 },
  { subject: "History", yourChild: 98, classAverage: 78 },
  { subject: "CS", yourChild: 90, classAverage: 72 },
];

// Skills Assessment data
const skillsData = [
  { skill: "Mathematics", score: 92 },
  { skill: "Science", score: 88 },
  { skill: "English", score: 82 },
  { skill: "History", score: 83 },
  { skill: "Computer Science", score: 77 },
  { skill: "Arts", score: 87 },
];

// Subject Performance Over Time data
const subjectPerformanceData = [
  { month: "Sep", Mathematics: 85, Science: 88, English: 80, History: 90, "Computer Science": 75 },
  { month: "Oct", Mathematics: 87, Science: 90, English: 82, History: 91, "Computer Science": 76 },
  { month: "Nov", Mathematics: 88, Science: 92, English: 84, History: 92, "Computer Science": 78 },
  { month: "Dec", Mathematics: 90, Science: 95, English: 87, History: 94, "Computer Science": 80 },
  { month: "Jan", Mathematics: 91, Science: 96, English: 88, History: 95, "Computer Science": 81 },
];

function Performance() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { size } = typography;

  // Temporary debug
  const chartRef = useRef(null);
  useEffect(() => {
    console.log('SkillsAssessment: data', skillsData);
    console.log('SkillsAssessment: chartRef', chartRef?.current);
  }, []);

  const cardStyle = {
    borderRadius: "18px",
    padding: { xs: "16px", sm: "20px", md: "24px", lg: "24px", xl: "24px" },
    height: "100%",
    backgroundColor: isDarkMode ? "#0f123b" : "#ffffff",
    boxShadow: isDarkMode
      ? "0 20px 27px 0 rgba(0, 0, 0, 0.05)"
      : "0 20px 27px 0 rgba(0, 0, 0, 0.05)",
    border: isDarkMode ? "1px solid rgba(86, 87, 122, 0.3)" : "none",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  };

  const textColor = isDarkMode ? "#ffffff" : "#0F172A";
  const mutedTextColor = isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(15, 23, 42, 0.7)";

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
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: textColor,
            mb: { xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 },
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.125rem", xl: "2.125rem" },
          }}
        >
          Performance Analysis
        </Typography>

        <Grid container spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3 }} alignItems="stretch">
          {/* Performance vs Class Average - Bar Chart */}
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Card sx={cardStyle}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: textColor,
                  mb: 3,
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Performance vs Class Average
              </Typography>
              <Box className="chart-wrapper" sx={{ height: { xs: 300, md: 350 }, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} />
                    <XAxis
                      dataKey="subject"
                      tick={{ fill: textColor, fontFamily: '"Poppins", sans-serif' }}
                      stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"}
                    />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fill: textColor, fontFamily: '"Poppins", sans-serif' }}
                      stroke={isDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? "#0f123b" : "#ffffff",
                        border: isDarkMode ? "1px solid rgba(86, 87, 122, 0.3)" : "1px solid rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                        color: textColor,
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    />
                    <Legend
                      wrapperStyle={{ fontFamily: '"Poppins", sans-serif', color: textColor }}
                    />
                    <Bar dataKey="yourChild" fill="#1678FF" name="Your Child" radius={[6, 6, 0, 0]} barSize={32} />
                    <Bar dataKey="classAverage" fill="#CFD8DC" name="Class Average" radius={[6, 6, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Grid>

          {/* Skills Assessment - Radar Chart */}
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Card sx={cardStyle} className="skills-assessment">
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: textColor,
                  mb: { xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 },
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem", lg: "1.25rem", xl: "1.25rem" },
                }}
              >
                Skills Assessment
              </Typography>
              <Box className="chart-wrapper" sx={{ height: { xs: 300, md: 350 }, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%" ref={chartRef}>
                  <RadarChart data={skillsData}>
                    <PolarGrid stroke={isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: textColor, fontFamily: '"Poppins", sans-serif', fontSize: 12 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: mutedTextColor, fontFamily: '"Poppins", sans-serif', fontSize: 10 }}
                    />
                    <defs>
                      <linearGradient id="colorRadar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1678FF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#1678FF" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <Radar
                      name="Skills"
                      dataKey="score"
                      stroke="#1678FF"
                      fill="url(#colorRadar)"
                      fillOpacity={0.6}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? "#0f123b" : "#ffffff",
                        border: isDarkMode ? "1px solid rgba(86, 87, 122, 0.3)" : "1px solid rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                        color: textColor,
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Grid>

          {/* Grade Progress Chart */}
          <Grid item xs={12}>
            <Card sx={cardStyle}>
              <Box p={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: textColor,
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Grade Progress
                </Typography>
                <SoftBox mb={2}>
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
                </SoftBox>
                <GradientLineChart
                  height="20.25rem"
                  chart={gradientLineChartData}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default Performance;

