import { HomeIcon, UserPlusIcon, LogInIcon, UsersIcon, MessageSquareIcon, SearchIcon, StarIcon, CreditCardIcon, ShieldIcon, LayoutDashboardIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Login from "./components/auth/Login.jsx";
import UserManagement from "./components/UserManagement.jsx";
import Chat from "./components/Chat.jsx";
import Search from "./components/Search.jsx";
import Favorites from "./components/Favorites.jsx";
import Payment from "./components/Payment.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import Dashboard from "./components/Dashboard.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Sign Up",
    to: "/signup",
    icon: <UserPlusIcon className="h-4 w-4" />,
    page: <SignUp />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogInIcon className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "User Management",
    to: "/user-management",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <UserManagement />,
  },
  {
    title: "Chat",
    to: "/chat",
    icon: <MessageSquareIcon className="h-4 w-4" />,
    page: <Chat />,
  },
  {
    title: "Search",
    to: "/search",
    icon: <SearchIcon className="h-4 w-4" />,
    page: <Search />,
  },
  {
    title: "Favorites",
    to: "/favorites",
    icon: <StarIcon className="h-4 w-4" />,
    page: <Favorites />,
  },
  {
    title: "Payment",
    to: "/payment",
    icon: <CreditCardIcon className="h-4 w-4" />,
    page: <Payment />,
  },
  {
    title: "Admin Panel",
    to: "/admin",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: <AdminPanel />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    page: <Dashboard />,
  },
];
