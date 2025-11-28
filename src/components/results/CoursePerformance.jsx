import { useState } from "react";
import Card from "@mui/material/Card";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const testsData = [
  {
    id: "test1",
    title: "Monthly Test (May)",
    testData: [
      { subject: "English", maxMarks: 150, minMarks: 100, result: 135, status: "Pass" },
      { subject: "Mathematics", maxMarks: 214, minMarks: 100, result: 156, status: "Pass" },
      { subject: "Physics", maxMarks: 120, minMarks: 100, result: 102, status: "Pass" },
      { subject: "Chemistry", maxMarks: 110, minMarks: 100, result: 99, status: "Pass" },
      { subject: "Spanish", maxMarks: 140, minMarks: 100, result: 123, status: "Pass" },
    ],
    rank: 30,
  },
  {
    id: "test2",
    title: "Monthly Test (June)",
    testData: [
      { subject: "English", maxMarks: 150, minMarks: 100, result: 142, status: "Pass" },
      { subject: "Mathematics", maxMarks: 214, minMarks: 100, result: 182, status: "Pass" },
      { subject: "Physics", maxMarks: 120, minMarks: 100, result: 109, status: "Pass" },
      { subject: "Chemistry", maxMarks: 110, minMarks: 100, result: 104, status: "Pass" },
      { subject: "Spanish", maxMarks: 140, minMarks: 100, result: 118, status: "Pass" },
    ],
    rank: 25,
  },
  {
    id: "test3",
    title: "Monthly Test (July)",
    testData: [
      { subject: "English", maxMarks: 150, minMarks: 100, result: 147, status: "Pass" },
      { subject: "Mathematics", maxMarks: 214, minMarks: 100, result: 188, status: "Pass" },
      { subject: "Physics", maxMarks: 120, minMarks: 100, result: 110, status: "Pass" },
      { subject: "Chemistry", maxMarks: 110, minMarks: 100, result: 105, status: "Pass" },
      { subject: "Spanish", maxMarks: 140, minMarks: 100, result: 121, status: "Pass" },
    ],
    rank: 20,
  },
];

const getProgressColor = (marks, maxMarks) => {
  const percentage = (marks / maxMarks) * 100;
  if (percentage >= 80) return "#10b981";
  if (percentage >= 60) return "#3b82f6";
  return "#f59e0b";
};

function CoursePerformance() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [expanded, setExpanded] = useState({
    test1: true,
    test2: true,
    test3: true,
  });

  const downloadResult = async () => {
    const element = document.getElementById("coursePerformance");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#11142d",
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);
    const imgX = (pdfWidth - canvas.width * ratio) / 2;
    pdf.addImage(imgData, "PNG", imgX, 10, canvas.width * ratio, canvas.height * ratio);
    pdf.save("course-performance-result.pdf");
  };

  const handleChange = (panel) => (_, isExpanded) =>
    setExpanded((prev) => ({
      ...prev,
      [panel]: isExpanded,
    }));

  const renderTestCard = (test) => {
    const totalMarks = test.testData.reduce((sum, item) => sum + item.maxMarks, 0);
    const marksObtained = test.testData.reduce((sum, item) => sum + item.result, 0);
    const percentage = ((marksObtained / totalMarks) * 100).toFixed(2);

    return (
      <Card
        sx={{
          borderRadius: "24px",
          background: isDarkMode 
            ? "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)"
            : "#ffffff",
          color: isDarkMode ? "#fff" : "#1c204b",
          border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
          boxShadow: isDarkMode 
            ? "0 15px 40px rgba(0,0,0,0.45)"
            : "0 15px 40px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            background: isDarkMode 
              ? "linear-gradient(90deg, #4338ca 0%, #5b21b6 100%)"
              : "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <Box display="flex" alignItems="center" gap={1.5}>
            <CheckCircleIcon sx={{ color: "#fff" }} />
            <Typography sx={{ fontWeight: 600, color: "#fff" }}>{test.title}</Typography>
          </Box>
          <IconButton
            onClick={downloadResult}
            sx={{ color: "#fff", "&:hover": { background: "rgba(255,255,255,0.15)" } }}
          >
            <DownloadIcon />
          </IconButton>
        </Box>

        <Box>
          <Box
            display="flex"
            py={2}
            px={3}
            sx={{ 
              background: isDarkMode ? "rgba(255,255,255,0.07)" : "rgba(99, 102, 241, 0.05)",
              borderBottom: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(99, 102, 241, 0.1)"
            }}
          >
            {["Subject", "Max Marks", "Min Marks", "Marks Obtained", "Result"].map((header) => (
              <Box key={header} width="20%" textAlign={header === "Subject" ? "left" : "center"}>
                <Typography
                  variant="caption"
                  sx={{ 
                    color: isDarkMode ? "rgba(255,255,255,0.8)" : "rgba(28,32,75,0.8)",
                    letterSpacing: 1, 
                    textTransform: "uppercase" 
                  }}
                >
                  {header}
                </Typography>
              </Box>
            ))}
          </Box>

          {test.testData.map((item, index) => {
            const progressPercentage = (item.result / item.maxMarks) * 100;
            return (
              <Box
                key={item.subject}
                display="flex"
                alignItems="center"
                py={2}
                px={3}
                sx={{
                  background: isDarkMode 
                    ? (index % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.07)")
                    : (index % 2 === 0 ? "rgba(99, 102, 241, 0.02)" : "rgba(99, 102, 241, 0.05)"),
                  borderBottom:
                    index < test.testData.length - 1 
                      ? (isDarkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(99, 102, 241, 0.1)")
                      : "none",
                }}
              >
                <Box width="20%">
                  <Typography sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 600 }}>{item.subject}</Typography>
                </Box>
                <Box width="20%" textAlign="center">
                  <Typography sx={{ color: isDarkMode ? "rgba(255,255,255,0.85)" : "rgba(28,32,75,0.85)" }}>{item.maxMarks}</Typography>
                </Box>
                <Box width="20%" textAlign="center">
                  <Typography sx={{ color: isDarkMode ? "rgba(255,255,255,0.85)" : "rgba(28,32,75,0.85)" }}>{item.minMarks}</Typography>
                </Box>
                <Box width="20%">
                  <Typography sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 600, textAlign: "center" }}>
                    {item.result}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min(progressPercentage, 100)}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(99, 102, 241, 0.2)",
                      "& .MuiLinearProgress-bar": {
                        background: getProgressColor(item.result, item.maxMarks),
                      },
                    }}
                  />
                </Box>
                <Box width="20%" textAlign="center">
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      background: item.status === "Pass" ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
                      color: item.status === "Pass" ? "#22c55e" : "#ef4444",
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Box>
            );
          })}

          <Box
            sx={{
              background: isDarkMode 
                ? "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)"
                : "rgba(99, 102, 241, 0.05)",
              padding: "16px 24px",
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(28,32,75,0.7)" }}>
                Rank
              </Typography>
              <Typography sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 700 }}>{test.rank}</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(28,32,75,0.7)" }}>
                Total
              </Typography>
              <Typography sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 700 }}>{totalMarks}</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(28,32,75,0.7)" }}>
                Marks Obtained
              </Typography>
              <Typography sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 700 }}>{marksObtained}</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(28,32,75,0.7)" }}>
                Percentage
              </Typography>
              <Typography sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 700 }}>{percentage}%</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    );
  };

  return (
    <Box id="coursePerformance">
      {testsData.map((test) => {
        const totalMarks = test.testData.reduce((sum, item) => sum + item.maxMarks, 0);
        const marksObtained = test.testData.reduce((sum, item) => sum + item.result, 0);

        return (
          <Accordion
            key={test.id}
            expanded={expanded[test.id]}
            onChange={handleChange(test.id)}
            sx={{
              borderRadius: "24px",
              background: "transparent",
              mb: 3,
              boxShadow: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: isDarkMode ? "#fff" : "#1c204b" }} />}
              sx={{
                borderRadius: "24px",
                background: isDarkMode 
                  ? "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
                  : "#ffffff",
                border: isDarkMode 
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(0,0,0,0.1)",
                color: isDarkMode ? "#fff" : "#1c204b",
                "& .MuiAccordionSummary-content": { alignItems: "center", gap: 2 },
              }}
            >
              <Box display="flex" alignItems="center" gap={2} flex={1}>
                <CheckCircleIcon sx={{ color: isDarkMode ? "#fff" : "#1c204b" }} />
                <Typography sx={{ fontWeight: 600, color: isDarkMode ? "#fff" : "#1c204b" }}>{test.title}</Typography>
              </Box>
              <Typography sx={{ fontWeight: 600, color: isDarkMode ? "#fff" : "#1c204b" }}>
                {marksObtained} / {totalMarks}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0, pt: 2 }}>{renderTestCard(test)}</AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}

export default CoursePerformance;












