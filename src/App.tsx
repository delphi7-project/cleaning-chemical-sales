
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Catalog from "./pages/Catalog";
import ProductCatalogPage from "./pages/ProductCatalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Services from "./pages/Services";
import News from "./pages/News";
import Brands from "./pages/Brands";
import Certificates from "./pages/Certificates";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import Wholesale from "./pages/Wholesale";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Partners from "./pages/Partners";
import Training from "./pages/Training";
import Equipment from "./pages/Equipment";
import Comparison from "./pages/Comparison";
import Calculator from "./pages/Calculator";
import Safety from "./pages/Safety";
import Ecology from "./pages/Ecology";
import Promotions from "./pages/Promotions";
import Support from "./pages/Support";
import Industries from "./pages/Industries";
import Research from "./pages/Research";
import Sustainability from "./pages/Sustainability";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/products" element={<ProductCatalogPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/training" element={<Training />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/ecology" element={<Ecology />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/research" element={<Research />} />
          <Route path="/sustainability" element={<Sustainability />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
