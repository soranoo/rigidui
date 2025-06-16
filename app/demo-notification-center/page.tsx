'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationCenter, Notification } from '@/registry/new-york/notification-center/notification-center'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, Plus } from 'lucide-react'
import { toast } from 'sonner'

const queryClient = new QueryClient()

const sampleNotifications: Notification[] = [
  {
    id: '1',
    title: 'Welcome to the Team',
    message: 'Your account has been successfully created and you have been added to the design team.',
    isRead: false,
    createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    priority: 'high'
  },
  {
    id: '2',
    title: 'New Project Assignment',
    message: 'You have been assigned to the new mobile app redesign project starting next week.',
    isRead: false,
    createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    priority: 'medium'
  },
  {
    id: '3',
    title: 'System Maintenance',
    message: 'Scheduled maintenance will occur tonight from 11 PM to 1 AM EST. Some features may be unavailable.',
    isRead: true,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    priority: 'low'
  },
  {
    id: '4',
    title: 'Meeting Reminder',
    message: 'Team standup meeting starts in 15 minutes in conference room A.',
    isRead: false,
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString()
  },
  {
    id: '5',
    title: 'Document Shared',
    message: 'Sarah Johnson shared "Q4 Design Guidelines" with you. Please review before the next meeting.',
    isRead: true,
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString()
  }
]

function NotificationCenterDemo() {
  const [staticNotifications, setStaticNotifications] = React.useState<Notification[]>(sampleNotifications)

  const handleNotificationClick = (notification: Notification) => {
    toast.info(`Clicked: ${notification.title}`)
  }

  const addSampleNotification = () => {
    const newNotification: Notification = {
      id: `new-${Date.now()}`,
      title: 'New Message',
      message: `This is a new notification created at ${new Date().toLocaleTimeString()}`,
      isRead: false,
      createdAt: new Date().toISOString(),
      priority: Math.random() > 0.5 ? 'high' : 'medium'
    }
    setStaticNotifications(prev => [newNotification, ...prev])
    toast.success('New notification added!')
  }

  const handleMarkAsRead = async (id: string) => {
    setStaticNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    )
  }

  const handleMarkAllAsRead = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    setStaticNotifications(prev =>
      prev.map(n => ({ ...n, isRead: true }))
    )
  }

  const handleDeleteNotification = async (id: string) => {
    setStaticNotifications(prev =>
      prev.filter(n => n.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Notification Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple and clean notification system for message-based notifications.
          </p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Demo Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={addSampleNotification}
              className="w-full"
              variant="default"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Sample Notification
            </Button>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Full View</h2>
            <p className="text-muted-foreground">
              Complete notification center with all features visible.
            </p>
            <NotificationCenter
              variant="full"
              notifications={staticNotifications}
              onNotificationClick={handleNotificationClick}
              onMarkAsRead={handleMarkAsRead}
              onMarkAllAsRead={handleMarkAllAsRead}
              onDeleteNotification={handleDeleteNotification}
              showFilter={true}
              showMarkAllRead={true}
              className="w-full"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Popover View</h2>
            <p className="text-muted-foreground">
              Compact popover version perfect for headers and navigation.
            </p>
            <div className="flex justify-center p-8 border rounded-lg bg-muted/20">
              <NotificationCenter
                variant="popover"
                notifications={staticNotifications}
                onNotificationClick={handleNotificationClick}
                onMarkAsRead={handleMarkAsRead}
                onMarkAllAsRead={handleMarkAllAsRead}
                onDeleteNotification={handleDeleteNotification}
                showFilter={true}
                showMarkAllRead={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationCenterDemo />
    </QueryClientProvider>
  )
}
