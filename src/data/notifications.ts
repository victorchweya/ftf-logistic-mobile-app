export type NotificationTone = 'brand' | 'info' | 'warning' | 'neutral' | 'success';

export interface NotificationItem {
	id: string;
	title: string;
	message: string;
	timestamp: string;
	icon: 'package' | 'clock' | 'message' | 'settings' | 'check-circle' | 'warning';
	tone: NotificationTone;
	unread: boolean;
	routeId?: string;
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
		routeId: 'R-326',
	},
	{
		id: 'schedule-r322',
		title: 'Schedule Update',
		message: 'Departure for <strong>R-322</strong> has been moved forward to 14:30.',
		timestamp: '15m ago',
		icon: 'clock',
		tone: 'info',
		unread: true,
		routeId: 'R-322',
	},
	{
		id: 'proof-r312',
		title: 'Proof Pending Sync',
		message: 'Two proof assets for <strong>R-312</strong> are waiting for connectivity.',
		timestamp: '35m ago',
		icon: 'warning',
		tone: 'warning',
		unread: false,
		routeId: 'R-312',
	},
	{
		id: 'delivery-note-123',
		title: 'Delivery Note Update',
		message: 'Customer at <strong>123 Logistics Ave</strong> added: "Please leave at side gate."',
		timestamp: '1h ago',
		icon: 'message',
		tone: 'warning',
		unread: false,
		routeId: 'R-312',
	},
	{
		id: 'system-maintenance',
		title: 'System Maintenance',
		message: 'Brief maintenance scheduled tonight. Connectivity may be intermittent.',
		timestamp: '3h ago',
		icon: 'settings',
		tone: 'neutral',
		unread: false,
	},
	{
		id: 'route-318-closed',
		title: 'Route Completed',
		message: 'Route <strong>R-318</strong> was closed with all proof synced.',
		timestamp: 'Yesterday',
		icon: 'check-circle',
		tone: 'success',
		unread: false,
		routeId: 'R-318',
	},
];
