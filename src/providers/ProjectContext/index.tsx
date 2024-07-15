"use client";

import { IProject, IProjectBE } from "@/interfaces/project.interface";
import { ReactNode, createContext, useContext, useState } from "react";

interface ProjectContextProps {
  isOpen: boolean;
  selectedProject: IProject | null;
  selectedBackendProject: IProjectBE | null;
  openProjectModal: (project: IProject) => void;
  closeProjectModal: () => void;
  openBEProjectModal: (backend: IProjectBE) => void;
  closeBEProjectModal: () => void;
}

export const ProjectContext = createContext<ProjectContextProps | undefined>(
  undefined
);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [selectedBackendProject, setSelectedBackendProject ] = useState<IProjectBE | null>(null);

  const openProjectModal = (project: IProject) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeProjectModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const openBEProjectModal = (project: IProjectBE) => {
    setSelectedBackendProject(project);
    setIsOpen(true);
  };

  const closeBEProjectModal = () => {
    setIsOpen(false);
    setSelectedBackendProject(null);
  };



  return (
    <ProjectContext.Provider
      value={{ isOpen, selectedProject, openProjectModal, closeProjectModal, selectedBackendProject, openBEProjectModal, closeBEProjectModal }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};
