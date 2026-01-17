import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TourDiary from "./pages/TourDiary";
import DestinationDetail from "./pages/DestinationDetail";
import Explore from "./pages/Explore";
import Community from "./pages/Community";
import Learn from "./pages/Learn";
import Lifestyle from "./pages/Lifestyle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FirstTimeEuropeTraveler from "./pages/blog/FirstTimeEuropeTraveler";
import VisaDocumentsChecklist from "./pages/blog/VisaDocumentsChecklist";
import TravelInsuranceExplained from "./pages/blog/TravelInsuranceExplained";
import VegFriendlyDishesEurope from "./pages/blog/VegFriendlyDishesEurope";
import FunGroupGamesBuses from "./pages/blog/FunGroupGamesBuses";
import PackingLight10DayTours from "./pages/blog/PackingLight10DayTours";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tour-diary/:tourId" element={<TourDiary />} />
          <Route path="/destination/:destinationId" element={<DestinationDetail />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/community" element={<Community />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/first-time-europe-traveler" element={<FirstTimeEuropeTraveler />} />
          <Route path="/learn/visa-documents-checklist" element={<VisaDocumentsChecklist />} />
          <Route path="/learn/travel-insurance-explained" element={<TravelInsuranceExplained />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/lifestyle/veg-friendly-dishes-europe" element={<VegFriendlyDishesEurope />} />
          <Route path="/lifestyle/fun-group-games-buses" element={<FunGroupGamesBuses />} />
          <Route path="/lifestyle/packing-light-10-day-tours" element={<PackingLight10DayTours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
