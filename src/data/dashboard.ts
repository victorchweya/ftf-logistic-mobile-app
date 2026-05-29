export type RouteStatus = 'assigned' | 'active' | 'ready_to_complete' | 'completed';
export type RouteKind = 'delivery' | 'collection' | 'mixed';
export type StopStatus = 'pending' | 'arrived' | 'completed' | 'rejected';
export type ProofOutcome = 'full' | 'partial' | 'failed';

export interface NavItem {
	label: string;
	icon: 'dashboard' | 'route' | 'account';
	isActive: boolean;
	href?: string;
}

export interface RouteFact {
	icon: 'truck' | 'package' | 'scale' | 'clock' | 'map' | 'cloud';
	label: string;
	value: string;
}

export interface StopItem {
	id: string;
	sequence: number;
	status: StopStatus;
	taskType: RouteKind;
	siteName: string;
	orderNumber: string;
	timeSlot: string;
	address: string;
	eta: string;
	weightKg: number;
	contactName: string;
	contactPhone: string;
	proofOutcome?: ProofOutcome;
	proofSummary?: string;
	requirements: string[];
	isCurrent?: boolean;
}

export interface RouteSummary {
	id: string;
	status: RouteStatus;
	kind: RouteKind;
	vehicleType: string;
	stopCount: number;
	completedStops: number;
	weightKg: number;
	loadCheckRequired: boolean;
	requiresProofOfDelivery: boolean;
	syncHint: string;
	currentLeg: string;
	proofSyncStatus: string;
	dispatchUpdate?: string;
	stops: StopItem[];
}

export interface DashboardMetric {
	label: string;
	value: number;
	unit: string;
	icon: 'map' | 'check-circle';
}

export interface CurrentObjective {
	routeId: string;
	routeKind: RouteKind;
	label: string;
	status: RouteStatus;
	primaryAddress: string;
	secondaryAddress: string;
	ctaLabel: string;
	href: string;
}

export interface AccountProfile {
	name: string;
	initials: string;
	email: string;
	phone: string;
	role: 'Hybrid' | 'Driver' | 'Delivery Assistant';
	assignedRoles: string[];
	vehicle: string;
	dispatchPhone: string;
	build: string;
}

export interface DemoAccount {
	label: string;
	role: string;
	email: string;
	phone: string;
}

export const accountProfile: AccountProfile = {
	name: 'Harvey Henson',
	initials: 'HH',
	email: 'harvey.henson@hybrid.example',
	phone: '+254 712 430 880',
	role: 'Hybrid',
	assignedRoles: ['Driver', 'Delivery Assistant'],
	vehicle: 'KDA 458F - Heavy Van',
	dispatchPhone: '+254 700 220 110',
	build: 'Hybrid Logistics v0.4.2',
};

export const driverName = accountProfile.name.split(' ')[0];
export const driverInitials = accountProfile.initials;

export const routes: RouteSummary[] = [
	{
		id: 'R-312',
		status: 'active',
		kind: 'mixed',
		vehicleType: 'Heavy Van',
		stopCount: 4,
		completedStops: 2,
		weightKg: 450,
		loadCheckRequired: false,
		requiresProofOfDelivery: true,
		syncHint: '2 proof uploads pending sync',
		currentLeg: 'Westlands to Industrial Area',
		proofSyncStatus: 'Pending sync',
		dispatchUpdate: 'Dispatch added a side-gate note for stop 3.',
		stops: [
			{
				id: 'S-312-01',
				sequence: 1,
				status: 'completed',
				taskType: 'delivery',
				siteName: 'Green Basket Grocers',
				orderNumber: 'DO-88321',
				timeSlot: '08:30 - 09:15',
				address: 'Muthithi Road, Westlands',
				eta: 'Completed at 08:52',
				weightKg: 86,
				contactName: 'Amina Otieno',
				contactPhone: '+254 722 115 009',
				proofOutcome: 'full',
				proofSummary: 'Signed by Amina, 3 photos attached',
				requirements: ['Photo', 'Signature', 'Customer rating'],
			},
			{
				id: 'S-312-02',
				sequence: 2,
				status: 'arrived',
				taskType: 'delivery',
				siteName: 'Nairobi Fresh Mart',
				orderNumber: 'DO-88342',
				timeSlot: '09:30 - 10:15',
				address: '123 Logistics Avenue, Business District',
				eta: 'Arrived 09:47',
				weightKg: 122,
				contactName: 'David Mwangi',
				contactPhone: '+254 733 212 900',
				requirements: ['Produce photo', 'Invoice photo', 'Receiver signature'],
				isCurrent: true,
			},
			{
				id: 'S-312-03',
				sequence: 3,
				status: 'pending',
				taskType: 'collection',
				siteName: 'Highland Supplier Depot',
				orderNumber: 'POC-4410',
				timeSlot: '10:45 - 11:30',
				address: 'Lunga Lunga Road, Industrial Area',
				eta: '24 min',
				weightKg: 140,
				contactName: 'Grace Wanjiru',
				contactPhone: '+254 711 772 341',
				requirements: ['Supplier name', 'Signature', 'eTIMS invoice'],
			},
			{
				id: 'S-312-04',
				sequence: 4,
				status: 'rejected',
				taskType: 'delivery',
				siteName: 'Corner Pantry',
				orderNumber: 'DO-88356',
				timeSlot: '11:45 - 12:20',
				address: 'Mombasa Road, Gate B',
				eta: 'Rejected at 08:52',
				weightKg: 38,
				contactName: 'Joseph Kariuki',
				contactPhone: '+254 700 918 551',
				proofOutcome: 'failed',
				proofSummary: 'Receiver unavailable, dispatch notified',
				requirements: ['Failure reason', 'Photo'],
			},
		],
	},
	{
		id: 'R-322',
		status: 'assigned',
		kind: 'delivery',
		vehicleType: 'Heavy Van',
		stopCount: 8,
		completedStops: 0,
		weightKg: 510,
		loadCheckRequired: true,
		requiresProofOfDelivery: true,
		syncHint: 'Load check required before start',
		currentLeg: 'Warehouse bay 4',
		proofSyncStatus: 'No proof captured',
		stops: [
			{
				id: 'S-322-01',
				sequence: 1,
				status: 'pending',
				taskType: 'delivery',
				siteName: 'Valley Foods',
				orderNumber: 'DO-88401',
				timeSlot: '13:00 - 13:45',
				address: 'Ngong Road, Junction area',
				eta: 'Not started',
				weightKg: 95,
				contactName: 'Peter Maina',
				contactPhone: '+254 722 901 200',
				requirements: ['Photo', 'Signature'],
				isCurrent: true,
			},
		],
	},
	{
		id: 'R-330',
		status: 'ready_to_complete',
		kind: 'delivery',
		vehicleType: 'Van',
		stopCount: 5,
		completedStops: 5,
		weightKg: 220,
		loadCheckRequired: false,
		requiresProofOfDelivery: true,
		syncHint: 'All stops finalized',
		currentLeg: 'Returning to depot',
		proofSyncStatus: 'Synced',
		stops: [],
	},
	{
		id: 'R-318',
		status: 'completed',
		kind: 'delivery',
		vehicleType: 'Van',
		stopCount: 3,
		completedStops: 3,
		weightKg: 150,
		loadCheckRequired: false,
		requiresProofOfDelivery: false,
		syncHint: 'Completed yesterday',
		currentLeg: 'Closed',
		proofSyncStatus: 'Synced',
		stops: [],
	},
	{
		id: 'R-324',
		status: 'assigned',
		kind: 'collection',
		vehicleType: 'Van',
		stopCount: 2,
		completedStops: 0,
		weightKg: 90,
		loadCheckRequired: false,
		requiresProofOfDelivery: false,
		syncHint: 'Supplier POC required',
		currentLeg: 'Depot to supplier',
		proofSyncStatus: 'No proof captured',
		stops: [],
	},
	{
		id: 'R-326',
		status: 'assigned',
		kind: 'mixed',
		vehicleType: 'Van',
		stopCount: 5,
		completedStops: 0,
		weightKg: 220,
		loadCheckRequired: false,
		requiresProofOfDelivery: true,
		syncHint: 'New assignment',
		currentLeg: 'Awaiting dispatch release',
		proofSyncStatus: 'No proof captured',
		stops: [],
	},
];

export const metrics: DashboardMetric[] = [
	{ label: 'Assigned', value: 5, unit: 'routes', icon: 'map' },
	{ label: 'Completed', value: 1, unit: 'route', icon: 'check-circle' },
];

export const currentObjective: CurrentObjective = {
	routeId: 'R-312',
	routeKind: 'mixed',
	label: 'Next Stop - R-312',
	status: 'active',
	primaryAddress: 'Nairobi Fresh Mart',
	secondaryAddress: '123 Logistics Avenue, Business District',
	ctaLabel: 'Open Current Stop',
	href: '/routes/R-312/',
};

export const navItems: NavItem[] = [
	{ label: 'Dashboard', icon: 'dashboard', isActive: true, href: '/' },
	{ label: 'Routes', icon: 'route', isActive: false, href: '/routes/R-312/' },
	{ label: 'Account', icon: 'account', isActive: false, href: '/account/' },
];

export const demoAccounts: DemoAccount[] = [
	{ label: 'Driver', role: 'Driver', email: 'driver@hybrid.example', phone: '+254 700 111 001' },
	{
		label: 'Assistant',
		role: 'Delivery Assistant',
		email: 'assistant@hybrid.example',
		phone: '+254 700 111 002',
	},
	{ label: 'Hybrid', role: 'Hybrid', email: 'hybrid@hybrid.example', phone: '+254 700 111 003' },
];

export const loadCheckOrders = [
	{
		customer: 'Valley Foods',
		orderNumber: 'DO-88401',
		timeSlot: '13:00 - 13:45',
		weightKg: 95,
		items: [
			{ name: 'Tomatoes crate', dispatched: 12, loaded: 12 },
			{ name: 'Spinach bundle', dispatched: 18, loaded: 17 },
			{ name: 'Avocado carton', dispatched: 8, loaded: 8 },
		],
	},
	{
		customer: 'Cedar Kitchen',
		orderNumber: 'DO-88409',
		timeSlot: '14:10 - 14:55',
		weightKg: 70,
		items: [
			{ name: 'Potato sack', dispatched: 6, loaded: 6 },
			{ name: 'Onion bag', dispatched: 5, loaded: 5 },
		],
	},
];

export function getRoute(routeId: string | undefined) {
	return routes.find((route) => route.id === routeId) ?? routes[0];
}

export function getCurrentStop(route: RouteSummary) {
	return route.stops.find((stop) => stop.isCurrent) ?? route.stops[0];
}

export function titleCaseStatus(status: string) {
	return status
		.split('_')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
}
