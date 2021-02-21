import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'

const products = [
  {
    title: 'Database',
    description: 'A digital representation of Sikh Bani and other Panthic texts with a public logbook of sangat-sourced corrections.',
    link: 'database',
  },
  {
    title: 'Viewer',
    description: 'An online viewer of the Shabad OS Database. Can be used for issuing inaccuracies between source material and digital content.',
    link: 'viewer',
  },
  {
    title: 'Presenter',
    description: 'Desktop app for presenting the Shabad OS Database on projectors, TVs, and live streams.',
    link: 'presenter',
  },
  {
    title: 'Mobile',
    description: 'Android and iOS app for searching, navigating, and presenting the Shabad OS database. Currently a work in progress.',
    link: 'mobile',
  },
  {
    title: 'Gurmukhi Utils',
    description: 'General utilities for working with Gurmukhi text data.',
    link: 'gurmukhi-utils',
  },
  {
    title: 'Theme Tool',
    description: 'Web app that generates Overlays for Shabad OS Presenter',
    link: 'theme-tool',
  },
]

const gettingStarted = [
  {
    title: 'Learn more about the Database',
    description: 'At the heart of Shabad OS is an open source database containing the Sikh philosophy. Learning more about this philosophy and sharing it with others is our mission at Shabad OS.',
    link: 'database',
  },
  {
    title: 'Discover the Database online through your browser',
    description: 'You can view the contents, translations, and other notes in the Database using our Viewer. In addition, each individual line has it\'s metre calculated. The Viewer may also be used to share discrepancies between the source material and digital data.',
    link: 'viewer',
  },
  {
    title: 'Installing the Presenter on Windows / macOS',
    description: 'You can present the Database at gurdwaras, camps/retreats, and virtually through live captions on platforms like YouTube.',
    link: 'presenter/guides/installing-shabad-os-presenter',
  },
]

const featuredArticles = [
  {
    title: 'Check out Gurmukhi Utils',
    description: 'Gurmukhi Utils is a library for converting, analyzing, and testing gurmukhi strings.',
    link: 'gurmukhi-utils',
  },
  {
    title: 'Meet our community',
    description: 'Ongoing development, project management, and marketing is made possible by the support and dedication of volunteers.',
    link: 'community',
  },
  {
    title: 'Get comfortable with contributing',
    description: 'This document caters to developers or programmers that wish to write code and directly contribute to the source code of Shabad OS.',
    link: 'community/how-to-contribute',
  },
  {
    title: 'Learn about our coding guidelines',
    description: 'We choose to use spaces, not tabs.',
    link: 'community/coding-guidelines',
  },
  {
    title: 'Get support & feedback',
    description: 'Shabad OS is an open, community-driven, and volunteer project.',
    link: 'community/support-and-feedback',
  },
]

const Product = ( { title, description, link } ) => (
  <div className={clsx( 'col col--12', styles.feature )}>
    <Link to={link} className="product_card">
      <div className="card_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="svg-icon chevron-rounded-icon" viewBox="0 0 14 25"><path data-v-a76e93d8="" d="M1,24.4a.9.9,0,0,0,.7-.3L13.4,13a1,1,0,0,0,0-1.6L1.7.3A.9.9,0,0,0,1,0,.9.9,0,0,0,0,1a.9.9,0,0,0,.3.7l11,10.5L.3,22.7a.9.9,0,0,0-.3.7A.9.9,0,0,0,1,24.4Z" /></svg>
    </Link>
  </div>
)

const ArticlesList = ( { title, description, link } ) => (
  <div>
    <p>
      {description}
      <br />
      <Link to={link}>
        {title}
        {' >'}
      </Link>
    </p>
  </div>
)

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title="Products"
      description="User guides, quick-reference guides, developer/contributor best practices for ShabadOS"
    >
      <header className={clsx( 'hero hero--primary', styles.heroBanner )}>
        <div className="home container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>

      <main>
        <div className="home container padding-vert--lg">
          <h1>Product Directory</h1>
          <p className="lead">Explore our guides and articles by product.</p>
          <div className="row">
            {products.map( props => <Product key={props.title} {...props} /> ) }
          </div>
          <div className="row padding-vert--lg">
            <div className="col col--6">
              <h2>Getting Started</h2>
              {gettingStarted.map( props => <ArticlesList key={props.title} {...props} /> ) }
            </div>
            <div className="col col--6">
              <h2>Featured Articles</h2>
              {featuredArticles.map( props => <ArticlesList key={props.title} {...props} /> ) }
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
