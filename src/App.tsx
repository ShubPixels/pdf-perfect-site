import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import TourDiary from "./pages/TourDiary";
import DestinationDetail from "./pages/DestinationDetail";
import Community from "./pages/Community";
import StoriesDestination from "./pages/StoriesDestination";
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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/tour-diary/:tourId" element={<PageTransition><TourDiary /></PageTransition>} />
        <Route path="/destination/:destinationId" element={<PageTransition><DestinationDetail /></PageTransition>} />
        <Route path="/stories" element={<PageTransition><Community /></PageTransition>} />
        <Route path="/stories/:destinationSlug" element={<PageTransition><StoriesDestination /></PageTransition>} />
        {/* Redirects for old routes */}
        <Route path="/explore" element={<PageTransition><Community /></PageTransition>} />
        <Route path="/community" element={<PageTransition><Community /></PageTransition>} />
        <Route path="/learn" element={<PageTransition><Learn /></PageTransition>} />
        <Route path="/learn/first-time-europe-traveler" element={<PageTransition><FirstTimeEuropeTraveler /></PageTransition>} />
        <Route path="/learn/visa-documents-checklist" element={<PageTransition><VisaDocumentsChecklist /></PageTransition>} />
        <Route path="/learn/travel-insurance-explained" element={<PageTransition><TravelInsuranceExplained /></PageTransition>} />
        <Route path="/lifestyle" element={<PageTransition><Lifestyle /></PageTransition>} />
        <Route path="/lifestyle/veg-friendly-dishes-europe" element={<PageTransition><VegFriendlyDishesEurope /></PageTransition>} />
        <Route path="/lifestyle/fun-group-games-buses" element={<PageTransition><FunGroupGamesBuses /></PageTransition>} />
        <Route path="/lifestyle/packing-light-10-day-tours" element={<PageTransition><PackingLight10DayTours /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
