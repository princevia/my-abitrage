import { Footer, Home, Navbar, Services, Transactions } from "./components"

const App = () => (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Home />
      </div>
      {/* <Services /> */}
      {/* <Transactions /> */}
      <Footer />
    </div>
  )


export default App
