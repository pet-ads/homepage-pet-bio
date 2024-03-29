import React from "react";
import styles from "./LogoIFSP.module.css";
import IFSPLogo from "../../../resources/logos/LogoIfsp.png";
import Link from "../../Link/Link";
import Image from 'next/image'; 

export default function LogoIFSP() {
  const IFSP_SPO_URL = "https://spo.ifsp.edu.br/";
  return (
    <Link href={IFSP_SPO_URL} rel="noreferrer" target="_blank">
      <Image
        className={styles.IFSPLogo}
        src={IFSPLogo}
        priority
        alt="Identidade visual IFSP/SPO"
      />
    </Link>
  );
}
