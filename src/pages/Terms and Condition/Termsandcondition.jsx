import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Termsandcondition.css";

const Termsandcondition = () => {
  return (
    <div className="termsandconditionParentContainer frontContainer">
      <Navbar />;
      <div className="termsandconditionContent">
        <h1>Terms and Conditions </h1>
        <p>
          1. Eligibility: <br />
          By using MatchInbox, you affirm that you are at least 18 years old and
          have the legal capacity to enter into a binding agreement. <br />
          2. User Conduct: <br />
          a. You agree to use MatchInbox in compliance with applicable laws and
          regulations. b. You will not engage in any activities that are
          illegal, abusive, harassing, or offensive towards other users. <br />
          c. You are responsible for the content you post, including messages,
          photos, and profile information. <br />
          3. Intellectual Property: <br />
          a. MatchInbox and its associated trademarks, logos, and content are
          the sole property of MatchInbox and its licensors.
          <br />
          b. You may not use, modify, or reproduce MatchInbox's intellectual
          property without prior written consent. <br />
          4. Disclaimer of Warranty: <br /> MatchInbox is provided on an "as-is"
          and "as available" basis. We do not guarantee the accuracy,
          reliability, or availability of the app at all times. <br />
          5. Limitation of Liability: <br /> MatchInbox and its affiliates shall
          not be liable for any direct, indirect, incidental, consequential, or
          punitive damages arising from the use or inability to use the app.{" "}
          <br />
          6. Governing Law: <br />
          These Terms and Conditions shall be governed by and construed in
          accordance with the laws of the jurisdiction in which MatchInbox is
          operated. By using MatchInbox, you agree to the terms and conditions
          outlined in this document. We recommend reviewing the Privacy Policy
          and Terms and Conditions periodically, as they may be updated from
          time to time. If you have any questions or concerns regarding our
          Privacy Policy or Terms and Conditions, please contact us at
          admin@matchinbox.com Please note that the above Privacy Policy and
          Terms and Conditions are provided as a general template and should be
          reviewed by legal professionals to ensure compliance with applicable
          laws and regulations in specific jurisdictions.
        </p>
      </div>
    </div>
  );
};

export default Termsandcondition;
