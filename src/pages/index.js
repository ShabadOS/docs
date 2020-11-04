import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './styles.module.css'

const prodcuts = [
  {
    title: 'Database',
    description: 'The main product',
  },
  {
    title: 'Presenter',
    description: 'Desktop App',
  },
  {
    title: 'Mobile',
    description: 'Mobile App',
  },
  {
    title: 'Viewer',
    description: 'Web app to see DB and report errors',
  },
  {
    title: 'Gurmukhi Utils',
    description: 'Good lib',
  },
  {
    title: 'Theme Tool',
    description: 'One of its kind to make themes',
  },
  {
    title: 'Tutorials',
    description: 'For not so advanced folks',
  },
  {
    title: 'Contribute',
    description: 'Make world a better place!',
  },
]

const Product = ( { title, description } ) => (
  <div className={clsx( 'col col--4', styles.feature )}>
    <div className="text--center">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
)

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
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              { prodcuts.map( ( { title, description } ) => (
                <Product key={title} title={title} description={description} />
              ) )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
