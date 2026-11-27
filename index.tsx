import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import HomePage from './src/app/page'
import WinsPage from './src/app/wins/page'
import EventsPage from './src/app/events/page'
import MerchPage from './src/app/merch/page'
import CombosPage from './src/app/merch/combos/page'
import HackathonsPage from './src/app/hackathons/page'
import IdeathonsPage from './src/app/ideathons/page'
import ProjectContestsPage from './src/app/project-contests/page'
import OffsiteProjectDevPage from './src/app/offsite-project-dev/page'
import FreelanceWorkPage from './src/app/freelance-work/page'
import PaperPosterPage from './src/app/paper-poster/page'
import ResearchPage from './src/app/research/page'
import './src/app/globals.css'

export default function VtuInvictusApp() {
  const location = useLocation()

  useEffect(() => {
    const subpath = location.pathname.replace(/^\/clubs\/vtu-invictus\/?/, '/')
    const titles: Record<string, string> = {
      '/': 'Invictus Club | Elite Developer Hub',
      '/wins': 'Hall of Fame | Invictus Club',
      '/events': 'Events & Schedule | Invictus Club',
      '/merch': 'Invictus Armory | Official Club Merch & Induction Portal',
      '/merch/combos': 'Merch Combos & Bundles | Invictus Club',
      '/hackathons': 'Hackathons | Invictus Club',
      '/ideathons': 'Ideathons | Invictus Club',
      '/project-contests': 'Project Contests | Invictus Club',
      '/offsite-project-dev': 'Offsite Project Dev | Invictus Club',
      '/freelance-work': 'Freelance Work | Invictus Club',
      '/paper-poster': 'Paper & Poster | Invictus Club',
      '/research': 'Research | Invictus Club',
    }
    document.title = titles[subpath] || 'Invictus Club | Elite Developer Hub'
    return () => {
      document.title = 'VTU Club House | Find Your People'
    }
  }, [location.pathname])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="vtu-invictus-root bg-black text-slate-100 min-h-screen selection:bg-[#FFD60A] selection:text-black antialiased overflow-x-clip">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wins" element={<WinsPage />} />
        <Route path="/achievements" element={<Navigate to="/clubs/vtu-invictus/wins" replace />} />
        <Route path="/achievement" element={<Navigate to="/clubs/vtu-invictus/wins" replace />} />
        <Route path="/hall-of-fame" element={<Navigate to="/clubs/vtu-invictus/wins" replace />} />
        <Route path="/halloffame" element={<Navigate to="/clubs/vtu-invictus/wins" replace />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/merch/combos" element={<CombosPage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/ideathons" element={<IdeathonsPage />} />
        <Route path="/project-contests" element={<ProjectContestsPage />} />
        <Route path="/offsite-project-dev" element={<OffsiteProjectDevPage />} />
        <Route path="/freelance-work" element={<FreelanceWorkPage />} />
        <Route path="/paper-poster" element={<PaperPosterPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="*" element={<Navigate to="/clubs/vtu-invictus" replace />} />
      </Routes>
    </div>
  )
}
