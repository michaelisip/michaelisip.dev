import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import LayoutProvider from "@theme/Layout/Provider";
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import ErrorPageContent from "@theme/ErrorPageContent";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <LayoutProvider>
      <PageMetadata title={"test"} description={"test"} />

      <SkipToContent />

      <AnnouncementBar />

      <div
        id={SkipToContentFallbackId}
        className={clsx(ThemeClassNames.wrapper.main, styles.mainWrapper)}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          <div className={styles.container}>
            {/* Navbar with dark mode toggle and blogs button */}
            <header className={styles.header}>
              <NavbarColorModeToggle className={styles.colorModeToggle} />
              <Link to="/blog" className="button button--primary">
                Blogs
              </Link>
            </header>

            {/* Typing animation */}
            <main className={styles.main}>
              <p className={styles.staticText}>My name is</p>
              <h1 className={styles.typingAnimation}>Michael Isip...</h1>
            </main>
          </div>{" "}
        </ErrorBoundary>
      </div>
    </LayoutProvider>
  );
}
