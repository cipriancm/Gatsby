import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
