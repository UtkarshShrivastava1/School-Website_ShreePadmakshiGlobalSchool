import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import OurSchool from './pages/About/OurSchool';
import MountLiteraZeeSchools from './pages/About/MountLiteraZeeSchools';
import OurMission from './pages/About/OurMission';
import OurVision from './pages/About/OurVision';
import DirectorMessage from './pages/About/DirectorMessage';
import PrincipalMessage from './pages/About/PrincipalMessage';
import ValueEducation from './pages/About/ValueEducation';
import WhyMLZS from './pages/WhyUs/WhyMLZS';
import AcademicsPrePrimary from './pages/WhyUs/AcademicsPrePrimary';
import AcademicsPrimary from './pages/WhyUs/AcademicsPrimary';
import AcademicsMiddle from './pages/WhyUs/AcademicsMiddle';
import BeyondAcademics from './pages/WhyUs/BeyondAcademics ';
import GuidelinesProcedures from './pages/Admissions/GuidelinesProcedures';
import SchoolRulesRegulations from './pages/Admissions/SchoolRulesRegulations';
import WithdrawalPolicy from './pages/Admissions/WithdrawalPolicy';
import EnquiryForm from './pages/Admissions/EnquiryForm';
import OurCampus from './pages/Facilites/OurCampus';
import HiTechClasses from './pages/Facilites/HiTechClasses';
import Faculty from './pages/Facilites/Faculty';
import SecurityCCTVSurveillance from './pages/Facilites/SecurityCCTVSurveillance';

import SportFacilities from './pages/Facilites/SportFacilities';
import TransportFacilities from './pages/Facilites/TransportFacilities';

import ITInfrastructure from './pages/Facilites/ITInfrastructures';
import SchoolCalendar from './pages/ParentsCorner/SchoolCalendar';
import FeeStructure from './pages/ParentsCorner/FeeStructure';
import Gallery from './pages/ParentsCorner/Gallery';
import NewsEvents from './pages/ParentsCorner/NewsEvents';
import SchoolNotification from './pages/ParentsCorner/SchoolNotification';
import EPFUTURE from './pages/ParentsCorner/EPFUTURE';
import ParentVisitingHours from './pages/ParentsCorner/ParentVisitingHours';
import Accolades from './pages/ParentsCorner/Accolades';
import HouseSystem from './pages/ParentsCorner/HouseSystem';
import ViewIssuedTcs from './pages/ParentsCorner/ViewIssuedTcs';
import GuidelinesForParents from './pages/ParentsCorner/GuidelinesForParents';
import StudentGuidelines from './pages/StudentCorner/StudentGuidelines';
import SchoolUniform from './pages/StudentCorner/SchoolUniform';
import SchoolTiming from './pages/StudentCorner/SchoolTiming';
import AttendancePolicyS from './pages/StudentCorner/AttendancePolicyS';
import Contact from './pages/contact/ContectUs';
import Careers from './pages/contact/Careers';
import OurLocation from './pages/contact/OurLocation';
import MandatoryDisclosure from './pages/MandatoryDisclosure/MandatoryDisclosure';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDasboard from './pages/Admin/AdminDasboard';
import Terms from './pages/Terms&Policy/Terms&Conditions';
import Policy from './pages/Terms&Policy/PrivacyPolicy';
import GalleryDashboard from './pages/Admin/GalleryDashboard';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-school" element={<OurSchool />} />
        <Route path="/mount-litera-zee-schools" element={<MountLiteraZeeSchools />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/director-message" element={<DirectorMessage />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/value-education" element={<ValueEducation />} />
        <Route path="/why-mlzs" element={<WhyMLZS />} />
        <Route path="/academics-pre-primary" element={<AcademicsPrePrimary />} />
        <Route path="/academics-primary" element={<AcademicsPrimary />} />
        <Route path="/academics-middle" element={<AcademicsMiddle />} />
        <Route path="/beyond-academics" element={<BeyondAcademics />} />
        <Route path="/guidelines-procedures" element={<GuidelinesProcedures />} />
        <Route path="/school-rules-regulations" element={<SchoolRulesRegulations />} />
        <Route path="/withdrawal-policy" element={<WithdrawalPolicy />} />
        <Route path="/enquiry-form" element={<EnquiryForm />} />
        <Route path="/our-campus" element={<OurCampus />} />
        <Route path="/hi-tech-classes" element={<HiTechClasses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/security-cctv-surveillance" element={<SecurityCCTVSurveillance />} />
        <Route path="/sport-facilities" element={<SportFacilities />} />
        <Route path="/transport-facilities" element={<TransportFacilities />} />
        <Route path="/it-infrastructure" element={<ITInfrastructure />} />
        <Route path="/school-calendar" element={<SchoolCalendar />} />
        <Route path="/fee-structure" element={<FeeStructure />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/school-notification" element={<SchoolNotification />} />
        <Route path="/epfuture" element={<EPFUTURE />} />
        <Route path="/parent-visiting-hours" element={<ParentVisitingHours />} />
        <Route path="/accolades" element={<Accolades />} />
        <Route path="/house-system" element={<HouseSystem />} />
        <Route path="/view-issued-tcs" element={<ViewIssuedTcs />} />
        <Route path="/guidelines-for-parents" element={<GuidelinesForParents />} />
        <Route path="/student-guidelines" element={<StudentGuidelines />} />
        <Route path="/school-uniform" element={<SchoolUniform />} />
        <Route path="/school-timing" element={<SchoolTiming />} />
        <Route path="/attendance-policy" element={<AttendancePolicyS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-location" element={<OurLocation />} />
        <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDasboard />} />
        <Route path="/admin/gallery-dashboard" element={<GalleryDashboard />} />
        <Route path="/school-calendar" element={<SchoolCalendar />} />
        <Route path="/school-notifications" element={<SchoolNotification />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;