import { Project } from './project';
import {EMPLOYES} from './mock-employes';

export const PROJETS: Project[] = [
  { id: 1, name: 'Webapp', type: 'Web application', employes: [EMPLOYES[2], EMPLOYES[3]] },
  { id: 2, name: 'Mobapp', type: 'Mobile application', employes: [EMPLOYES[1], EMPLOYES[4]] },
  { id: 3, name: 'Intapp', type: 'Intern application', employes: [EMPLOYES[5], EMPLOYES[6]] },
];
