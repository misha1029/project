import { ICategory, IProject } from "shared/types/project.types";

export interface IProjectEditInput extends Omit<IProject, '_id'>{}

export interface ICategoryEditInput extends Omit<ICategory, '_id'>{}