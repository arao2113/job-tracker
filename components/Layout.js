import Head from "next/head";
import MainNavbar from "./MainNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Job Tracker</title>
      </Head>
      <MainNavbar />
      {children}
    </>
  );
};

export default Layout;
