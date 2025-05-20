import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ModelsPage from './pages/ModelsPage';
import ToolsPage from './pages/ToolsPage';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";
import CropsPage from "./pages/CropsPage";
import InfoPage from "./pages/InfoPage";
import ContactPage from "./pages/ContactPage";
import { LanguageProvider } from './contexts/LanguageContext';

const queryClient = new QueryClient();

function App() {
  return (
    <LanguageProvider>
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
                <Route path="/models" element={<ModelsPage />} />
                <Route path="/tools" element={<ToolsPage />} />
              <Route path="/crops" element={<CropsPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;