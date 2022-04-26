import ReactMarkdown from 'react-markdown'

import PostHeader from '../../components/posts/postHeader'

import classes from './postDetails.module.scss'

const DUMMY_POST = {
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  slug: 'getting-started-with-nextjs',
  content: '# This is a first post'
}

export default function PostDetails() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}
