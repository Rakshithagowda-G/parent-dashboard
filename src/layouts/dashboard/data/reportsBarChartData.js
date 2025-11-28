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

const reportsBarChartData = {
  chart: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: { label: "Grades", data: [85, 88, 90, 87, 92, 89, 91, 93, 95] },
  },
  items: [
    {
      icon: { color: "primary", component: "assignment" },
      label: "assignments",
      progress: { content: "24", percentage: 80 },
    },
    {
      icon: { color: "info", component: "event" },
      label: "attendance",
      progress: { content: "95%", percentage: 95 },
    },
    {
      icon: { color: "warning", component: "quiz" },
      label: "tests",
      progress: { content: "12", percentage: 60 },
    },
    {
      icon: { color: "error", component: "school" },
      label: "subjects",
      progress: { content: "8", percentage: 100 },
    },
  ],
};

export default reportsBarChartData;
