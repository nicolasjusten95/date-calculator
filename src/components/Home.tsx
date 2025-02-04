import { absentPeiods, currentDate, daysToDo, startDate } from "../data/Data";
import { calculateDaysBetweenDates, calculateDaysBetweenTimePerios, calculatePredictedTargetDate, calculateTargetDate } from "../utils/DateUtils";

const Home = () => {

    const daysDone = calculateDaysBetweenDates(startDate, currentDate);
    const daysToGo = daysToDo - daysDone;
    const percentDone = Math.round((daysDone / daysToDo) * 100);
    const daysAbsent = calculateDaysBetweenTimePerios(absentPeiods);
    const percentAbsent = Math.round((daysAbsent / (daysAbsent + daysDone)) * 100);
    const earliestPossibleDate = calculateTargetDate(currentDate, daysToGo);
    const predictedDate = calculatePredictedTargetDate(currentDate, daysToGo, percentAbsent);

    return (
        <div>
            <div>
                Start date: {startDate.toLocaleDateString()}
            </div>
            <div>
                Current date: {currentDate.toLocaleDateString()}
            </div>
            <div>
                Days done: {daysDone}
            </div>
            <div>
                Days to go: {daysToGo}
            </div>
            <div>
                Percentage done: {percentDone}%
            </div>
            <div>
                Days absent: {daysAbsent}
            </div>
            <div>
                Percentage absent: {percentAbsent}%
            </div>
            <div>
                Earliest possible finish date: {earliestPossibleDate.toLocaleDateString()}
            </div>
            <div>
                Predicted finish date: {predictedDate.toLocaleDateString()}
            </div>
        </div>
    );
};

export default Home;