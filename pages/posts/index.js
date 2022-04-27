import { Fragment } from 'react'
import Head from 'next/head'

import PostsGrid from '../../components/posts/postsGrid'

import { getAllPosts } from '../../utils/postsUtils'

import classes from './allPosts.module.scss'

export default function AllPosts(props) {
  const { allPosts } = props

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming related tutorials and posts." />
      </Head>
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={allPosts} />
      </section>
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      allPosts
    }
  }
}
