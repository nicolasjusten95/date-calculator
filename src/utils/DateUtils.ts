import { TimePeriod } from "../data/Data";

export function calculateDaysBetweenDates(startDate: Date, endDate: Date): number {
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const differenceInMilliseconds = Math.abs(endTime - startTime);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysDifference = differenceInMilliseconds / millisecondsPerDay;
    return Math.floor(daysDifference);
}

function calculateDaysBetweenTimePeriod(period: TimePeriod): number {
    return calculateDaysBetweenDates(period.startDate, period.endDate);
}

export function calculateDaysBetweenTimePerios(periods: TimePeriod[]): number {
    let result = 0;
    for (const period of periods) {
        result += calculateDaysBetweenTimePeriod(period);
    }
    return result;
}

export function calculateTargetDate(currentDate: Date, daysToGo: number): Date {
    const resultDate = new Date(currentDate);
    resultDate.setDate(resultDate.getDate() + daysToGo);
    return resultDate;
}

export function calculatePredictedTargetDate(currentDate: Date, daysToGo: number, percentAbsent: number): Date {
    const predictedDaysToGo = daysToGo * (1 + (percentAbsent / 100));
    const resultDate = new Date(currentDate);
    resultDate.setDate(resultDate.getDate() + predictedDaysToGo);
    return resultDate;
}