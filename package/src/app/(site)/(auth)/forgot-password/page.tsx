import ForgotPassword from "@/components/Auth/ForgotPassword";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Forgot Password | pi",
};

const Forgotpassword = () => {
  return (
    <>
      <Breadcrumb pageName="Forgot Password Page" />
      <ForgotPassword/>
    </>
  );
};

export default Forgotpassword;
