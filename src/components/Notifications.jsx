import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New message from John', read: false },
    { id: 2, message: 'Your post was liked', read: true },
    { id: 3, message: 'New friend request', read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Notifications
          <Button size="sm" variant="ghost" className="relative">
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full pr-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-3 mb-2 rounded ${
                notif.read ? 'bg-gray-100' : 'bg-blue-100'
              }`}
            >
              <p>{notif.message}</p>
              {!notif.read && (
                <Button
                  size="sm"
                  variant="link"
                  onClick={() => markAsRead(notif.id)}
                >
                  Mark as read
                </Button>
              )}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Notifications;