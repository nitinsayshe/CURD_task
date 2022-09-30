import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button } from '@mui/material'
import react, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from "../apiService/apis";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { alpha } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const StyledTable = styled(Table)`
    width: 50%;
    margin: 50px 0 0 400px;
    
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

function AllUsers() {

    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
  

 
    console.log(query)
    useEffect(() => {
        getAlluser();
    }, [])

    const getAlluser = async () => {
        let response = await getUsers();
        console.log(response.data)
        setUsers(response.data)
    }
    const deleteUserData = async (id) => {
        await deleteUser(id);
        alert("Delete User SuccesFully")
        getAlluser();
    }
    
 

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    
                    <TableCell>Name</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </Search>
                    </TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.filter((user) =>
                        user.name.toLowerCase().includes(query)).map((user) => (
                            <TableRow>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.mobile}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" style={{ marginRight: 5 }} component={Link} to={`/edituser/${user._id}`}>Edit</Button>
                                    <Button startIcon={<DeleteIcon />} color="error" variant="outlined" onClick={() => deleteUserData(user._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                }
            </TableBody>
           
        </StyledTable>
    )
}

export default AllUsers