import { Suspense, lazy, type ComponentType } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/PageTransition";
import { VisitorCounterProvider } from "@/hooks/use-visitor-counter";

const queryClient = new QueryClient();
const isLearnReviewEnabled = import.meta.env.VITE_ENABLE_LEARN_REVIEW === "true";

const Index = lazy(() => import("./pages/Index"));
const TourDiary = lazy(() => import("./pages/TourDiary"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const Community = lazy(() => import("./pages/Community"));
const StoriesDestination = lazy(() => import("./pages/StoriesDestination"));
const Learn = lazy(() => import("./pages/Learn"));
const LearnReviewIndex = lazy(() => import("./pages/learn-review/LearnReviewIndex"));
const Option1WarmGuidance = lazy(() => import("./pages/learn-review/Option1WarmGuidance"));
const Option2TravelHandbook = lazy(() => import("./pages/learn-review/Option2TravelHandbook"));
const Option3FamilyJourneyBoard = lazy(() => import("./pages/learn-review/Option3FamilyJourneyBoard"));
const Option4ModernEditorial = lazy(() => import("./pages/learn-review/Option4ModernEditorial"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FirstTimeEuropeTraveler = lazy(() => import("./pages/blog/FirstTimeEuropeTraveler"));
const HowToChooseYourFirstGroupTour = lazy(() => import("./pages/blog/HowToChooseYourFirstGroupTour"));
const BestTimeToVisitPopularDestinations = lazy(() => import("./pages/blog/BestTimeToVisitPopularDestinations"));
const VisaDocumentsChecklist = lazy(() => import("./pages/blog/VisaDocumentsChecklist"));
const TravelInsuranceExplained = lazy(() => import("./pages/blog/TravelInsuranceExplained"));
const PassportAndVisaGuideIndianTravellers = lazy(() => import("./pages/blog/PassportAndVisaGuideIndianTravellers"));
const VegFriendlyDishesEurope = lazy(() => import("./pages/blog/VegFriendlyDishesEurope"));
const FunGroupGamesBuses = lazy(() => import("./pages/blog/FunGroupGamesBuses"));
const PackingLight10DayTours = lazy(() => import("./pages/blog/PackingLight10DayTours"));
const UltimatePackingListForDifferentClimates = lazy(() => import("./pages/blog/UltimatePackingListForDifferentClimates"));
const CarryOnVsCheckedLuggage = lazy(() => import("./pages/blog/CarryOnVsCheckedLuggage"));
const StayingSafeWhileTravellingInGroups = lazy(() => import("./pages/blog/StayingSafeWhileTravellingInGroups"));
const HealthPrecautionsForInternationalTravel = lazy(() => import("./pages/blog/HealthPrecautionsForInternationalTravel"));
const EmergencyContactsAndHelplinesAbroad = lazy(() => import("./pages/blog/EmergencyContactsAndHelplinesAbroad"));

const RouteFallback = () => (
  <div className="min-h-[45vh] bg-white">
    <div className="container mx-auto flex min-h-[45vh] items-center justify-center px-4">
      <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm text-muted-foreground shadow-sm">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
        Loading page
      </div>
    </div>
  </div>
);

const renderLazyRoute = (Component: ComponentType) => (
  <PageTransition>
    <Suspense fallback={<RouteFallback />}>
      <Component />
    </Suspense>
  </PageTransition>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={renderLazyRoute(Index)} />
        <Route path="/tour-diary/:tourId" element={renderLazyRoute(TourDiary)} />
        <Route path="/destination/:destinationId" element={renderLazyRoute(DestinationDetail)} />
        <Route path="/stories" element={renderLazyRoute(Community)} />
        <Route path="/stories/:destinationSlug" element={renderLazyRoute(StoriesDestination)} />
        {/* Redirects for old routes */}
        <Route path="/explore" element={renderLazyRoute(Community)} />
        <Route path="/community" element={renderLazyRoute(Community)} />
        <Route path="/learn" element={renderLazyRoute(Learn)} />
        {isLearnReviewEnabled && (
          <>
            <Route path="/learn-review" element={renderLazyRoute(LearnReviewIndex)} />
            <Route path="/learn-review/option-1" element={renderLazyRoute(Option1WarmGuidance)} />
            <Route path="/learn-review/option-2" element={renderLazyRoute(Option2TravelHandbook)} />
            <Route path="/learn-review/option-3" element={renderLazyRoute(Option3FamilyJourneyBoard)} />
            <Route path="/learn-review/option-4" element={renderLazyRoute(Option4ModernEditorial)} />
          </>
        )}
        <Route path="/learn/first-time-europe-traveler" element={renderLazyRoute(FirstTimeEuropeTraveler)} />
        <Route path="/learn/how-to-choose-your-first-group-tour" element={renderLazyRoute(HowToChooseYourFirstGroupTour)} />
        <Route path="/learn/best-time-to-visit-popular-destinations" element={renderLazyRoute(BestTimeToVisitPopularDestinations)} />
        <Route path="/learn/visa-documents-checklist" element={renderLazyRoute(VisaDocumentsChecklist)} />
        <Route path="/learn/travel-insurance-explained" element={renderLazyRoute(TravelInsuranceExplained)} />
        <Route path="/learn/passport-and-visa-guide-indian-travellers" element={renderLazyRoute(PassportAndVisaGuideIndianTravellers)} />
        <Route path="/learn/veg-friendly-dishes-europe" element={renderLazyRoute(VegFriendlyDishesEurope)} />
        <Route path="/learn/fun-group-games-buses" element={renderLazyRoute(FunGroupGamesBuses)} />
        <Route path="/learn/packing-light-10-day-tours" element={renderLazyRoute(PackingLight10DayTours)} />
        <Route path="/learn/ultimate-packing-list-for-different-climates" element={renderLazyRoute(UltimatePackingListForDifferentClimates)} />
        <Route path="/learn/carry-on-vs-checked-luggage" element={renderLazyRoute(CarryOnVsCheckedLuggage)} />
        <Route path="/learn/staying-safe-while-travelling-in-groups" element={renderLazyRoute(StayingSafeWhileTravellingInGroups)} />
        <Route path="/learn/health-precautions-for-international-travel" element={renderLazyRoute(HealthPrecautionsForInternationalTravel)} />
        <Route path="/learn/emergency-contacts-and-helplines-abroad" element={renderLazyRoute(EmergencyContactsAndHelplinesAbroad)} />
        <Route path="/lifestyle" element={<Navigate replace to="/learn" />} />
        <Route path="/lifestyle/veg-friendly-dishes-europe" element={<Navigate replace to="/learn/veg-friendly-dishes-europe" />} />
        <Route path="/lifestyle/fun-group-games-buses" element={<Navigate replace to="/learn/fun-group-games-buses" />} />
        <Route path="/lifestyle/packing-light-10-day-tours" element={<Navigate replace to="/learn/packing-light-10-day-tours" />} />
        <Route path="/about" element={renderLazyRoute(About)} />
        <Route path="/contact" element={renderLazyRoute(Contact)} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={renderLazyRoute(NotFound)} />
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
