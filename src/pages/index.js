// Step 1: Import React
// import * as React from "react";
// import { Link } from "gatsby";

// const IndexPage = () => {
//   return (
//     <main>
//       <h1>Welcome to my Gatsby site!</h1>
//       <Link to="/about">About</Link>
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//     </main>
//   );
// };

// export const Head = () => <title>Home Page</title>;

// export default IndexPage;

import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>Welcome to my Gatsby Site!</h2>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
