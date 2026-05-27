export type NotificationTone = 'brand' | 'info' | 'warning' | 'neutral' | 'success';

export interface NotificationItem {
	id: string;
	title: string;
	message: string;
	timestamp: string;
	icon: 'package' | 'clock' | 'message' | 'settings' | 'check-circle';
	tone: NotificationTone;
	unread: boolean;
}

export const notifications: NotificationItem[] = [
	{
		id: 'new-route-r326',
		title: 'New Route Assigned',
		message: 'Route <strong>R-326</strong> has been added to your dashboard with 5 stops.',
		timestamp: '2m ago',
		icon: 'package',
		tone: 'brand',
		unread: true,
	},
	{
		id: 'schedule-r322',
		title: 'Schedule Update',
		message: 'Departure for <strong>R-322</strong> has been moved forward to 14:30 PM.',
		timestamp: '15m ago',
		icon: 'clock',
		tone: 'info',
		unread: true,
	},
	{
		id: 'delivery-note-123',
		title: 'Delivery Note Update',
		message: 'Customer at <strong>123 Logistics Ave</strong> added: "Please leave at side gate."',
		timestamp: '1h ago',
		icon: 'message',
		tone: 'warning',
		unread: false,
	},
	{
		id: 'system-maintenance',
		title: 'System Maintenance',
		message: 'Brief maintenance scheduled for tonight at 2:00 AM UTC. Connectivity may be intermittent.',
		timestamp: '3h ago',
		icon: 'settings',
		tone: 'neutral',
		unread: false,
	},
	{
		id: 'payout-aug-12-18',
		title: 'Payout Processed',
		message: 'Weekly earnings for Aug 12-18 have been processed and sent to your bank.',
		timestamp: 'Yesterday',
		icon: 'check-circle',
		tone: 'success',
		unread: false,
	},
];
