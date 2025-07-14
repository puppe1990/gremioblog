import Link from "next/link"
import { Github, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-xl">Grêmio Blog</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Blog independente dedicado ao Grêmio Foot-Ball Porto Alegrense. Análises, história e paixão tricolor.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/analises" className="text-muted-foreground hover:text-foreground">
                  Análises
                </Link>
              </li>
              <li>
                <Link href="/historia" className="text-muted-foreground hover:text-foreground">
                  História
                </Link>
              </li>
              <li>
                <Link href="/stats" className="text-muted-foreground hover:text-foreground">
                  Estatísticas
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categoria/brasileirao" className="text-muted-foreground hover:text-foreground">
                  Brasileirão
                </Link>
              </li>
              <li>
                <Link href="/categoria/libertadores" className="text-muted-foreground hover:text-foreground">
                  Libertadores
                </Link>
              </li>
              <li>
                <Link href="/categoria/historia" className="text-muted-foreground hover:text-foreground">
                  História
                </Link>
              </li>
              <li>
                <Link href="/categoria/tatica" className="text-muted-foreground hover:text-foreground">
                  Análise Tática
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Grêmio Blog. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacidade" className="text-sm text-muted-foreground hover:text-foreground">
              Privacidade
            </Link>
            <Link href="/termos" className="text-sm text-muted-foreground hover:text-foreground">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
