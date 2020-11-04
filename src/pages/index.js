import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './styles.module.css'

  {
  },
  {
  },
  {
  },
]

      <p>{description}</p>
    </div>

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title="Home"
      description="User guides, quick-reference guides, developer/contributor best practices for ShabadOS"
    >
      <header className={clsx( 'hero hero--primary', styles.heroBanner )}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>

          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl( 'docs/' )}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
            </div>
      </main>
    </Layout>
  )
}

export default Home
