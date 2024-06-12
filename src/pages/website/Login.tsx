import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../features/users/userSlice'
import { IUser } from '../../types/user'
import { RootState } from '../../app/store'
import Modal from './Modal'
import Register from './Register'

function Login(props: any) {
  const { onClose } = props
  const users = useSelector((state: RootState) => state.allUser.listUsers)

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUsers())
    // const ListUsers = async () => {
    //   const { data } = await getUsers();
    //   console.log(data);
    //   // console.log(items);
    //   setUsers(data);
    // }
    // ListUsers();
  }, [])

  const handleHidePassword = () => {
    setOpen(!open)
  }

  const handleSubmit = () => {
    const userLogin = users?.find((item: IUser, index) => {
      if (item.email === email && item.password === password) {
        onClose()
        return item
      }
    })
    console.log("userLogin", userLogin);
  }

  return (
    <div className='w-[70%] m-auto'>
      <p className='text-center mt-[30px]'>LOGIN ACCOUNT</p>
      <div className='flex items-center my-4 w-[100%]'>
        <label className='w-[20%] text-right'>Email: </label>
        <div className='w-[400px]'>
          <Input value={email} onchane={(e: any) => setEmail(e.target.value)} type="email" bgr={`bg-[#f1f1f1] outline-[#e5642f] text-[14px] h-[30px] ml-6 px-3`} />
        </div>
      </div>
      <div className='flex items-center'>
        <label className='w-[20%] text-right'>Password: </label>
        <div className='w-[400px] relative '>
          <Input value={password} onchane={(e: any) => setPassword(e.target.value)} type={open === false ? "password" : "text"} bgr={`bg-[#f1f1f1] outline-[#e5642f] text-[14px] h-[30px] ml-6 px-3`} />
          {open === false ? <button onClick={handleHidePassword} className='bg-gray-600 text-white w-[50px] h-[29px] mt-[0.5px] text-[12px] absolute right-[-22px] top-0'>SHOW</button> : <button onClick={handleHidePassword} className='bg-gray-600 text-white w-[50px] h-[29px] mt-[0.5px] text-[12px] absolute right-[-22px] top-0'> HIDE</button>}
        </div>
      </div>
      <div className='flex justify-center m-5 '>
        <div className='hidden'></div>
        <button onClick={handleSubmit} className='bg-gray-600 text-white text-[14px] px-5 py-2 hover:bg-[#e5642f]'>SIGN IN</button>
      </div>
      <div className='flex flex-col text-center mb-[30px]'>
        <Link to={"/"} className='hover:text-[#e5642f] text-[14px]'>Forgot your password?</Link>
        <Link to={"/"} className='hover:text-[#e5642f] text-[14px]'>Go to crate account</Link>
      </div>
    </div >
  )
}

export default Login
