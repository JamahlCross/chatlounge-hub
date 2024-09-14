import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Chat from '../components/Chat';
import Search from '../components/Search';
import Favorites from '../components/Favorites';
import Payment from '../components/Payment';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      <div className="space-y-4 w-full max-w-md">
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
      </div>
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <Chat />
        <div className="mt-4">
          <Search />
        </div>
        <div className="mt-4">
          <Favorites />
        </div>
        <div className="mt-4">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Index;
