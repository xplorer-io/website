"use client";

import copyrightLogo from "@public/images/icons/copyright.svg";
import githubIcon from "@public/images/icons/github.svg";
import linkedinIcon from "@public/images/icons/linkedin.svg";
import slackIcon from "@public/images/icons/slack.svg";
import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";

const Footer = React.memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: isMobile ? "wrap" : "nowrap",
    textAlign: isMobile ? "center" : "left",
  };

  const leftDivStyle = {
    marginLeft: isMobile ? "0" : "60px",
    marginTop: isMobile ? "10px" : "20px",
  };

  const rightDivStyle: CSSProperties = {
    marginRight: isMobile ? "0" : "60px",
    marginTop: isMobile ? "10px" : "0",
    textAlign: isMobile ? "center" : ("right" as CSSProperties["textAlign"]),
  };

  return (
    <section style={{ backgroundColor: "#283E70", padding: "40px" }}>
      <div>
        <div style={containerStyle}>
          <div style={leftDivStyle}>
            <h3 style={{ color: "white", fontSize: "35px" }}>Xplorers</h3>
          </div>
          <div style={rightDivStyle}>
            <p style={{ color: "#FFFFFF", marginBottom: "5px" }}>
              Get in touch
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href="https://github.com/xplorer-io"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "15px" }}
                aria-label="Github"
              >
                <Image src={githubIcon} alt="Github Icon" loading="lazy" />
              </a>
              <a
                href="https://www.linkedin.com/company/xplorersgroup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "15px" }}
                aria-label="Linkedin"
              >
                <Image src={linkedinIcon} alt="Linkedin Icon" loading="lazy" />
              </a>
              <a
                href="https://xplorers-io.slack.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "15px" }}
                aria-label="Slack"
              >
                <Image src={slackIcon} alt="Slack Icon" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <Image src={copyrightLogo} alt="Copyright Logo" />
            <p style={{ marginLeft: "5px" }}>
              2024 Xplorers, All rights reserved
            </p>
          </span>
        </div>
      </div>
    </section>
  );
});

Footer.displayName = "Footer";

export default Footer;
