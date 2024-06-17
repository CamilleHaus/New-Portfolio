import { StaticImageData } from "next/image";

export interface IProject {
    id: number;
    image: StaticImageData;
    title: string;
    responsive: boolean;
    subtitle: string;
    description: string;
    github: string;
    vercel: string;
};

export interface IProjectCard {
    project: IProject
}