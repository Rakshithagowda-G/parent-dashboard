import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { ResponsiveContainer, PieChart, Pie, Cell, LabelList, Label } from "recharts";

const chartData = [
  { subject: "Mathematics", marks: 275, color: "#4318ff" },
  { subject: "English", marks: 200, color: "#0075ff" },
  { subject: "Physics", marks: 173, color: "#5b21b6" },
  { subject: "Chemistry", marks: 187, color: "#4338ca" },
  { subject: "Biology", marks: 90, color: "#6366f1" },
];

function RoundedPieChart() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [hoveredSubject, setHoveredSubject] = useState(null);

  return (
    <Card
      sx={{
        borderRadius: "24px",
        background: isDarkMode 
          ? "linear-gradient(135deg, #141727 0%, #3a416f 100%)"
          : "#ffffff",
        padding: "24px",
        width: "100%",
        height: "100%",
        minHeight: "380px",
        boxShadow: isDarkMode 
          ? "0 20px 45px rgba(10, 15, 70, 0.55)"
          : "0 20px 45px rgba(0, 0, 0, 0.1)",
        border: isDarkMode ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        <Typography variant="h6" sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 600 }}>
          Subject Marks
        </Typography>
        <Box
          sx={{
            color: "#22c55e",
            background: "rgba(34, 197, 94, 0.1)",
            padding: "4px 8px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <TrendingUpIcon sx={{ fontSize: 16 }} />
          <Typography variant="caption" sx={{ color: "#22c55e", fontWeight: 600 }}>
            5.2%
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ textAlign: "center", color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(28,32,75,0.7)" }}>
        Academic Performance Overview
      </Typography>
      <Box sx={{ flex: 1, minHeight: 280, position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="marks"
              nameKey="subject"
              innerRadius={60}
              outerRadius={100}
              cornerRadius={8}
              paddingAngle={4}
              onMouseEnter={(data, index, e) => {
                if (data && data.subject) {
                  setHoveredSubject(data.subject);
                } else if (index !== undefined && chartData[index]) {
                  setHoveredSubject(chartData[index].subject);
                }
              }}
              onMouseLeave={() => {
                setHoveredSubject(null);
              }}
              label={false}
            >
              <LabelList
                dataKey="marks"
                position="inside"
                fill="#fff"
                fontFamily="Poppins, sans-serif"
              />
              <Label
                content={({ viewBox }) => {
                  if (hoveredSubject && viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          fill: isDarkMode ? "#fff" : "#1c204b",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {hoveredSubject}
                      </text>
                    );
                  }
                  return null;
                }}
              />
              {chartData.map((entry) => (
                <Cell key={entry.subject} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
}

export default RoundedPieChart;












