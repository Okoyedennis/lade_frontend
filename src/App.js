import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Role } from "./components/Model/Role";
import { AuthGuardAdmin, AuthGuardUser } from "./guards/AuthGuard";
import AdminPage from "./pages/AdminPage";
import ApplyPage from "./pages/ApplyPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import ViewAllApplicationPage from "./pages/ViewAllApplicationPage";
import SuccessApplySent from "./components/SuccessApplySent";
import DonatePage from "./pages/DonatePage";
import { useState } from "react";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  const [amountFromDonation, setAmountFromDonation] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/apply"
          element={
            <AuthGuardUser>
              <ApplyPage />
            </AuthGuardUser>
          }
        />
        <Route
          path="/donate"
          element={
            <AuthGuardUser>
              <DonatePage setAmountFromDonation={setAmountFromDonation} />
            </AuthGuardUser>
          }
        />
        <Route
          path="/admin"
          element={
            <AuthGuardAdmin roles={Role.ADMIN}>
              <AdminPage />
            </AuthGuardAdmin>
          }
        />
        <Route path="/viewAllApplicant" element={<ViewAllApplicationPage />} />
        <Route
          path="/successApplySent"
          element={<SuccessApplySent text="Applied Successfully" />}
        />
        <Route
          path="/success_donated"
          element={
            <SuccessApplySent
              text="Please click the link below to proceed to payment"
              amountFromDonation={amountFromDonation}
            />
          }
        />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route
          path="/resetpassword/:resetToken"
          element={<ResetPasswordPage />}
        />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/401" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
