export type ModalModel = {
	title: string;
	date: string;
	description: string;
	tags: string[];
	images: string[];
};

export type EventModel = {
	id: string;
	intro: string;
} & ModalModel;

export type ServiceModel = {
	id: string;
	thumbnail: string;
} & ModalModel;

export type LeadFormContact = {
	id: string;
	date: string;
	name: string;
	email: string;
	content: string;
};
