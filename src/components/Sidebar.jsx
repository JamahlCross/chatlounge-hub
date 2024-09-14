import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { navItems } from '../nav-items';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">ChatLounge Hub</h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;