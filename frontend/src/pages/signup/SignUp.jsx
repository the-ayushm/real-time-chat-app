import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {
    const [inputs , setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const {loading,signup} = useSignUp()
const handleSubmit = async(e) => {
    e.preventDefault()
    await signup(inputs)   
}

    const handleCheckBoxChange = (gender) => {
        setInputs({...inputs , gender}) 
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center'>Sign Up <span className='text-blue-500'> ChatApp </span>

        </h1>
        <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text ">Fullname</span>
                        </label>
                        <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" 
                        value={inputs.fullname} 
                        onChange={(e) => {setInputs({...inputs, fullName:e.target.value})}}/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input 
                        type="text" placeholder="johndoe" className="w-full input input-bordered h-10" 
                        value={inputs.username} 
                        onChange={(e) => {setInputs({...inputs, username:e.target.value})}}/>
                    </div>


                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input 
                        type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" 
                        value={inputs.password} 
                        onChange={(e) => {setInputs({...inputs, password:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input 
                        type="password" placeholder="Enter Confirm Password" className="w-full input input-bordered h-10" 
                        value={inputs.confirmPassword}  
                        onChange={(e) => {setInputs({...inputs, confirmPassword:e.target.value})}}/>
                    </div>

          <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}></GenderCheckBox>
                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
                        Already have an account?
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Sign Up

                        </button>
                    </div>
                </form>


      </div>

    </div>
  )
}

export default SignUp


// STARTER CODE FOR SIGNUP component
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center'>Sign Up <span className='text-blue-500'> ChatApp </span>

//         </h1>
//         <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text ">Fullname</span>
//                         </label>
//                         <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10"/>
//                     </div>

//                     <div>
//                         <label className="label">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input 
//                         type="text" placeholder="johndoe" className="w-full input input-bordered h-10" />
//                     </div>


//                     <div>
//                         <label className="label">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input 
//                         type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label">
//                             <span className="text-base label-text">Confirm Password</span>
//                         </label>
//                         <input 
//                         type="password" placeholder="Enter Confirm Password" className="w-full input input-bordered h-10" />
//                     </div>

//           <GenderCheckBox></GenderCheckBox>
//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
//                         Already have an account?
//                     </a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">Sign Up

//                         </button>
//                     </div>
//                 </form>


//       </div>

//     </div>
//   )
// }

// export default SignUp