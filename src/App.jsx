import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './utils/ScrollToTop';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';

// Import pages
import HomeNew from './pages/HomeNew';
import AboutUs from './pages/AboutUs';
import Ecosystem from './pages/Ecosystem';
import SolutionsServices from './pages/SolutionsServices';
import AudienceHub from './pages/AudienceHub';
import Resources from './pages/Resources';
import ContactGetInvolved from './pages/ContactGetInvolved';
import SuccessStories from './pages/SuccessStories';
import PartnerPortal from './pages/PartnerPortal';
import Careers from './pages/Careers';
import PressRoom from './pages/PressRoom';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import PartnerApply from './pages/PartnerApply';
import BlogArticles from './pages/resources/BlogArticles';
import Whitepapers from './pages/resources/Whitepapers';
import Events from './pages/resources/Events';
import Tools from './pages/resources/Tools';
import Media from './pages/resources/Media';
import IndustryCorporate from './pages/audience/IndustryCorporate';
import InvestorsVCs from './pages/audience/InvestorsVCs';
import Entrepreneurs from './pages/audience/Entrepreneurs';
import GovernmentNGOs from './pages/audience/GovernmentNGOs';
import ConsultantsAcademics from './pages/audience/ConsultantsAcademics';
import CorporatePartnerships from './pages/audience/CorporatePartnerships';
import GovernmentPrograms from './pages/solutions/GovernmentPrograms';
import StartupIncubation from './pages/solutions/StartupIncubation';
import MSMESupport from './pages/solutions/MSMESupport';
import WanapreneurPrograms from './pages/solutions/WanapreneurPrograms';
import DigitalTransformation from './pages/solutions/DigitalTransformation';

// Import legal pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import CookiePolicy from './pages/legal/CookiePolicy';
import DataProtection from './pages/legal/DataProtection';

// Import ecosystem subpages
import AssociateBodies from './pages/ecosystem/AssociateBodies';
import ParticipatingCompanies from './pages/ecosystem/ParticipatingCompanies';
import TroupBasedIncubation from './pages/ecosystem/TroupBasedIncubation';
import MentorshipNetwork from './pages/ecosystem/MentorshipNetwork';
import IndustryPartners from './pages/ecosystem/IndustryPartners';

// Import components
import ChatWidget from './components/shared/ChatWidget';

// Import Framer Motion for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Layout wrapper component
const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <ChatWidget />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/"
              element={
                <PageLayout>
                  <HomePage />
                </PageLayout>
              }
            />
            <Route path="/about-us" element={
              <PageLayout>
                <AboutUs />
              </PageLayout>
            } />
            <Route path="/ecosystem" element={
              <PageLayout>
                <Ecosystem />
              </PageLayout>
            } />
            <Route path="/solutions-services" element={
              <PageLayout>
                <SolutionsServices />
              </PageLayout>
            } />
            <Route path="/solutions-services/corporate-partnerships" element={
              <PageLayout>
                <CorporatePartnerships />
              </PageLayout>
            } />
            <Route path="/solutions-services/government-programs-grants" element={
              <PageLayout>
                <GovernmentPrograms />
              </PageLayout>
            } />
            <Route path="/solutions-services/startup-incubation-packages" element={
              <PageLayout>
                <StartupIncubation />
              </PageLayout>
            } />
            <Route path="/solutions-services/msme-support-schemes" element={
              <PageLayout>
                <MSMESupport />
              </PageLayout>
            } />
            <Route path="/solutions-services/wanapreneur-programs" element={
              <PageLayout>
                <WanapreneurPrograms />
              </PageLayout>
            } />
            <Route path="/solutions-services/digital-transformation-training" element={
              <PageLayout>
                <DigitalTransformation />
              </PageLayout>
            } />
            <Route path="/audience-hub" element={
              <PageLayout>
                <AudienceHub />
              </PageLayout>
            } />
            <Route path="/audience-hub/industry-corporate" element={
              <PageLayout>
                <IndustryCorporate />
              </PageLayout>
            } />
            <Route path="/audience-hub/investors-vcs" element={
              <PageLayout>
                <InvestorsVCs />
              </PageLayout>
            } />
            <Route path="/audience-hub/entrepreneurs-startups" element={
              <PageLayout>
                <Entrepreneurs />
              </PageLayout>
            } />
            <Route path="/audience-hub/government-ngos" element={
              <PageLayout>
                <GovernmentNGOs />
              </PageLayout>
            } />
            <Route path="/audience-hub/consultants-academics" element={
              <PageLayout>
                <ConsultantsAcademics />
              </PageLayout>
            } />
            <Route path="/resources" element={
              <PageLayout>
                <Resources />
              </PageLayout>
            } />
            <Route path="/resources/blog" element={
              <PageLayout>
                <BlogArticles />
              </PageLayout>
            } />
            <Route path="/resources/whitepapers" element={
              <PageLayout>
                <Whitepapers />
              </PageLayout>
            } />
            <Route path="/resources/events" element={
              <PageLayout>
                <Events />
              </PageLayout>
            } />
            <Route path="/resources/tools" element={
              <PageLayout>
                <Tools />
              </PageLayout>
            } />
            <Route path="/resources/media" element={
              <PageLayout>
                <Media />
              </PageLayout>
            } />
            <Route path="/contact-get-involved" element={
              <PageLayout>
                <ContactGetInvolved />
              </PageLayout>
            } />
            <Route path="/contact-get-involved/partner-apply" element={
              <PageLayout>
                <PartnerApply />
              </PageLayout>
            } />
            <Route path="/success-stories" element={
              <PageLayout>
                <SuccessStories />
              </PageLayout>
            } />
            <Route path="/partner-portal" element={
              <PageLayout>
                <PartnerPortal />
              </PageLayout>
            } />
            <Route path="/careers" element={
              <PageLayout>
                <Careers />
              </PageLayout>
            } />
            <Route path="/press" element={
              <PageLayout>
                <PressRoom />
              </PageLayout>
            } />
            <Route path="/faq" element={
              <PageLayout>
                <FAQ />
              </PageLayout>
            } />
            <Route path="/legal" element={
              <PageLayout>
                <Legal />
              </PageLayout>
            } />
            
            {/* Legal subpages */}
            <Route path="/legal/privacy-policy" element={
              <PageLayout>
                <PrivacyPolicy />
              </PageLayout>
            } />
            <Route path="/legal/terms-of-use" element={
              <PageLayout>
                <TermsOfUse />
              </PageLayout>
            } />
            <Route path="/legal/cookie-policy" element={
              <PageLayout>
                <CookiePolicy />
              </PageLayout>
            } />
            <Route path="/legal/data-protection-guidelines" element={
              <PageLayout>
                <DataProtection />
              </PageLayout>
            } />
            
            {/* Ecosystem subpages */}
            <Route path="/ecosystem/associate-bodies" element={
              <PageLayout>
                <AssociateBodies />
              </PageLayout>
            } />
            <Route path="/ecosystem/participating-companies" element={
              <PageLayout>
                <ParticipatingCompanies />
              </PageLayout>
            } />
            <Route path="/ecosystem/troup-based-incubation-model" element={
              <PageLayout>
                <TroupBasedIncubation />
              </PageLayout>
            } />
            <Route path="/ecosystem/mentorship-network" element={
              <PageLayout>
                <MentorshipNetwork />
              </PageLayout>
            } />
            <Route path="/ecosystem/industry-partners" element={
              <PageLayout>
                <IndustryPartners />
              </PageLayout>
            } />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
