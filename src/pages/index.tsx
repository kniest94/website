import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import SimplleMap from '../components/google_map.component'


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.buttons}>
          <img src="/img/logo.svg" />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            target="_blank"
            href="http://online-mitgliedsantrag.dckirrberg.de/">
            Zum Anmeldeforumlar
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Herzlich Willkommen auf der Webseite des Dart Club in Kirrberg - DC Kirrberg!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <SimplleMap /> */}
      </main>

    </Layout>
  );
}
