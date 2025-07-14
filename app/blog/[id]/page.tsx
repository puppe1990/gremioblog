import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, Share2, Bookmark, ArrowLeft, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - in a real app, this would come from your CMS or database
const blogPost = {
  id: 1,
  title: "Análise Tática: Como o Grêmio Dominou o Clássico Gre-Nal",
  excerpt:
    "Uma análise profunda da vitória tricolor no último clássico, destacando as mudanças táticas que fizeram a diferença no resultado final.",
  author: "Carlos Silva",
  date: "2024-01-15",
  readTime: "8 min",
  category: "Análise Tática",
  image: "/placeholder.svg?height=400&width=800",
  content: `
    <p>O último Gre-Nal ficará marcado na história não apenas pelo resultado, mas pela forma como o Grêmio conseguiu impor seu jogo e dominar completamente o rival. Nesta análise, vamos destrinchar as principais mudanças táticas que levaram à vitória tricolor.</p>

    <h2>A Formação Inicial</h2>
    <p>O técnico optou por uma formação 4-3-3 que se transformava em 4-5-1 na fase defensiva, permitindo maior controle do meio-campo e transições mais rápidas para o ataque. Esta escolha tática se mostrou fundamental para o controle do jogo.</p>

    <h2>Pressão Alta e Recuperação da Bola</h2>
    <p>Um dos aspectos mais impressionantes da performance gremista foi a intensidade da pressão exercida sobre a saída de bola adversária. O time conseguiu recuperar a posse em zonas avançadas do campo em diversas ocasiões, criando oportunidades de gol de forma consistente.</p>

    <h2>Movimentação dos Atacantes</h2>
    <p>A movimentação coordenada do trio de ataque foi outro ponto alto da partida. Com constantes trocas de posição e busca por espaços nas costas da defesa adversária, o Grêmio conseguiu criar superioridade numérica em momentos cruciais do jogo.</p>

    <h2>Conclusão</h2>
    <p>Esta vitória representa não apenas três pontos importantes, mas também a consolidação de um estilo de jogo que pode ser a chave para o sucesso da temporada. A evolução tática demonstrada pelo time é um sinal positivo para os desafios que estão por vir.</p>
  `,
}

const relatedPosts = [
  {
    id: 2,
    title: "História: Os 10 Maiores Ídolos da História Gremista",
    category: "História",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 3,
    title: "Libertadores 2024: Expectativas e Preparação",
    category: "Libertadores",
    image: "/placeholder.svg?height=150&width=250",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <article className="container px-4 py-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {blogPost.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(blogPost.date).toLocaleDateString("pt-BR")}
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">{blogPost.title}</h1>

        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{blogPost.excerpt}</p>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {blogPost.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {blogPost.readTime}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Curtir
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Salvar
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src={blogPost.image || "/placeholder.svg"}
          alt={blogPost.title}
          width={800}
          height={400}
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

      <Separator className="my-12" />

      {/* Author Bio */}
      <div className="bg-muted/30 rounded-lg p-6 mb-12">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">CS</span>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">{blogPost.author}</h3>
            <p className="text-muted-foreground mb-4">
              Jornalista esportivo especializado em análises táticas e cobertura do Grêmio. Acompanha o Tricolor há mais
              de 15 anos e é apaixonado por futebol brasileiro.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Seguir
              </Button>
              <Button variant="ghost" size="sm">
                Ver Perfil
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Artigos Relacionados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="flex gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={120}
                  height={80}
                  className="w-24 h-16 object-cover rounded flex-shrink-0"
                />
                <div>
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
