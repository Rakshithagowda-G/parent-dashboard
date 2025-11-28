import { useState, useEffect } from "react";
import { FaGlobe, FaPalette, FaShieldAlt } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";

import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


import "./profilePage.css";

const personalInfo = [
  { label: "Name", value: "Amira" },
  { label: "D.O.B", value: "31/02/2004" },
  { label: "Ph No", value: "1234567890" },
  { label: "Courses", value: "B.Tech CSE" },
];

function ProfileOverview() {
  const [darkMode, setDarkMode] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [showGrades, setShowGrades] = useState(true);
  const [usageAnalytics, setUsageAnalytics] = useState(true);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [isDarkMode]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox className="profile-screen">
        <div className="profile-screen__grid">
          <section className="profile-card">
            <div className="profile-card__hero">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                alt="Amira profile"
                className="profile-card__avatar"
                draggable="false"
              />
            </div>
            <div className="profile-card__body">
              <h2 className="profile-card__title">Personal Information</h2>
              {personalInfo.map((item) => (
                <div className="profile-field" key={item.label}>
                  <label>{item.label}</label>
                  <div className="profile-field__value">{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="preferences-stack">
            <article className="pref-card">
              <div className="pref-card__header">
                <span className="pref-card__icon">
                  <FaGlobe />
                </span>
                <div>
                  <h3 className="pref-card__title">Language & Region</h3>
                  <p className="pref-card__subtitle">Language</p>
                </div>
              </div>
              <div className="pref-card__row">
                <div>
                  <p className="pref-card__label">Language</p>
                </div>
                <span className="pref-card__value">English (US)</span>
              </div>
            </article>

            <article className="pref-card">
              <div className="pref-card__header">
                <span className="pref-card__icon">
                  <FaPalette />
                </span>
                <div>
                  <h3 className="pref-card__title">Appearance</h3>
                  <p className="pref-card__subtitle">Dark Mode</p>
                </div>
              </div>
              <div className="pref-card__row">
                <div>
                  <p className="pref-card__label">Dark Mode</p>
                  <p className="pref-card__hint">Toggle between light and dark theme</p>
                </div>
                <button
                  type="button"
                  className={`toggle-pill ${darkMode ? "toggle-pill--active" : ""}`}
                  onClick={() => setDarkMode((prev) => !prev)}
                  aria-pressed={darkMode}
                >
                  <span className="toggle-pill__thumb" />
                </button>
              </div>
            </article>

            <article className="pref-card">
              <div className="pref-card__header">
                <span className="pref-card__icon">
                  <FaShieldAlt />
                </span>
                <div>
                  <h3 className="pref-card__title">Privacy</h3>
                  <p className="pref-card__subtitle">Control your privacy settings</p>
                </div>
              </div>
              <div className="pref-card__row">
                <div>
                  <p className="pref-card__label">Profile Visibility</p>
                  <p className="pref-card__hint">Make your profile visible to other students</p>
                </div>
                <button
                  type="button"
                  className={`toggle-pill ${profileVisibility ? "toggle-pill--active" : ""}`}
                  onClick={() => setProfileVisibility((prev) => !prev)}
                  aria-pressed={profileVisibility}
                >
                  <span className="toggle-pill__thumb" />
                </button>
              </div>
              <div className="pref-card__row">
                <div>
                  <p className="pref-card__label">Show Grades</p>
                  <p className="pref-card__hint">Allow instructors to view your grades</p>
                </div>
                <button
                  type="button"
                  className={`toggle-pill ${showGrades ? "toggle-pill--active" : ""}`}
                  onClick={() => setShowGrades((prev) => !prev)}
                  aria-pressed={showGrades}
                >
                  <span className="toggle-pill__thumb" />
                </button>
              </div>
              <div className="pref-card__row">
                <div>
                  <p className="pref-card__label">Usage Analytics</p>
                  <p className="pref-card__hint">Help improve the platform by sharing usage data</p>
                </div>
                <button
                  type="button"
                  className={`toggle-pill ${usageAnalytics ? "toggle-pill--active" : ""}`}
                  onClick={() => setUsageAnalytics((prev) => !prev)}
                  aria-pressed={usageAnalytics}
                >
                  <span className="toggle-pill__thumb" />
                </button>
              </div>
            </article>
          </section>
        </div>
      </SoftBox>
    </DashboardLayout>
  );
}

export default ProfileOverview;
