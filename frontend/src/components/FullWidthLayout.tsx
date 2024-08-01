import React from "react";

interface FullWidthLayoutProps {
  children: React.ReactNode;
}

const FullWidthLayout = ({ children }: FullWidthLayoutProps) => {
  return <div style={{ width: "100%", padding: "0 20px" }}>{children}</div>;
};

export default FullWidthLayout;
