import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts')

export function getPostData(filename) {
  const filePath = path.join(POSTS_DIRECTORY, filename)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postSlug = filename.replace(/\.md$/, '')
  const postData = { slug: postSlug, ...data, content }

  return postData
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(POSTS_DIRECTORY)

  const allPosts = postFiles
    .map(postFile => getPostData(postFile))
    .sort((postA, postB) => postA.date > postB.date ? -1 : 1)

  return allPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts
}
