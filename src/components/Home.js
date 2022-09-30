import { Container } from '@mui/system';
import * as React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material'

const Div = styled(Container)`
    margin-top: 50px;
    margin-left: 400px;
    text-decoration: none;
    font-size: 40px;
`;
function Home() {
  return (
    <Div>
        <h3>User Data Base CURD with MEARN</h3>
      
        Nitin Sayshe<br></br>
        nitinsayshe@gmail.com
    </Div>
  )
}

export default Home