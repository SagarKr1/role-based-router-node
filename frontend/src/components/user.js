import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(email, name, phone, role) {
    return { email, name, phone, role };
}

const rows = [
    createData('sagar@gmail.com', "Sagar Kumar", 1234567890, "admin"),
    createData('sachin@gmail.com', "Sachin Kumar", 1234567890, "user"),
    createData('rahul@gmail.com', "Rahul Kumar", 1234567890, "subadmin"),
    createData('DjAlok@gmail.com', "Alok Kumar", 1234567890, "user"),
    createData('Mango@gmail.com', "Mike Tyson", 1234567890, "user"),
];

export default function User() {
    async function deleteUser(user) {
        console.log(user);
    }
    return (
        <div>
            <Box>
                <Box>
                {/* <SwipeableEdgeDrawer/> */}
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>E-mail</StyledTableCell>
                                <StyledTableCell align="right">Name</StyledTableCell>
                                <StyledTableCell align="right">Phone</StyledTableCell>
                                <StyledTableCell align="right">Role</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.email}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.email}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                    <StyledTableCell align="right">{row.role}</StyledTableCell>
                                    <StyledTableCell align="right"><Button onClick={() => deleteUser(row.email)}><DeleteIcon /></Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}
