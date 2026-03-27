import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ApplyPage from './pages/ApplyPage'
import NominatePage from './pages/NominatePage'
import StudentsPage from './pages/students/StudentsPage'
import WhatIsBoysStatePage from './pages/students/WhatIsBoysStatePage'
import WeekInTheLifePage from './pages/students/WeekInTheLifePage'
import TestimonialsPage from './pages/students/TestimonialsPage'
import BoysNationPage from './pages/students/BoysNationPage'
import CollegeCreditPage from './pages/students/CollegeCreditPage'
import OrientationPage from './pages/students/OrientationPage'
import CheckinPage from './pages/students/CheckinPage'
import ParentsPage from './pages/ParentsPage'
import EducatorsPage from './pages/EducatorsPage'
import AboutPage from './pages/about/AboutPage'
import AmericanLegionPage from './pages/about/AmericanLegionPage'
import FinancialsPage from './pages/about/FinancialsPage'
import StaffPage from './pages/about/StaffPage'
import AlumniPage from './pages/alumni/AlumniPage'
import NotableAlumniPage from './pages/alumni/NotableAlumniPage'
import JoinPage from './pages/alumni/JoinPage'
import GivePage from './pages/give/GivePage'
import CorporatePage from './pages/give/CorporatePage'
import PlannedGivingPage from './pages/give/PlannedGivingPage'
import MatchingGiftsPage from './pages/give/MatchingGiftsPage'
import MemorialGiftsPage from './pages/give/MemorialGiftsPage'
import NewsPage from './pages/news/NewsPage'
import PressPage from './pages/news/PressPage'
import EventsPage from './pages/events/EventsPage'
import EventDetailPage from './pages/events/EventDetailPage'
import SessionsPage from './pages/SessionsPage'
import SessionYearPage from './pages/session/SessionYearPage'
import SessionSpeakersPage from './pages/session/SessionSpeakersPage'
import SessionElectionResultsPage from './pages/session/SessionElectionResultsPage'
import SessionCitizensPage from './pages/session/SessionCitizensPage'
import SessionAlumniStoriesPage from './pages/session/SessionAlumniStoriesPage'
import SessionClosingPage from './pages/session/SessionClosingPage'
import HallOfFamePage from './pages/alumni/HallOfFamePage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/nominate" element={<NominatePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/what-is-boys-state" element={<WhatIsBoysStatePage />} />
          <Route path="/students/week-in-the-life" element={<WeekInTheLifePage />} />
          <Route path="/students/testimonials" element={<TestimonialsPage />} />
          <Route path="/students/boys-nation" element={<BoysNationPage />} />
          <Route path="/students/college-credit" element={<CollegeCreditPage />} />
          <Route path="/students/orientation" element={<OrientationPage />} />
          <Route path="/students/checkin" element={<CheckinPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/educators" element={<EducatorsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/american-legion" element={<AmericanLegionPage />} />
          <Route path="/about/financials" element={<FinancialsPage />} />
          <Route path="/about/staff" element={<StaffPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/alumni/notable" element={<NotableAlumniPage />} />
          <Route path="/alumni/join" element={<JoinPage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/give/corporate" element={<CorporatePage />} />
          <Route path="/give/planned" element={<PlannedGivingPage />} />
          <Route path="/give/matching" element={<MatchingGiftsPage />} />
          <Route path="/give/memorial" element={<MemorialGiftsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/press" element={<PressPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/session/:year" element={<SessionYearPage />} />
          <Route path="/session/:year/speakers" element={<SessionSpeakersPage />} />
          <Route path="/session/:year/election-results" element={<SessionElectionResultsPage />} />
          <Route path="/session/:year/citizens-of-the-week" element={<SessionCitizensPage />} />
          <Route path="/session/:year/alumni-stories" element={<SessionAlumniStoriesPage />} />
          <Route path="/session/:year/closing" element={<SessionClosingPage />} />
          <Route path="/alumni/hall-of-fame" element={<HallOfFamePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
