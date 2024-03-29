import React from "react";
import styles from "./Requisitos.module.css";
import { IRequisitosProps} from "../../../../types/TextTypes";

export default function Requisitos({ title, introducao, item_1, item_2, item_3}: IRequisitosProps) {
  return (
    <div className={styles.requisitos}>
      <h2 className={styles.titulo_secundario}>{title}</h2>
      <p className={styles.texto}>{introducao}</p>
      <ul>
        <li className={styles.texto}>{item_1}</li>
        <li className={styles.texto}>{item_2} </li>
        <li className={styles.texto}>{item_3} </li>
      </ul>
    </div>
  );
}
