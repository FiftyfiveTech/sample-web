import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { SignUpForm } from "@pages";
import { PublicLayout } from "@layouts";

function AppRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<PublicLayout />}>
        <Route path={"/"} element={<SignUpForm />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
export default AppRoutes;
