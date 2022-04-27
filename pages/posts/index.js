import PostsGrid from '../../components/posts/postsGrid'

import { getAllPosts } from '../../utils/postsUtils'

import classes from './allPosts.module.scss'

export default function AllPosts(props) {
  const { allPosts } = props

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={allPosts} />
    </section>
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
