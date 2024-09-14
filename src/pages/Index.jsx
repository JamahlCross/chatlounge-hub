import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
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
      </div>
    </div>
  );
};

export default Index;
