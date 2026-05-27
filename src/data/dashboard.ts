export type RouteStatus = 'Active' | 'Completed' | 'Assigned' | 'Collection';

export interface RouteSummary {
	id: string;
	status: RouteStatus;
	vehicleType: string;
	stopCount: number;
	weightKg: number;
	requiresProofOfDelivery: boolean;
}

export interface DashboardMetric {
	label: string;
	value: number;
	unit: string;
	icon: 'map' | 'check-circle';
}

export interface CurrentObjective {
	routeId: string;
	label: string;
	status: RouteStatus;
	primaryAddress: string;
	secondaryAddress: string;
	ctaLabel: string;
}

export interface NavItem {
	label: string;
	icon: 'dashboard' | 'route' | 'account';
	isActive: boolean;
	href?: string;
}

export const driverName = 'Harvey';
export const driverInitials = 'HH';

export const metrics: DashboardMetric[] = [
	{
		label: 'Assigned',
		value: 5,
		unit: 'routes',
		icon: 'map',
	},
	{
		label: 'Completed',
		value: 1,
		unit: 'route',
		icon: 'check-circle',
	},
];

export const currentObjective: CurrentObjective = {
	routeId: 'R-312',
	label: 'Next Stop - R-312',
	status: 'Active',
	primaryAddress: '123 Logistics Avenue',
	secondaryAddress: 'Business District, City 45678',
	ctaLabel: 'Open Current Stop',
};

export const routeFilters = ['All', 'Delivery', 'Collection', 'Mixed'];

export const routes: RouteSummary[] = [
	{
		id: 'R-312',
		status: 'Active',
		vehicleType: 'Heavy Van',
		stopCount: 7,
		weightKg: 450,
		requiresProofOfDelivery: true,
	},
	{
		id: 'R-318',
		status: 'Completed',
		vehicleType: 'Van',
		stopCount: 3,
		weightKg: 150,
		requiresProofOfDelivery: false,
	},
	{
		id: 'R-322',
		status: 'Assigned',
		vehicleType: 'Heavy Van',
		stopCount: 8,
		weightKg: 510,
		requiresProofOfDelivery: true,
	},
	{
		id: 'R-324',
		status: 'Collection',
		vehicleType: 'Van',
		stopCount: 2,
		weightKg: 90,
		requiresProofOfDelivery: false,
	},
	{
		id: 'R-326',
		status: 'Assigned',
		vehicleType: 'Van',
		stopCount: 5,
		weightKg: 220,
		requiresProofOfDelivery: false,
	},
];

export const navItems: NavItem[] = [
	{
		label: 'Dashboard',
		icon: 'dashboard',
		isActive: true,
		href: '/',
	},
	{
		label: 'Routes',
		icon: 'route',
		isActive: false,
	},
	{
		label: 'Account',
		icon: 'account',
		isActive: false,
	},
];
