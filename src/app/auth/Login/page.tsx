
'use client'
import axios from "axios"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import Input from "@/component/Input";
export default function  Login(){

//   const {register ,handleSubmit  } = useForm() 
// const dispatch = useDispatch();
//    const navigate = useNavigate()

 const [email , setEmail] = useState('')
 const [password , setPassword] = useState('')
 const router = useRouter()

const loginuser =  async () =>{
     const res = axios.post('http://localhost:8000/api/v1/user/login', {
      email ,
      password
     })

     if(res){
      console.log(res)
    }
    router.replace('/Home')
    // dispatch(loginData({userData})) 
    // navigate('/Home')
}

  return (
    <div className='h-screen w-full px-5 flex justify-center items-center bg-gray-200'>
       <div className='w-[400px]  py-5 rounded-2xl text-white bg-gray-800'>
            <div className='text-lg font-medium text-center pt-5'>
                    welcome to Stream-App
            </div>
            {/* <form onSubmit={handleSubmit(login)}> */}
                <div className='mt-5  grid gap-4 text-black'>
                    <div className='px-6 '>
                        <Input type="email" className="rounded-lg" placeholder='Email'/>
                    </div>
                    <div className='px-6'>
                          <Input type="password" className="rounded-lg" placeholder='Password' />
                    </div>
                    <div className='px-10 mt-5'>
                      <button className="bg-blue-500 text-white font-medium text-lg rounded-lg py-1 w-full" onClick={loginuser}>
                        login
                      </button>
                        {/* <Button type="submit" className="bg-blue-500 text-white font-medium text-lg rounded-lg py-1 w-full"   value={'Login'}/> */}
                    </div>
                </div>
            {/* </form> */}
             <div className='text-sm font-medium text-center mt-3' >
                Create Account <span className='text-blue-500'><Link href={"/auth/SignUp"}>SignUp</Link></span>
             </div>
       </div>
    </div>
  )
}

