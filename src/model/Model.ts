export enum WorkingPossition {
    JUNIOR,
    PROGRAMMER,
    ENGINNER,
    EXPERT,
    MANAGER
}

export interface Employee {
    name: string;
    age: number;
    admin: boolean;
    possition: WorkingPossition
}
