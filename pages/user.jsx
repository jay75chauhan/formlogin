import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const user = () => {
  const router = useRouter()
  const { user, email, password } = router.query

  const d = 'm-3 rounded-2xl px-4  bg-gray-300 p-2 text-2xl shadow'

  const data = {
    companies: [
      { name: 'eslabs', branches: ['mumbai', 'goa'] },
      { name: 'empezar', branches: ['gandhidham', 'mundra'] },
    ],
  }

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 ">
        <h1 className={d}>user Name :{user}</h1>
        <h1 className={d}>user Email :{email}</h1>
        {data.companies.slice(0, 1).map((company, index) => (
          <h1 className={d}>{company.branches[1]}</h1>
        ))}

        <button
          onClick={() => router.push('./')}
          className="translate mt-10 rounded-lg bg-black p-2 px-10 text-white  shadow outline-none "
        >
          SignOut
        </button>
      </div>
    </div>
  )
}

export default user
