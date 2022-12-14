import {useState} from 'react'
import {Grid, Button} from '@mui/material';
import AddUsers from './AddUsers';
import ViewUsers from './ViewUsers';
import FindDegree from './FindDegree';
import SetRelation from './SetRelation';
import { Routes, Route, Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  const [users, setUsers] = useState({})
  const userNames = []
  for(let user in users)
  {
    userNames.push(user)
  }

  return (
    <>
        <Grid className='grid_buttons' container>

          <Link to='/' className='link' >
            <Button variant='contained'>Add users</Button>
          </Link>

          <Link to='relation' className='link'>
            <Button variant='contained'>Set relation</Button>
          </Link>

          <Link to='view' className='link'>
            <Button variant='contained'>View users</Button>
          </Link>

          <Link to='degree' className='link'>
            <Button variant='contained'>Find degree</Button>
          </Link>

        </Grid>

        <Routes>
          <Route path='/' element={<AddUsers users={users} setUsers={setUsers}/>} />
          <Route path='relation' element={<SetRelation users={users} setUsers={setUsers} userNames={userNames}/>} />
          <Route path='view' element={<></>} />
          <Route path='degree' element={<FindDegree users={users} userNames={userNames}/>} />
        </Routes>
        <ViewUsers users={users} userNames={userNames}/>
    </>
  )
}

export default Home