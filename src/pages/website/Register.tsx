import React, { useState } from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAddUser } from '../../features/users/userSlice'
import { IUser } from '../../types/user'

function Register(props: any) {
  const { onClose } = props
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleHidePassword = () => {
    setOpen(!open)
  }

  const handleSubmit = () => {
    const addUser: IUser = {
      email: email,
      phone: phone,
      password: password,
    }
    dispatch(fetchAddUser(addUser))
    onClose()
    // navigate(`/login`)
  }

  return (
    <div className='w-[80%] m-auto'>
      <p className='text-center mt-[30px]'>CREATE ACCOUNT</p>
      <div className='flex items-center my-4 w-[100%]'>
        <label className='w-[20%] text-right'>Email: </label>
        <div className='w-[400px]'>
          <Input value={email} onchane={(e: any) => setEmail(e.target.value)} type="email" bgr={`bg-[#f1f1f1] outline-[#e5642f] text-[14px] h-[30px] ml-6 px-3`} />
        </div>
      </div>
      <div className='flex items-center my-4 w-[100%]'>
        <label className='w-[20%] text-right'>Phone Number: </label>
        <div className='w-[400px]'>
          <Input value={phone} onchane={(e: any) => setPhone(e.target.value)} type="text" bgr={`bg-[#f1f1f1] outline-[#e5642f] text-[14px] h-[30px] ml-6 px-3`} />
        </div>
      </div>
      <div className='flex my-4 items-center'>
        <label className='w-[20%] text-right'>Password: </label>
        <div className='w-[400px] relative'>
          <Input value={password} onchane={(e: any) => setPassword(e.target.value)} type={open === false ? "password" : "text"} bgr={`bg-[#f1f1f1] outline-[#e5642f] text-[14px] h-[30px] ml-6 px-3`} />
          {open === false ? <button onClick={handleHidePassword} className='bg-gray-600 text-white w-[50px] h-[29px] mt-[0.5px] text-[12px] absolute right-[-22px] top-0'>SHOW</button> : <button onClick={handleHidePassword} className='bg-gray-600 text-white w-[50px] h-[29px] mt-[0.5px] text-[12px] absolute right-[-22px] top-0'>HIDE</button>}
        </div>
      </div>
      <div className='flex justify-center m-5 '>
        <div className='hidden'></div>
        <button onClick={handleSubmit} className='bg-gray-600 text-white text-[14px] px-5 py-2 hover:bg-[#e5642f]'>REGISTER</button>
      </div>
      <div className='flex flex-col text-center mb-[30px]'>
        <Link to={`/`} className='hover:text-[#e5642f] text-[14px]'>Forgot your password?</Link>
        <Link to={`/`} className='hover:text-[#e5642f] text-[14px]'>Go to login</Link>
      </div>
    </div>
  )
}

export default Register
