"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Calendar,
  Building,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Foto de perfil"
                width={120}
                height={120}
                className="rounded-full border-4 border-blue-100"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Seu Nome</h1>
              <p className="text-xl text-blue-600 mb-3">Desenvolvedor Full Stack</p>
              <p className="text-gray-600 max-w-2xl">
                Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
                Especializado em tecnologias modernas e sempre em busca de novos desafios.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>seu.email@exemplo.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Habilidades Técnicas */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            Habilidades Técnicas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-purple-600" />
                  Mobile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">Expo</Badge>
                  <Badge variant="secondary">iOS</Badge>
                  <Badge variant="secondary">Android</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="w-5 h-5 text-orange-600" />
                  Ferramentas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Building className="w-6 h-6 text-blue-600" />
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Desenvolvedor Full Stack Sênior</CardTitle>
                    <CardDescription className="text-lg text-blue-600">Empresa Tech Ltda</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2022 - Presente</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Desenvolvimento de aplicações web modernas usando React, Next.js e TypeScript</li>
                  <li>• Criação de APIs RESTful robustas com Node.js e Express</li>
                  <li>• Implementação de arquiteturas escaláveis na AWS</li>
                  <li>• Liderança técnica de equipe de 5 desenvolvedores</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Desenvolvedor Frontend</CardTitle>
                    <CardDescription className="text-lg text-blue-600">StartupXYZ</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2020 - 2022</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Desenvolvimento de interfaces responsivas e acessíveis</li>
                  <li>• Integração com APIs e serviços externos</li>
                  <li>• Otimização de performance e SEO</li>
                  <li>• Colaboração próxima com designers UX/UI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projetos em Destaque */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-commerce Platform
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://exemplo.com" target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Sistema completo com autenticação, gestão de produtos, processamento de pagamentos e dashboard
                  administrativo.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Task Management App
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://exemplo.com" target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Aplicativo de gerenciamento de tarefas com colaboração em tempo real.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Aplicação colaborativa com atualizações em tempo real, drag & drop e sistema de notificações.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Weather Dashboard
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://exemplo.com" target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Dashboard interativo de previsão do tempo com mapas e gráficos.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                  <Badge variant="outline">OpenWeather API</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Interface moderna com visualizações interativas, mapas integrados e previsões detalhadas.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Educação */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Educação & Certificações</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bacharelado em Ciência da Computação</CardTitle>
                <CardDescription>Universidade Federal de São Paulo - 2018-2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formação sólida em algoritmos, estruturas de dados, engenharia de software e desenvolvimento web.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certificações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>AWS Certified Developer</span>
                  <Badge>2023</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Google Cloud Professional</span>
                  <Badge>2022</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>React Developer Certification</span>
                  <Badge>2021</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">Vamos trabalhar juntos!</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="mailto:seu.email@exemplo.com">
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
