import { Fragment } from 'react'
import FeaturedPosts from '../components/homePage/featuredPosts'

import Hero from '../components/homePage/hero'

const DUMMY_POSTS = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React frameword for production - it makes building full stack React apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs'
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React frameword for production - it makes building full stack React apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs2'
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React frameword for production - it makes building full stack React apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs3'
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React frameword for production - it makes building full stack React apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs4'
  },
]

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}
