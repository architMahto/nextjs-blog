import PostsGrid from '../posts/postsGrid'

import classes from './featuredPosts.module.scss'

export default function FeaturedPosts(props) {
  const { posts } = props

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}
