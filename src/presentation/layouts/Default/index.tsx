import React from "react";
import styles from "./styles.scss";
import Header from "@presentation/components/Header";
import Footer from "@presentation/components/Footer";

type LayoutDefaultProps = {
  children: React.ReactNode;
};

const LayoutDefault: React.FC<LayoutDefaultProps> = ({
  children,
}: LayoutDefaultProps) => {
  return (
    <div className={styles.layoutDefaultWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutDefault;
