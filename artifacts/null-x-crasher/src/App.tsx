import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Import Pages
import NullXCrasher from './pages/NullXCrasher';
import BarryXMd from './pages/BarryXMd';
import Songs from './pages/Songs';

// Import Layout Components
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
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
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
