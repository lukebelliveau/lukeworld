import glob from 'fast-glob'
import * as path from 'path'

interface Article {
  date: string
  slug: string
  component: any
}

async function importArticle(articleFilename: string): Promise<Article> {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a: any, z: any) => {
    return (new Date(z.date) as any) - (new Date(a.date) as any)
  })
}
