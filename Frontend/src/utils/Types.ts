export type ModalModel = {
  title: string;
  dateString?: string;
  description?: string;
  tags?: string[];
  images?: ImageModel[];
};

export type ImageModel = {
  url: string;
  alt: string;
}

export type EventModel = {
  id: string;
  date: Date;
} & ModalModel;

export type ServiceModel = {
  id: string;
  thumbnail: string;
  order: number;
  disabled?: boolean;
} & ModalModel;

export type LeadFormContact = {
  id: string;
  date: string;
  name: string;
  email: string;
  content: string;
};

export type DataSet = {
  events?: DataLoad;
  services?: DataLoad;
};

export type DataLoad = {
  data?: object[];
  loading: boolean;
};

export type SkillModel = {
  id: string;
  name: string;
  level: number;
  description?: string;
  type: 'back-end' | 'front-end' | 'devops' | 'other';
};