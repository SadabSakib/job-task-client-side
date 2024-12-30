import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Historical Artifacts Tracker</span>
        <p>
          Your go-to source for tracking and contributing to the world's most
          fascinating historical artifacts.
        </p>
      </div>
      <div>
        <span className="footer-title">Navigation</span>
        <a className="link link-hover" href="/">
          Home
        </a>
        <a className="link link-hover" href="/all-artifacts">
          All Artifacts
        </a>
        <a className="link link-hover" href="/add-artifact">
          Add Artifacts
        </a>
        <a className="link link-hover" href="/my-artifacts">
          My Artifacts
        </a>
        <a className="link link-hover" href="/liked-artifacts">
          Liked Artifacts
        </a>
      </div>
      <div>
        <span className="footer-title">Follow Us</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.935 4.935 0 0 0 2.165-2.724 9.875 9.875 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482A13.934 13.934 0 0 1 1.671 3.149 4.918 4.918 0 0 0 3.192 9.72a4.897 4.897 0 0 1-2.228-.617v.061a4.919 4.919 0 0 0 3.946 4.827 4.899 4.899 0 0 1-2.224.084 4.92 4.92 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.894 13.894 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.426-.014-.637A10.006 10.006 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-2.084-.38-10.504-.38-12.588 0C4.705 3.54 4 4.356 4 5.398v13.204c0 1.042.705 1.858 3.027 2.214 2.084.38 10.504.38 12.588 0 2.322-.356 3.027-1.172 3.027-2.214V5.398c0-1.042-.705-1.858-3.027-2.214zM9.75 16.537v-9.074l8.125 4.537-8.125 4.537z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.496v-9.294H9.687v-3.623h3.134V8.411c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.461.099 2.792.143v3.24H17.34c-1.357 0-1.62.646-1.62 1.593v2.083h3.239l-.422 3.623h-2.817V24h5.524c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <p>Email: support@artifacttracker.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Artifact Lane, History City, HC 12345</p>
      </div>
    </footer>
  );
};

export default Footer;
