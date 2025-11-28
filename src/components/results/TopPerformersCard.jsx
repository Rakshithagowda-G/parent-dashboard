/**
 * Card highlighting top performers with gradient visuals.
 */
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";

const performers = [
  {
    name: "test 1",
    achievement: "test 1",
    score: "test 1",
    avatar: avatar1,
  },
  {
    name: "test 2",
    achievement: "test 2",
    score: "test 2",
    avatar: avatar2,
  },
  {
    name: "test 3",
    achievement: "test 3",
    score: "test 3",
    avatar: avatar3,
  },
];

function TopPerformersCard() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "380px",
        borderRadius: "24px",
        padding: "24px",
        background: isDarkMode 
          ? "linear-gradient(135deg, #141727 0%, #3a416f 100%)"
          : "#ffffff",
        boxShadow: isDarkMode 
          ? "0 20px 45px rgba(10, 15, 70, 0.55)"
          : "0 20px 45px rgba(0, 0, 0, 0.1)",
        border: isDarkMode ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 600, textTransform: "capitalize" }}
      >
        Top Performers
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        {performers.map((performer) => (
          <Box
            key={performer.name}
            display="flex"
            alignItems="center"
            gap={2}
            p={2}
            sx={{
              borderRadius: "18px",
              background: isDarkMode ? "rgba(255, 255, 255, 0.07)" : "rgba(99, 102, 241, 0.05)",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(99, 102, 241, 0.1)",
              backdropFilter: isDarkMode ? "blur(10px)" : "none",
              transition: "transform 0.15s ease",
              "&:hover": {
                transform: "translateY(-3px)",
              },
            }}
          >
            <Avatar src={performer.avatar} alt={performer.name} sx={{ width: 48, height: 48 }} />
            <Box flex={1}>
              <Typography variant="subtitle1" sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 600 }}>
                {performer.name}
              </Typography>
              <Typography variant="body2" sx={{ color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(28,32,75,0.7)" }}>
                {performer.achievement}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 700, fontSize: "1rem" }}>
                {performer.score}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

export default TopPerformersCard;

