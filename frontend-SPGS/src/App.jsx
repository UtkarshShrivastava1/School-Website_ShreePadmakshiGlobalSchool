import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home/Home"));
const OurSchool = React.lazy(() => import("./pages/About/OurSchool"));
const MountLiteraZeeSchools = React.lazy(() =>
  import("./pages/About/MountLiteraZeeSchools")
);
const OurMission = React.lazy(() => import("./pages/About/OurMission"));
const OurVision = React.lazy(() => import("./pages/About/OurVision"));
const DirectorMessage = React.lazy(() =>
  import("./pages/About/DirectorMessage")
);
const PrincipalMessage = React.lazy(() =>
  import("./pages/About/PrincipalMessage")
);
const ValueEducation = React.lazy(() => import("./pages/About/ValueEducation"));
const WhyMLZS = React.lazy(() => import("./pages/WhyUs/WhyMLZS"));
const AcademicsPrePrimary = React.lazy(() =>
  import("./pages/WhyUs/AcademicsPrePrimary")
);
const AcademicsPrimary = React.lazy(() =>
  import("./pages/WhyUs/AcademicsPrimary")
);
const AcademicsMiddle = React.lazy(() =>
  import("./pages/WhyUs/AcademicsMiddle")
);
const AcademicUpper = React.lazy(() => import("./pages/WhyUs/AcademicUpper"));
const BeyondAcademics = React.lazy(() =>
  import("./pages/WhyUs/BeyondAcademics ")
);

const GuidelinesProcedures = React.lazy(() =>
  import("./pages/Admissions/GuidelinesProcedures")
);
const SchoolRulesRegulations = React.lazy(() =>
  import("./pages/Admissions/SchoolRulesRegulations")
);
const WithdrawalPolicy = React.lazy(() =>
  import("./pages/Admissions/WithdrawalPolicy")
);
const EnquiryForm = React.lazy(() => import("./pages/Admissions/EnquiryForm"));

const OurCampus = React.lazy(() => import("./pages/Facilites/OurCampus"));
const HiTechClasses = React.lazy(() =>
  import("./pages/Facilites/HiTechClasses")
);
const Faculty = React.lazy(() => import("./pages/Facilites/Faculty"));
const SecurityCCTVSurveillance = React.lazy(() =>
  import("./pages/Facilites/SecurityCCTVSurveillance")
);
const SportFacilities = React.lazy(() =>
  import("./pages/Facilites/SportFacilities")
);
const TransportFacilities = React.lazy(() =>
  import("./pages/Facilites/TransportFacilities")
);
const ITInfrastructure = React.lazy(() =>
  import("./pages/Facilites/ITInfrastructures")
);
const Extracurricular = React.lazy(() =>
  import("./pages/Facilites/Extracurricular_activities")
);

const SchoolCalendar = React.lazy(() =>
  import("./pages/ParentsCorner/SchoolCalendar")
);
const FeeStructure = React.lazy(() =>
  import("./pages/ParentsCorner/FeeStructure")
);
const Gallery = React.lazy(() => import("./pages/ParentsCorner/Gallery"));
const NewsEvents = React.lazy(() => import("./pages/ParentsCorner/NewsEvents"));
const SchoolNotification = React.lazy(() =>
  import("./pages/ParentsCorner/SchoolNotification")
);
const EPFUTURE = React.lazy(() => import("./pages/ParentsCorner/EPFUTURE"));
const ParentVisitingHours = React.lazy(() =>
  import("./pages/ParentsCorner/ParentVisitingHours")
);
const Accolades = React.lazy(() => import("./pages/ParentsCorner/Accolades"));
const HouseSystem = React.lazy(() =>
  import("./pages/ParentsCorner/HouseSystem")
);
const ViewIssuedTcs = React.lazy(() =>
  import("./pages/ParentsCorner/ViewIssuedTcs")
);
const GuidelinesForParents = React.lazy(() =>
  import("./pages/ParentsCorner/GuidelinesForParents")
);

const StudentGuidelines = React.lazy(() =>
  import("./pages/StudentCorner/StudentGuidelines")
);
const SchoolUniform = React.lazy(() =>
  import("./pages/StudentCorner/SchoolUniform")
);
const SchoolTiming = React.lazy(() =>
  import("./pages/StudentCorner/SchoolTiming")
);
const AttendancePolicyS = React.lazy(() =>
  import("./pages/StudentCorner/AttendancePolicyS")
);

const Contact = React.lazy(() => import("./pages/contact/ContectUs"));
const Careers = React.lazy(() => import("./pages/contact/Careers"));
const OurLocation = React.lazy(() => import("./pages/contact/OurLocation"));

const MandatoryDisclosure = React.lazy(() =>
  import("./pages/MandatoryDisclosure/MandatoryDisclosure")
);

const Terms = React.lazy(() => import("./pages/Terms&Policy/Terms&Conditions"));
const Policy = React.lazy(() => import("./pages/Terms&Policy/PrivacyPolicy"));

const AdminLogin = React.lazy(() => import("./pages/Admin/AdminLogin"));
const AdminDasboard = React.lazy(() => import("./pages/Admin/AdminDasboard"));
const GalleryDashboard = React.lazy(() =>
  import("./pages/Admin/GalleryDashboard")
);

const Director_1_Message = React.lazy(() =>
  import("./pages/About/Director_1Message")
);

const Navbar = React.lazy(() => import("./components/Home/Navbar"));
const Footer = React.lazy(() => import("./components/Home/Footer"));
const SchoolValuesPage = React.lazy(() =>
  import("./components/AboutUs/ValuesInAction")
);
const Spinner = React.lazy(() => import("./components/ui/Spinner"));
import ScrollToTop from "./components/ui/scrollOnTop";

import { Suspense } from "react";

function App() {
  return <AppContent />;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {/* <ToastContainer /> */}
      {/* <React.Suspense fallback={<div>Loading...</div>}> */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen  text-blue-600 font-stretch-expanded   text-3xl">
            <div className="flex items-center space-x-2">
              <Spinner size={48} color="text-blue-600" />
            </div>
            Loading...
          </div>
        }
      >
        <Routes>
          {/* All your <Route> elements remain the same */}
          {/* HOME  */}
          <Route path="/" element={<Home />} />

          {/* OUR SCHOOL */}
          <Route path="/our-school" element={<OurSchool />} />
          <Route
            path="/mount-litera-zee-schools"
            element={<MountLiteraZeeSchools />}
          />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/director-message" element={<DirectorMessage />} />
          <Route path="/director-message_1" element={<Director_1_Message />} />
          <Route path="/principal-message" element={<PrincipalMessage />} />
          <Route path="/value-education" element={<ValueEducation />} />
          <Route path="/school-values" element={<SchoolValuesPage />} />

          {/* WHY US  */}
          <Route path="/why-spgs" element={<WhyMLZS />} />

          {/* ACADEMICS */}
          <Route
            path="/academics-pre-primary"
            element={<AcademicsPrePrimary />}
          />
          <Route path="/academics-primary" element={<AcademicsPrimary />} />
          <Route path="/academics-middle" element={<AcademicsMiddle />} />
          <Route path="/academics-secondary" element={<AcademicUpper />} />
          <Route path="/beyond-academics" element={<BeyondAcademics />} />

          <Route
            path="/guidelines-procedures"
            element={<GuidelinesProcedures />}
          />
          <Route
            path="/school-rules-regulations"
            element={<SchoolRulesRegulations />}
          />
          <Route path="/withdrawal-policy" element={<WithdrawalPolicy />} />
          <Route path="/enquiry-form" element={<EnquiryForm />} />

          <Route
            path="/extracurricular-activities"
            element={<Extracurricular />}
          />
          <Route path="/our-campus" element={<OurCampus />} />
          <Route path="/hi-tech-classes" element={<HiTechClasses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route
            path="/security-cctv-surveillance"
            element={<SecurityCCTVSurveillance />}
          />
          <Route path="/sport-facilities" element={<SportFacilities />} />
          <Route
            path="/transport-facilities"
            element={<TransportFacilities />}
          />
          <Route path="/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/school-calendar" element={<SchoolCalendar />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news-events" element={<SchoolNotification />} />
          <Route path="/epfuture" element={<EPFUTURE />} />
          <Route
            path="/parent-visiting-hours"
            element={<ParentVisitingHours />}
          />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="/house-system" element={<HouseSystem />} />
          <Route path="/view-issued-tcs" element={<ViewIssuedTcs />} />
          <Route
            path="/guidelines-for-parents"
            element={<GuidelinesForParents />}
          />
          <Route path="/student-guidelines" element={<StudentGuidelines />} />
          <Route path="/school-uniform" element={<SchoolUniform />} />
          <Route path="/school-timing" element={<SchoolTiming />} />
          <Route path="/attendance-policy" element={<AttendancePolicyS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/our-location" element={<OurLocation />} />
          <Route
            path="/mandatory-disclosure"
            element={<MandatoryDisclosure />}
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDasboard />} />
          <Route
            path="/admin/gallery-dashboard"
            element={<GalleryDashboard />}
          />
          <Route path="/school-calendar" element={<SchoolCalendar />} />
          <Route path="/news-eventss" element={<SchoolNotification />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        {!isAdminRoute && <Footer />}

        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
