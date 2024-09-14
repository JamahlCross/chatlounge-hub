import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <NavBar />
            <main className="flex-1 overflow-y-auto p-4">
              <Routes>
                {navItems.map(({ to, page }) => (
                  <Route key={to} path={to} element={page} />
                ))}
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
