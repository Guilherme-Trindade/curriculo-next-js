
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Calendar,
  Building,
} from "lucide-react"
import Link from "next/link"

export default function Main() {
    return (
        
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
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
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Symfony</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">MysqlSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
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
                    <CardTitle className="text-xl">Desenvolvedor Full Stack</CardTitle>
                    <CardDescription className="text-lg text-blue-600">Moveis Simonetti</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2022 - Presente</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-bold">
                  <li>
                    - Dashboard de Indicadores Logísticos
                    <ul className="pl-5 text-gray-500">
                        <li> • Descrição: Painel interno para acompanhamento de entregas, volume por transportadora e atrasos.</li>
                        <li> • Stack: React.js, Chart.js, API RESTful em Symfony.</li>
                        <li> • Destaques: Aumento da visibilidade operacional e tomada de decisão mais ágil.</li>
                    </ul>
                  </li>
                  <li>
                    - Integrações com sistemas de terceiros
                    <ul className="pl-5 text-gray-500">
                        <li> • Descrição: Desenvolvimento de integrações REST com plataformas de nota fiscal eletrônica, rastreamento e marketplaces.</li>
                        <li> • Stack: PHP, Node.js</li>
                        <li> • Destaques: Automação de processos e eliminação de tarefas manuais repetitivas.</li>
                    </ul>
                  </li>
                  <li>
                    - Sistema de Gestão de Pedidos B2B
                    <ul className="pl-5 text-gray-500">
                        <li> • Descrição: Aplicação web para representantes comerciais realizarem pedidos diretamente ao sistema da empresa, com integração ao ERP.</li>
                        <li> • Stack: Symfony, MySQL</li>
                        <li> • Destaques: Otimização do tempo de venda em campo e redução de erros operacionais.</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

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

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Educação & Certificações</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Análise e Desenvolvimento de Sistemas</CardTitle>
                <CardDescription>Multivix - 2021-2023</CardDescription>
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
                  <span>Microsserviços: explorando os conceitos</span>
                  <Badge>2023</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Administração do MySQL: segurança e otimização do banco</span>
                  <Badge>2022</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Entrega Contínua: confiabilidade e qualidade na implantação de software</span>
                  <Badge>2023</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Deploy no Amazon EC2: alta disponibilidade e escalabilidade de uma aplicação</span>
                  <Badge>2023</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span>Design Patterns em: padrões comportamentais e padrões estruturais</span>
                  <Badge>2024</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    )
}