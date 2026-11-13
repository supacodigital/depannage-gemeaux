import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  function handlePathname() {
    return location.pathname === "/" ? "home" : location.pathname.slice(1);
  }

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main className="container" id={handlePathname()}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
