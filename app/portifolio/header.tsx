
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return(
        <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Image
                src="/perfil.jpeg?height=120&width=120"
                alt="Foto de perfil"
                width={120}
                height={120}
                className="rounded-full border-4 border-blue-100"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Guilherme Trindade</h1>
              <p className="text-xl text-blue-600 mb-3">Desenvolvedor Full Stack</p>
              <p className="text-gray-600 max-w-2xl">
                Desenvolvedor Full Stack com experiência sólida em React.js, PHP, JavaScript, Docker, Node e Symfony. Atuo na área desde 2022, criando soluções escaláveis e focadas em performance. Tenho forte domínio em metodologias ágeis e integração contínua, além de interesse constante por boas práticas de arquitetura de software e experiências de usuário modernas.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>guilherme.venturini@gvhub.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-gray-500">(27) 99785-3165</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Vitória, ES</span>
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/Guilherme-Trindade" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://linkedin.com/in/guilherme-trindade-355b8b246" target="_blank">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}