import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Chat from '../components/Chat';
import Search from '../components/Search';
import Favorites from '../components/Favorites';
import Payment from '../components/Payment';
import UserProfile from '../components/UserProfile';
import Notifications from '../components/Notifications';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <Link to="/signup">
            <Button className="w-full">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button className="w-full" variant="outline">Login</Button>
          </Link>
          <Link to="/user-management">
            <Button className="w-full" variant="secondary">User Management</Button>
          </Link>
          <Link to="/admin">
            <Button className="w-full" variant="secondary">Admin Panel</Button>
          </Link>
          <Link to="/dashboard">
            <Button className="w-full" variant="secondary">Dashboard</Button>
          </Link>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <UserProfile />
          <Chat />
          <Search />
          <Favorites />
        </div>
        <div className="space-y-4">
          <Payment />
          <Notifications />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Index;
