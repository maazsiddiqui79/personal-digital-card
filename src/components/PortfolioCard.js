// components/PortfolioCard.js

// ALL COMPONENTS
import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bio from "./Bio";
import SocialLinks from "./SocialLinks";
// CSS
import "./PortfolioCard.css";

export default function PortfolioCard() {
  const date = new Date();
  return (
    <main className="portfolio-page">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <div className="portfolio-card">
        <Header />

        <div className="card-content">
          {/* HERO */}

          <div className="hero-section">
            <Avatar />

            <PersonalInfo />
          </div>

          {/* ABOUT + SOCIAL LINKS */}

          <div className="information-grid">
            <SocialLinks />
            <Bio />
          </div>

          {/* FOOTER */}

          <footer className="portfolio-footer">
            <span>
              Designed & Built with <span className="heart">♥</span> by Maaz
              Siddiqui
            </span>

            <span>© {date.getFullYear()} | All rights reserved.</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
