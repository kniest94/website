import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Downloads</h2>
            <p>Hier findest du alle wichtigen Dokumente direkt zum Download!</p>
            <a href="/dateien/Mitgliederantrag.pdf">Mitgliederantrag.pdf</a>
            <br />
            <a href="/dateien/Sponsorenkonzept_DCK.pdf">Sponsorenkonzept_DCK.pdf</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
