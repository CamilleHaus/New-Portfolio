import { StaticImageData } from "next/image";

export interface IProject {
    id: number;
    image: StaticImageData;
    title: string;
    responsive: boolean;
    description: string;
    github: string;
};

export interface IProjectCard {
    project: IProject
}