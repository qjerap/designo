import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.scss";

const Footer = () => {
  const { t, i18n } = useTranslation();
  // {t('food.label')}

  return (
    <div className="footer">
    </div>
  );
};

export default Footer;
