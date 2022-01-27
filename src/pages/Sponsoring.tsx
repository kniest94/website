import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Sponsoring</h2>
          </div>
          <div className="row">
            <p>
              Der DC Kirrberg e.V. legt hierbei großes Gewicht auf die Förderung
              von Dartspielern und möchte mit regelmäßigen Veranstaltungen und
              Events die Beliebtheit und das Interesse der Sportart steigern.
            </p>
            <p>
              Im Sponsoring-Konzept stellen wir Ihnen unseren Verein vor und
              zeigen Ihnen die Möglichkeiten auf, wie Sie uns unterstützen und
              gleichzeitig davon profitieren können.
            </p>
            <a
              className="button button--secondary button--lg"
              target="_blank"
              href="/dateien/Sponsorenkonzept_DCK.pdf"
            >
              Zum Sponsoring-Konzept
            </a>
            <br />
            <p>
              Überzeugt? Dann gehts hier direkt weiter zum Formular, vielen
              Dank!
            </p>
            <a
              className="button button--secondary "
              target="_blank"
              href="http://sponsoring.dckirrberg.de/"
            >
              Zum Sponsorenformular
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
