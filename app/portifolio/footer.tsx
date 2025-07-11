
import { Button } from "@/components/ui/button"
import {
  Linkedin,
  Mail
} from "lucide-react"
import Link from "next/link"

export default function Footer () {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">Vamos trabalhar juntos!</p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" asChild>
              <Link href="mailto:guilhermetrindade34@gmail.com?subject=Interessado em seu trabalho" target="_blank">
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    )
}