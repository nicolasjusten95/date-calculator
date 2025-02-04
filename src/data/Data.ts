export interface TimePeriod {
    startDate: Date;
    endDate: Date;
};

export const startDate: Date = new Date("2023-09-01");
export const currentDate: Date = new Date();
export const daysToDo: number = 915;
export const absentPeiods: TimePeriod[] = [
    { startDate: new Date("2023-10-01"), endDate: new Date("2023-10-10") },
    { startDate: new Date("2024-10-01"), endDate: new Date("2024-10-10") },
];