import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Análise Tática: Como o Grêmio Dominou o Clássico Gre-Nal",
    excerpt:
      "Uma análise profunda da vitória tricolor no último clássico, destacando as mudanças táticas que fizeram a diferença no resultado final.",
    author: "Carlos Silva",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Análise Tática",
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "História: Os 10 Maiores Ídolos da História Gremista",
    excerpt:
      "Relembre os jogadores que marcaram época no Tricolor e conquistaram o coração da torcida ao longo dos 121 anos de história.",
    author: "Maria Santos",
    date: "2024-01-12",
    readTime: "12 min",
    category: "História",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Libertadores 2024: Expectativas e Preparação",
    excerpt:
      "O que esperar do Grêmio na próxima edição da Copa Libertadores da América e como o time se prepara para o torneio.",
    author: "João Oliveira",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Libertadores",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Mercado da Bola: Reforços para 2024",
    excerpt:
      "Análise das contratações do Grêmio para a temporada 2024 e como elas podem impactar o desempenho da equipe.",
    author: "Pedro Costa",
    date: "2024-01-08",
    readTime: "5 min",
    category: "Mercado",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Arena do Grêmio: 10 Anos de História",
    excerpt:
      "Celebrando uma década da Arena do Grêmio, relembre os momentos mais marcantes vividos no estádio tricolor.",
    author: "Ana Rodrigues",
    date: "2024-01-05",
    readTime: "10 min",
    category: "História",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Base Gremista: Promessas para o Futuro",
    excerpt: "Conheça os jovens talentos das categorias de base que podem ser o futuro do Grêmio nos próximos anos.",
    author: "Roberto Lima",
    date: "2024-01-03",
    readTime: "7 min",
    category: "Base",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const categories = ["Todos", "Análise Tática", "História", "Libertadores", "Brasileirão", "Mercado", "Base"]

export default function BlogPage() {
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
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Artigo em Destaque</h2>
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {blogPosts[0].category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(blogPosts[0].date).toLocaleDateString("pt-BR")}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{blogPosts[0].title}</h3>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>

                <Button asChild>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    Ler Artigo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Todos os Artigos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge variant="secondary" className="absolute top-4 left-4 bg-blue-100 text-blue-800">
                  {post.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="line-clamp-2 leading-tight">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </div>

                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
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
