import React from "react";

interface BoxedLayoutProps {
  children: React.ReactNode;
}
const BoxedLayout = ({ children }: BoxedLayoutProps) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      {children}
    </div>
  );
};

export default BoxedLayout;
