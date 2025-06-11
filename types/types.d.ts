export interface Project {
	name: string;
	description: string;
	urls: ProjectURL[];
	languageDetails: string;
	thumb?: string;
}

export type ProjectList = Array<Project>;

export interface ProjectURL {
	url: string;
	text: string;
}