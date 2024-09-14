import { HomeIcon, UserPlusIcon, LogInIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Login from "./components/auth/Login.jsx";
import UserManagement from "./components/UserManagement.jsx";

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
];
