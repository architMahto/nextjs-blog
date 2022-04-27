import { Fragment } from 'react'
import Head from 'next/head'

import Hero from '../components/homePage/hero'
import PostsGrid from '../components/posts/postsGrid'

import { getFeaturedPosts } from '../utils/postsUtils'

import classes from './home.module.scss'

export default function Home(props) {
  const { featuredPosts } = props
  return (
    <Fragment>
      <Head>
        <title>NextJS Blog</title>
        <meta name="description" content="I post about programming and web development." />
      </Head>
      <Hero />
      <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={featuredPosts} />
      </section>
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      featuredPosts
    }
  }
}
