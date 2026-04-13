import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import TourDiary from "./pages/TourDiary";
import DestinationDetail from "./pages/DestinationDetail";
import Community from "./pages/Community";
import StoriesDestination from "./pages/StoriesDestination";
import Learn from "./pages/Learn";
import LearnReviewIndex from "./pages/learn-review/LearnReviewIndex";
import Option1WarmGuidance from "./pages/learn-review/Option1WarmGuidance";
import Option2TravelHandbook from "./pages/learn-review/Option2TravelHandbook";
import Option3FamilyJourneyBoard from "./pages/learn-review/Option3FamilyJourneyBoard";
import Option4ModernEditorial from "./pages/learn-review/Option4ModernEditorial";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FirstTimeEuropeTraveler from "./pages/blog/FirstTimeEuropeTraveler";
import HowToChooseYourFirstGroupTour from "./pages/blog/HowToChooseYourFirstGroupTour";
import BestTimeToVisitPopularDestinations from "./pages/blog/BestTimeToVisitPopularDestinations";
import VisaDocumentsChecklist from "./pages/blog/VisaDocumentsChecklist";
import TravelInsuranceExplained from "./pages/blog/TravelInsuranceExplained";
import PassportAndVisaGuideIndianTravellers from "./pages/blog/PassportAndVisaGuideIndianTravellers";
import VegFriendlyDishesEurope from "./pages/blog/VegFriendlyDishesEurope";
import FunGroupGamesBuses from "./pages/blog/FunGroupGamesBuses";
import PackingLight10DayTours from "./pages/blog/PackingLight10DayTours";
import UltimatePackingListForDifferentClimates from "./pages/blog/UltimatePackingListForDifferentClimates";
import CarryOnVsCheckedLuggage from "./pages/blog/CarryOnVsCheckedLuggage";
import StayingSafeWhileTravellingInGroups from "./pages/blog/StayingSafeWhileTravellingInGroups";
import HealthPrecautionsForInternationalTravel from "./pages/blog/HealthPrecautionsForInternationalTravel";
import EmergencyContactsAndHelplinesAbroad from "./pages/blog/EmergencyContactsAndHelplinesAbroad";
import { VisitorCounterProvider } from "@/hooks/use-visitor-counter";

const queryClient = new QueryClient();
const isLearnReviewEnabled = import.meta.env.VITE_ENABLE_LEARN_REVIEW === "true";

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
        {isLearnReviewEnabled && (
          <>
            <Route path="/learn-review" element={<PageTransition><LearnReviewIndex /></PageTransition>} />
            <Route path="/learn-review/option-1" element={<PageTransition><Option1WarmGuidance /></PageTransition>} />
            <Route path="/learn-review/option-2" element={<PageTransition><Option2TravelHandbook /></PageTransition>} />
            <Route path="/learn-review/option-3" element={<PageTransition><Option3FamilyJourneyBoard /></PageTransition>} />
            <Route path="/learn-review/option-4" element={<PageTransition><Option4ModernEditorial /></PageTransition>} />
          </>
        )}
        <Route path="/learn/first-time-europe-traveler" element={<PageTransition><FirstTimeEuropeTraveler /></PageTransition>} />
        <Route path="/learn/how-to-choose-your-first-group-tour" element={<PageTransition><HowToChooseYourFirstGroupTour /></PageTransition>} />
        <Route path="/learn/best-time-to-visit-popular-destinations" element={<PageTransition><BestTimeToVisitPopularDestinations /></PageTransition>} />
        <Route path="/learn/visa-documents-checklist" element={<PageTransition><VisaDocumentsChecklist /></PageTransition>} />
        <Route path="/learn/travel-insurance-explained" element={<PageTransition><TravelInsuranceExplained /></PageTransition>} />
        <Route path="/learn/passport-and-visa-guide-indian-travellers" element={<PageTransition><PassportAndVisaGuideIndianTravellers /></PageTransition>} />
        <Route path="/learn/veg-friendly-dishes-europe" element={<PageTransition><VegFriendlyDishesEurope /></PageTransition>} />
        <Route path="/learn/fun-group-games-buses" element={<PageTransition><FunGroupGamesBuses /></PageTransition>} />
        <Route path="/learn/packing-light-10-day-tours" element={<PageTransition><PackingLight10DayTours /></PageTransition>} />
        <Route path="/learn/ultimate-packing-list-for-different-climates" element={<PageTransition><UltimatePackingListForDifferentClimates /></PageTransition>} />
        <Route path="/learn/carry-on-vs-checked-luggage" element={<PageTransition><CarryOnVsCheckedLuggage /></PageTransition>} />
        <Route path="/learn/staying-safe-while-travelling-in-groups" element={<PageTransition><StayingSafeWhileTravellingInGroups /></PageTransition>} />
        <Route path="/learn/health-precautions-for-international-travel" element={<PageTransition><HealthPrecautionsForInternationalTravel /></PageTransition>} />
        <Route path="/learn/emergency-contacts-and-helplines-abroad" element={<PageTransition><EmergencyContactsAndHelplinesAbroad /></PageTransition>} />
        <Route path="/lifestyle" element={<Navigate replace to="/learn" />} />
        <Route path="/lifestyle/veg-friendly-dishes-europe" element={<Navigate replace to="/learn/veg-friendly-dishes-europe" />} />
        <Route path="/lifestyle/fun-group-games-buses" element={<Navigate replace to="/learn/fun-group-games-buses" />} />
        <Route path="/lifestyle/packing-light-10-day-tours" element={<Navigate replace to="/learn/packing-light-10-day-tours" />} />
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
      <VisitorCounterProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </VisitorCounterProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
