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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview({ announcements = [] }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", maxWidth: "none" }} className="announcements">
      <SoftBox
        pt={{ xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 }}
        px={{ xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 }}
        sx={{ flexShrink: 0 }}
      >
        <SoftTypography
          variant="h5"
          fontWeight="bold"
          sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem", lg: "1.75rem", xl: "1.75rem" } }}
        >
          Announcements
        </SoftTypography>
      </SoftBox>
      {/* Scrollable announcements container - shows 4 items max, rest are scrollable */}
      <SoftBox
        p={{ xs: 1.5, sm: 2, md: 2, lg: 2, xl: 2 }}
        aria-label="Announcements timeline list"
        role="region"
        sx={{
          // CSS variables for responsive height calculation
          '--announcement-item-height': { xs: '110px', sm: '105px', md: '100px' },
          '--announcement-gap': { xs: '8px', sm: '12px', md: '16px' },
          '--announcements-padding': { xs: '12px', sm: '16px', md: '16px' },

          // Calculate max-height to fit exactly 4 items
          maxHeight: {
            xs: 'calc(var(--announcement-item-height) * 4 + var(--announcement-gap) * 3 + var(--announcements-padding) * 2)',
            sm: 'calc(var(--announcement-item-height) * 4 + var(--announcement-gap) * 3 + var(--announcements-padding) * 2)',
            md: 'calc(var(--announcement-item-height) * 4 + var(--announcement-gap) * 3 + var(--announcements-padding) * 2)',
          },

          overflowY: 'auto',
          overflowX: 'hidden',

          // Smooth scrolling
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
          scrollbarGutter: 'stable', // Prevent layout shift when scrollbar appears

          pr: { xs: 0.5, sm: 1, md: 1, lg: 1, xl: 1 },

          // Custom scrollbar styling
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: ({ palette: { grey } }) => grey[400],
            borderRadius: '3px',
            '&:hover': {
              background: ({ palette: { grey } }) => grey[500],
            },
          },

          // Firefox scrollbar styling
          scrollbarWidth: 'thin',
          scrollbarColor: ({ palette: { grey } }) => `${grey[400]} transparent`,

          // Focus styles for accessibility
          '&:focus': {
            outline: '2px solid',
            outlineColor: ({ palette: { info } }) => info.main,
            outlineOffset: '2px',
          },
        }}
        className="announcements__list-wrapper"
      >
        {announcements.length > 0 ? (
          announcements.map((announcement, index) => (
            <TimelineItem
              key={index}
              color={announcement.color || "info"}
              icon={announcement.icon || "campaign"}
              title={announcement.title}
              dateTime={announcement.date}
              description={announcement.description}
              lastItem={index === announcements.length - 1}
            />
          ))
        ) : (
          <SoftTypography variant="body2" color="text">
            No announcements at this time.
          </SoftTypography>
        )}
      </SoftBox>
    </Card>
  );
}

// Typechecking props for OrdersOverview
OrdersOverview.propTypes = {
  announcements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      icon: PropTypes.string,
    })
  ),
};

export default OrdersOverview;
