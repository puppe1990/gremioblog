import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { fetchGremioNews } from "@/lib/rss"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  link: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const items = await fetchGremioNews()
  return items.map((item, index) => ({
    id: index,
    title: item.title,
    excerpt: item.contentSnippet,
    date: item.pubDate,
    link: item.link,
  }))
}

const categories = ["Todos", "Notícias"]

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  return (
    <div className="container px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Grêmio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Análises profundas, histórias marcantes e tudo sobre o Tricolor de Porto Alegre
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Buscar artigos..." className="pl-10" />
          </div>
          <Button>Buscar</Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Todos" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {blogPosts[0] && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Artigo em Destaque</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg"
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(blogPosts[0].date).toLocaleDateString("pt-BR")}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{blogPosts[0].title}</h3>

                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>

                <Button asChild>
                  <a href={blogPosts[0].link} target="_blank" rel="noopener noreferrer">
                    Ler Artigo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Todos os Artigos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className="line-clamp-2 leading-tight">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </div>

                  <Button variant="ghost" size="sm" asChild>
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Carregar Mais Artigos
        </Button>
      </div>
    </div>
  )
}
