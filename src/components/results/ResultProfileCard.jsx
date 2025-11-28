import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";

function ResultProfileCard({ title, avatar, info }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        height: "100%",
        padding: "24px",
        borderRadius: "24px",
        background: isDarkMode
          ? "linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)"
          : "#ffffff",
        color: isDarkMode ? "#fff" : "#1c204b",
        boxShadow: isDarkMode
          ? "0 20px 45px rgba(10, 15, 70, 0.55)"
          : "0 20px 45px rgba(0, 0, 0, 0.1)",
        border: isDarkMode ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, textTransform: "capitalize" }} gutterBottom>
        {title}
      </Typography>
      <Box display="flex" justifyContent="center" mb={3}>
        <Avatar
          src={avatar}
          alt="profile"
          sx={{
            width: 96,
            height: 96,
            borderRadius: "30%",
            border: "3px solid rgba(255,255,255,0.3)",
          }}
        />
      </Box>
      <Divider sx={{ borderColor: isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)", mb: 3 }} />
      <Box display="flex" flexDirection="column" gap={2}>
        {Object.entries(info).map(([label, value]) => (
          <Box
            key={label}
            sx={{
              borderRadius: "16px",
              background: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(99, 102, 241, 0.05)",
              border: isDarkMode ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(99, 102, 241, 0.1)",
              padding: "12px 16px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1,
                color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(28,32,75,0.7)",
              }}
            >
              {label}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 600 }}>
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

ResultProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
};

export default ResultProfileCard;













