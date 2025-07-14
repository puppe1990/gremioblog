import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, Trophy, Users, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredPosts = [
  {
    id: 1,
    title: "Análise Tática: Como o Grêmio Dominou o Clássico Gre-Nal",
    excerpt:
      "Uma análise profunda da vitória tricolor no último clássico, destacando as mudanças táticas que fizeram a diferença.",
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
    excerpt: "Relembre os jogadores que marcaram época no Tricolor e conquistaram o coração da torcida.",
    author: "Maria Santos",
    date: "2024-01-12",
    readTime: "12 min",
    category: "História",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Libertadores 2024: Expectativas e Preparação",
    excerpt: "O que esperar do Grêmio na próxima edição da Copa Libertadores da América.",
    author: "João Oliveira",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Libertadores",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const stats = [
  { label: "Títulos Conquistados", value: "50+", icon: Trophy },
  { label: "Anos de História", value: "121", icon: Calendar },
  { label: "Torcedores Pelo Mundo", value: "15M+", icon: Users },
  { label: "Artigos Publicados", value: "200+", icon: BarChart3 },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Grêmio Blog</h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-2xl">🇪🇪</span>
              <span className="text-2xl">⚽️</span>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A fan-driven blog dedicated to <strong>Grêmio Foot-Ball Porto Alegrense</strong>, built with modern web
              technologies and a passion for Tricolor history, news, and analysis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <ArrowRight className="w-4 h-4 mr-2" />
              Ler Últimas Notícias
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Sobre o Blog
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Artigo em Destaque</h2>
            <p className="text-muted-foreground text-lg">
              As análises mais profundas e conteúdo exclusivo sobre o Tricolor
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={featuredPosts[0].image || "/placeholder.svg"}
                  alt={featuredPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {featuredPosts[0].category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPosts[0].date).toLocaleDateString("pt-BR")}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{featuredPosts[0].title}</h3>

                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{featuredPosts[0].excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPosts[0].readTime}
                    </div>
                  </div>

                  <Button asChild>
                    <Link href={`/blog/${featuredPosts[0].id}`}>
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimos Artigos</h2>
            <p className="text-muted-foreground text-lg">
              Fique por dentro das últimas análises, notícias e histórias do Grêmio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.slice(1).map((post) => (
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

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                Ver Todos os Artigos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold italic mb-4">
            "Com o Grêmio onde o Grêmio estiver."
          </blockquote>
          <cite className="text-blue-200 text-lg">— Hino do Grêmio</cite>
        </div>
      </section>
    </div>
  )
}
