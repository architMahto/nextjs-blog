import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import PostHeader from '../../components/posts/postHeader'

import { getPostData, getPostsFiles } from '../../utils/postsUtils'

import classes from './postDetails.module.scss'

export default function PostDetails(props) {
  const { postData: { title, slug, image, content} } = props
  const imagePath = `/images/posts/${slug}/${image}`

  const customRenderers = {
    img: ({ alt, src }) => (
      <Image
        src={`/images/posts/${slug}/${src}`}
        alt={alt}
        width={600}
        height={300}
      />
    )
  }

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {content}
      </ReactMarkdown>
    </article>
  )
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles()
  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug =>({ params: { postSlug: slug } })),
    fallback: false
  }
}

export function getStaticProps(context) {
  const { params: { postSlug } } = context

  const postData = getPostData(postSlug)

  return {
    props: { postData: {...postData, date: postData.date.toString() } },
    revalidate: 600
  }
}
