import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from "../apiService/apis"

const Container = styled(FormGroup)`
    width: 30%;
    margin: 5% 0 0 35%;
    & > div {
        margin-top: 20px;
`;
const initialValue = {
    name: '',
    address: '',
    mobile: ''
}

function AddUser() {

    const [user, setUser] = useState(initialValue);
    const { name, address, mobile } = user;
    let navigate = useNavigate();
    const onValueChanged = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const HandleaddUser = async () => {
        await addUser(user);
        alert("User Added Sucessfully")
        navigate('/alluser');
    }
    return (
        <Container>
            <Typography variant='h4'>
                Add User
            </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChanged(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel>Mobile</InputLabel>
                <Input onChange={(e) => onValueChanged(e)} name='mobile' value={mobile} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e) => onValueChanged(e)} name='address' value={address} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => HandleaddUser()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser