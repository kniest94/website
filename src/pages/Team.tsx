import React from "react";
import Layout from "@theme/Layout";
import TeamMember from "../components/member";
import team from "../team.json";

export default function Team() {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Über uns</h2>
          </div>
          <div className="row">
            <p>
              Darts erfreut sich seit einigen Jahren einer immer größeren
              Beliebtheit. Die Hallen sind gefüllt, die Einschaltquoten steigen
              und Darts wird auch in den Medien immer bekannter.
            </p>
            <p>
              Darts war jahrelang eine Randsportart im Schatten der großen
              Events wie Fußball, Handball oder Basketball. Dies hat sich jedoch
              in den letzten Jahren langsam, aber stetig gewandelt.
              Darts ist zum Trendsport geworden und dies hat gleich mehrere
              Gründe. Einer der wichtigsten ist, dass Darts wohl eher als
              Volkssport bezeichnet und von jedermann ausgeübt werden kann.
            </p>
            <p>
              Nach der Gründungsversammlung vom 15.11.2021 wurde der DC Kirrberg
              als gemeinnüziger Verein eigetragen und wir sind Mitglied im
              Landesportverband für das Saarland (LSVS).
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="hero__title margin--none">Vorstand</h2>
          </div>
          <div className="row">
            {team &&
              team.map((props, idx) => <TeamMember key={idx} {...props} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
