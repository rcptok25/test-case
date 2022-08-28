import Image from 'next/image'
import LoginPagebg from './../styles/images/login_bg.png'
export default function Register() {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
    <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
     <Image src={LoginPagebg} alt="" className="w-full h-full object-cover" />
  </div>
  <div
    className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center justify-center"
  >
    <div className="w-full h-100">
      <h1 className="text-xl font-bold">TestApp - Register</h1>
      
      <form className="mt-6" action="#" method="POST">
      <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autofocus=""
            autoComplete=""
            required=""
          />
        </div>
        <div>
          <label className="block text-gray-700">Surname</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Surname"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autofocus=""
            autoComplete=""
            required=""
          />
        </div>
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Username"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autofocus=""
            autoComplete=""
            required=""
          />
        </div>
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Username"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autofocus=""
            autoComplete=""
            required=""
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
            minLength={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
            required=""
          />
        </div>
      
        <button
          type="submit"
          className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
        >
          Register
        </button>
      </form>
     
     
      <p className="text-sm text-gray-500 mt-12">
        © 2022 TestApp - All Rights Reserved.
      </p>
    </div>
  </div>
</section>

  )
}
