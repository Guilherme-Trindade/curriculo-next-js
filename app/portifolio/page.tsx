import Footer from "./footer"
import Header from "./header"
import Main from "./main"

export default function Page() {
  return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <Header />
          <Main />
          <Footer />
        </div>
  )
}
