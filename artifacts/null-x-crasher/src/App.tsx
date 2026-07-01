import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';

// Import Pages
import NullXCrasher from './pages/NullXCrasher';
import BarryXMd from './pages/BarryXMd';
import Songs from './pages/Songs';
import { Intro } from './pages/Intro';

// Import Layout Components
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { AudioProvider, useAudio } from './lib/audioContext';

const queryClient = new QueryClient();

function PageAudio() {
  const [location] = useLocation();
  const { playIntro, playMd } = useAudio();

  useEffect(() => {
    if (location === '/' || location === '/songs') {
      playIntro();
    } else if (location === '/barry-x-md') {
      playMd();
    }
  }, [location]);

  return null;
}

function Router() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const hasEntered = sessionStorage.getItem('bugbots-entered') === 'true';
    if (hasEntered) setEntered(true);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem('bugbots-entered', 'true');
    setEntered(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!entered && <Intro onEnter={handleEnter} />}
      <Nav />
      <PageAudio />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={NullXCrasher} />
          <Route path="/barry-x-md" component={BarryXMd} />
          <Route path="/songs" component={Songs} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AudioProvider>
          <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
            <Router />
          </WouterRouter>
          <Toaster />
        </AudioProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
