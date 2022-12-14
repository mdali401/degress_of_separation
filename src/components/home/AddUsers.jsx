import {useState} from 'react'
import {Box, TextField, Button, Select, MenuItem} from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


const AddUsers = ({users, setUsers}) => {

  const [name, setName] = useState('')

  const addUser = (e) => {
    e.preventDefault()
    if(!name) return
    if(name in users) return
    
    setUsers(users => ({...users, [name]: {'friends': []}}))
    setName('')
  }
  
  return (
    <Box>
        <form className='addusers_form' onSubmit={(e) => addUser(e)}>

            <TextField 
                id="outlined-basic" 
                label="Enter user name" 
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}>
            </TextField>

            <Select value={'friend'} >
              <MenuItem value={'friend'}>Friend</MenuItem>           
            </Select>

            <Button variant='contained' color='success' className='add_button' type='submit'><PersonAddAlt1Icon />Add</Button>
        
        </form>
    </Box>

  )
}

export default AddUsers