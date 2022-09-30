import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import react, { useState ,useEffect} from 'react';
import { useNavigate ,useParams} from 'react-router-dom';
import { editUser ,getUser} from "../apiService/apis"

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

function EditUser() {

    const [user, setUser] = useState(initialValue);
    const { name, address, mobile } = user;
    let navigate = useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        loadUserDetails();
    },[]);

    const loadUserDetails=async()=>{
        const response=await getUser(id)
        setUser(response.data)
    }
   
    const HandleEditUser = async () => {
        const response = await editUser(id, user);
        alert("User Edit Sucessfully")
        navigate('/alluser');
    }
    const onValueChanged = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <Container>
            <Typography variant='h4'>
                Edit User
            </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChanged(e)} name='name' value={user.name}  />
            </FormControl>
            <FormControl>
                <InputLabel>Mobile</InputLabel>
                <Input onChange={(e) => onValueChanged(e)} name='mobile' value={user.mobile}  />
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e) => onValueChanged(e)} name='address' value={user.address} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => HandleEditUser()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser