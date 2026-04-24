const fs = require('fs');

// 1. Firebase setup
const fbContent = `import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
`;
fs.writeFileSync('src/firebase.ts', fbContent, 'utf-8');

// 2. Firestore setup
const fsContent = `import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import type { User, Content } from '../types';

export const getUsers = async (): Promise<User[]> => {
  const usersCol = collection(db, 'users');
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as User[];
  return userList;
};

export const getContents = async (): Promise<Content[]> => {
  const contentsCol = collection(db, 'contents');
  const contentSnapshot = await getDocs(contentsCol);
  const contentList = contentSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Content[];
  return contentList;
};
`;
fs.writeFileSync('src/services/firestore.ts', fsContent, 'utf-8');

// 3. App.tsx Framer Motion Setup
const appContent = `import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ScholarProfile } from './pages/ScholarProfile';
import ContentDetail from './pages/ContentDetail';
import { HomeFeed } from './pages/HomeFeed';
import AdminDashboard from './pages/AdminDashboard';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<HomeFeed />} />
        <Route path="/scholar" element={<ScholarProfile />} />
        <Route path="/content" element={<ContentDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
`;
fs.writeFileSync('src/App.tsx', appContent, 'utf-8');

// 4. ContentDetail.tsx Setup
let cdContent = fs.readFileSync('src/pages/ContentDetail.tsx', 'utf-8');
if (!cdContent.includes('framer-motion')) {
    const importPdf = `import { useState, useEffect } from 'react';\nimport { useLocation } from 'react-router-dom';\nimport Sidebar from '../components/Sidebar';\nimport { Worker, Viewer } from '@react-pdf-viewer/core';\nimport { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';\nimport '@react-pdf-viewer/core/lib/styles/index.css';\nimport '@react-pdf-viewer/default-layout/lib/styles/index.css';\nimport { motion } from 'framer-motion';\n`;
    cdContent = cdContent.replace(`import Sidebar from '../components/Sidebar';`, importPdf);

    const progressHook = `export default function ContentDetail() {\n  const [scrollProgress, setScrollProgress] = useState(0);\n  const location = useLocation();\n  const contentData = location.state?.content || { type: 'article', pdfUrl: '' };\n  const defaultLayoutPluginInstance = defaultLayoutPlugin();\n\n  useEffect(() => {\n    const handleScroll = () => {\n      const totalScroll = document.documentElement.scrollTop;\n      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n      const scroll = \`\${totalScroll / windowHeight}\`;\n      setScrollProgress(Number(scroll));\n    }\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, []);\n\n  const isPdf = contentData.type === 'ebook' && contentData.pdfUrl;\n\n  return (\n    <motion.div \n      initial={{ opacity: 0, y: 20 }}\n      animate={{ opacity: 1, y: 0 }}\n      exit={{ opacity: 0, y: -20 }}\n      transition={{ duration: 0.3, ease: 'easeOut' }}\n      className="bg-background dark:bg-slate-900 text-on-surface dark:text-slate-100 antialiased min-h-screen flex selection:bg-primary-fixed selection:text-on-primary-fixed"\n    >\n      <div \n        className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-150 ease-out" \n        style={{ width: \`\${scrollProgress * 100}%\` }}\n      />\n`;
    cdContent = cdContent.replace(`export default function ContentDetail() {\n  return (\n    <div className="bg-background text-on-surface antialiased min-h-screen flex selection:bg-primary-fixed selection:text-on-primary-fixed">\n`, progressHook);

    const pdfRender = `          {/* Article Header */}\n          <header className="mb-10">\n            <h1 className="font-display-lg text-display-lg text-on-surface dark:text-slate-100 mb-8 text-balance">{contentData.title || 'The Epistemology of Certainty'}</h1>\n`;
    cdContent = cdContent.replace(`          {/* Article Header */}\n          <header className="mb-10">\n            <h1 className="font-display-lg text-display-lg text-on-surface mb-8 text-balance">The Epistemology of Certainty: A Modern Contextualization of Classical Texts</h1>\n`, pdfRender);

    const bodyClasses = `<article className="prose prose-lg max-w-none text-on-surface-variant dark:text-slate-300 font-headline-md text-body-lg space-y-8 leading-loose tracking-wide">\n`;
    cdContent = cdContent.replace(`<article className="prose prose-lg max-w-none text-on-surface-variant font-body-lg text-body-lg space-y-8">\n`, bodyClasses);

    const thePdfRender = `        {/* Article Canvas */}\n        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">\n          {/* Context / Breadcrumb */}\n          <div className="flex items-center gap-2 mb-6">\n            <a className="font-label-sm text-label-sm text-primary dark:text-emerald-400 uppercase tracking-wider hover:underline underline-offset-4 decoration-primary-fixed" href="#">{contentData.type === 'ebook' ? 'E-Books' : 'Articles'}</a>\n            <span className="material-symbols-outlined text-outline dark:text-slate-500 text-sm">chevron_right</span>\n            <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-slate-400 uppercase tracking-wider">{contentData.type}</span>\n          </div>\n\n          {isPdf ? (\n            <div className="h-[80vh] border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm">\n              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">\n                <Viewer fileUrl={contentData.pdfUrl} plugins={[defaultLayoutPluginInstance]} />\n              </Worker>\n            </div>\n          ) : (\n            <>\n`;
    cdContent = cdContent.replace(`        {/* Article Canvas */}\n        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">\n          {/* Context / Breadcrumb */}\n          <div className="flex items-center gap-2 mb-6">\n            <a className="font-label-sm text-label-sm text-primary uppercase tracking-wider hover:underline underline-offset-4 decoration-primary-fixed" href="#">Theology &amp; Fiqh</a>\n            <span className="material-symbols-outlined text-outline text-sm">chevron_right</span>\n            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Treatises</span>\n          </div>\n`, thePdfRender);

    cdContent = cdContent.replace(`          {/* Related Content (Bento Style) */}\n`, `            </>\n          )}\n          {/* Related Content (Bento Style) */}\n`);

    // Add dark mode support for inner elements
    cdContent = cdContent.replace(/<div className="bg-background text-on-surface/g, '<div className="bg-background dark:bg-slate-900 text-on-surface dark:text-slate-100');

    // Fix ending tags
    const lastDivIndex = cdContent.lastIndexOf('</div>');
    if (lastDivIndex !== -1) {
        cdContent = cdContent.substring(0, lastDivIndex) + '</motion.div>' + cdContent.substring(lastDivIndex + 6);
    }
}
fs.writeFileSync('src/pages/ContentDetail.tsx', cdContent, 'utf-8');

// 5. Pages motion wrappers
function addMotion(filepath) {
    let content = fs.readFileSync(filepath, 'utf-8');
    if (!content.includes('framer-motion')) {
        content = content.replace("import Sidebar from '../components/Sidebar';", "import Sidebar from '../components/Sidebar';\nimport { motion } from 'framer-motion';");

        const match = content.match(/return \(\n\s*<div className="([^"]+)"/);
        if (match) {
            content = content.replace(
                match[0],
                `return (\n    <motion.div\n      initial={{ opacity: 0, y: 15 }}\n      animate={{ opacity: 1, y: 0 }}\n      exit={{ opacity: 0, y: -15 }}\n      transition={{ duration: 0.3 }}\n      className="${match[1]}"`
            );

            const lastDivIndex = content.lastIndexOf('</div>');
            if (lastDivIndex !== -1) {
                content = content.substring(0, lastDivIndex) + '</motion.div>' + content.substring(lastDivIndex + 6);
            }
        }
        fs.writeFileSync(filepath, content, 'utf-8');
    }
}

addMotion('src/pages/HomeFeed.tsx');
addMotion('src/pages/ScholarProfile.tsx');
addMotion('src/pages/AdminDashboard.tsx');

console.log("All files updated successfully.");
