import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
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

    function createData(name: string, data: string) {
        return { name, data };
    }

    const rows = [
        createData("Start Date", startDate.toLocaleDateString()),
        createData("Current date", currentDate.toLocaleDateString()),
        createData("Days done", daysDone.toString()),
        createData("Days to go", daysToGo.toString()),
        createData("Percentage done", percentDone + "%"),
        createData("Days absent", daysAbsent.toString()),
        createData("Percentage absent", percentAbsent + "%"),
        createData("Earliest possible finish date", earliestPossibleDate.toLocaleDateString()),
        createData("Predicted finish date", predictedDate.toLocaleDateString()),
    ]

    return (
        <Box display={"flex"} flexDirection={"column"} width={"30%"} margin={"100px"}>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.data}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
};

export default Home;