import React from "react";
import "../Privacy Policy/PrivacyPolicy.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-policy-section">
        <Navbar />
        <div className="privacy-policy-section-1">
          <h1>Privacy Policy for NgeKos</h1>
          <p>
            On the NgeKos website, which can be accessed from NgeKos.com, one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by NgeKos.com and how we use it. If you have additional
            questions or require further information about our Privacy Policy,
            please do not hesitate to contact us.
          </p>
        </div>

        <div className="privacy-policy-section-2">
          <ul>
            <li>Information We Collect</li>
            <p>
              NgeKos.com follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and are part of hosting service analytics. The information
              collected by the log files includes internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. It is not linked to any personally identifiable
              information. The purpose of the information is to analyze trends,
              administer the site, track user movement on the website and gather
              demographic information.
            </p>
            <li>Cookies</li>
            <p>
              Like any other website, NgeKos.com uses 'cookies'. Cookies are
              used to store information such as visitor preferences and the
              pages that visitors access or visit on this website. We use this
              information to optimize the user experience by customizing the
              content of our web pages.
            </p>
            <li>Privacy Policy of Third Parties</li>
            <p>
              NgeKos.com's Privacy Policy does not apply to other advertisers or
              websites. Therefore, we advise you to carefully read the
              respective Privacy Policies of third parties for more detailed
              information. You have the right to disable cookies in your
              browser.
            </p>
            <li>Child Information</li>
            <p>
              One of our priorities is helping protect children when they use
              the internet. We encourage parents and guardians to observe,
              participate in, monitor and guide their online activity.
              NgeKos.com does not knowingly collect any personally identifiable
              information from minors. If you think your child has provided this
              kind of information on our website, we strongly encourage you to
              contact us immediately and we will do our best to remove such
              information from our records as soon as possible.
            </p>
            <li>Agreement</li>
            <p>
              By using our website, you here by consent to our Privacy Policy
              and agree to its terms and conditions.
            </p>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
