import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Home = () => {
  const [user, setUser] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')

  const route = useRouter()

  const onInputChange = (e) => {
    const { value } = e.target

    const re = /^[A-Za-z]+$/
    if (value === '' || re.test(value)) {
      setUser(value)
    }
  }

  console.log({
    user: user,
    email: email,
    password: password,
  })

  return (
    <div className="  flex min-h-screen flex-col items-center justify-center bg-gray-200 ">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md: flex-col  items-center space-y-5 rounded-2xl bg-white px-10 py-10  shadow-2xl md:py-20 md:px-20">
        <h1 className="mb-10 text-center text-4xl font-semibold">Login Form</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={user}
          maxLength="10"
          onChange={onInputChange}
          className="w-full rounded-lg border-2 bg-gray-300 p-2 text-gray-900 shadow  outline-none"
        />
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          placeholderTextColor="black"
          className=" w-full rounded-lg bg-gray-300 p-2 text-gray-900 shadow outline-none"
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="black"
          className=" w-full rounded-lg bg-gray-300 p-2 text-gray-900 shadow outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => {
            if (user && email && password) {
              route.push({
                pathname: '/user',
                query: { user, email, password },
              })
            } else {
              alert('Please enter all the fields')
            }
          }}
          className="translate mt-28 w-full rounded-lg bg-black p-2 text-xl font-medium text-white  shadow outline-none "
        >
          Login
        </button>
      </main>
    </div>
  )
}

export default Home
