import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function pagesDirectory(dir) {
  return join(process.cwd(), dir);
}

export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir)
}

export function getBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items = {}
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export function getPageContentBySlug(slug, fields = [], dir) {
  return getBySlug(pagesDirectory(dir), slug, fields)
}

export function getAllSlugPages(fields = [], dir) {
  const slugs = getSlugsFromDirectory(pagesDirectory(dir))
  const pages = slugs.map((slug) => getPageContentBySlug(slug, fields, dir))
  return pages
}
