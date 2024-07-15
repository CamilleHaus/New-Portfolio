import { StaticImageData } from "next/image";

export interface IProject {
    id: number;
    image: StaticImageData;
    title: string;
    responsive: boolean;
    subtitle: string;
    description: string;
    github: string;
    vercel: string | null;
};

export interface IProjectCard {
    project: IProject
}

export interface IProjectBE {
    id: number;
    image: StaticImageData;
    title: string;
    techs: string,
    description: string;
    github: string;
};

export interface IProjectCardBE {
    backend: IProjectBE
}