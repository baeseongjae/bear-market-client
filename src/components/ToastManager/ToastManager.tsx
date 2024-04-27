"use client";

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

function ToastManager() {
  const { theme } = useTheme();

  return (
    <ToastContainer
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
      theme={theme}
      limit={1}
    />
  );
}

export default ToastManager;
