import Parser from 'rss-parser'

export interface NewsItem {
  title: string
  link: string
  pubDate: string
  contentSnippet: string
}

const FEED_URL = 'https://news.google.com/rss/search?q=gremio&hl=pt-BR&gl=BR&ceid=BR:pt-419'

const parser = new Parser()

export async function fetchGremioNews(): Promise<NewsItem[]> {
  const feed = await parser.parseURL(FEED_URL)
  return feed.items.map(item => ({
    title: item.title ?? '',
    link: item.link ?? '#',
    pubDate: item.isoDate ?? item.pubDate ?? '',
    contentSnippet: item.contentSnippet ?? item.content ?? ''
  }))
}
