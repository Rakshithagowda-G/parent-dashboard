// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";
import Icon from "@mui/material/Icon";

export default function data() {
  const renderSubject = (name, icon) => (
    <SoftBox display="flex" alignItems="center">
      <SoftBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        sx={{
          backgroundColor: "#3B82F6",
          color: "#FFFFFF",
        }}
        mr={2}
      >
        <Icon fontSize="small" sx={{ color: "#FFFFFF" }}>
          {icon}
        </Icon>
      </SoftBox>
      <SoftTypography variant="button" fontWeight="medium" color="text">
        {name}
      </SoftTypography>
    </SoftBox>
  );

  const renderCompletion = (value, color, label) => (
    <SoftBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
      <SoftTypography variant="caption" fontWeight="bold" color="text">
        {label}
      </SoftTypography>
      <SoftBox width="8rem">
        <SoftProgress value={value} color={color} variant="gradient" label={false} />
      </SoftBox>
    </SoftBox>
  );

  return {
    columns: [
      { name: "assignments", align: "left" },
      { name: "subjects", align: "left" },
      { name: "due date", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        assignments: (
          <SoftTypography variant="button" fontWeight="medium" color="dark">
            Math Homework
          </SoftTypography>
        ),
        subjects: renderSubject("Mathematics", "calculate"),
        "due date": (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            25 Mar
          </SoftTypography>
        ),
        completion: renderCompletion(100, "success", "Submitted"),
      },
      {
        assignments: (
          <SoftTypography variant="button" fontWeight="medium" color="dark">
            Science Project
          </SoftTypography>
        ),
        subjects: renderSubject("Science", "science"),
        "due date": (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            26 Mar
          </SoftTypography>
        ),
        completion: renderCompletion(0, "error", "Pending"),
      },
      {
        assignments: (
          <SoftTypography variant="button" fontWeight="medium" color="dark">
            History Essay
          </SoftTypography>
        ),
        subjects: renderSubject("History", "history_edu"),
        "due date": (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            20 Mar
          </SoftTypography>
        ),
        completion: renderCompletion(50, "info", "In Progress"),
      },
      {
        assignments: (
          <SoftTypography variant="button" fontWeight="medium" color="dark">
            English Grammar Worksheet
          </SoftTypography>
        ),
        subjects: renderSubject("English", "language"),
        "due date": (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            18 Mar
          </SoftTypography>
        ),
        completion: renderCompletion(100, "success", "Submitted"),
      },
      {
        assignments: (
          <SoftTypography variant="button" fontWeight="medium" color="dark">
            Programming Lab
          </SoftTypography>
        ),
        subjects: renderSubject("Computer Science", "computer"),
        "due date": (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            27 Mar
          </SoftTypography>
        ),
        completion: renderCompletion(100, "success", "Submitted"),
      },
      {
        assignments: (
          <SoftTypography variant="button" fontWeight="medium" color="dark">
            Chemistry Lab Notes
          </SoftTypography>
        ),
        subjects: renderSubject("Chemistry", "science"),
        "due date": (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            21 Mar
          </SoftTypography>
        ),
        completion: renderCompletion(0, "warning", "Pending"),
      },
    ],
  };
}
