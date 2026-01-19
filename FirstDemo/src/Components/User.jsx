import React from 'react'

const User = () => {
  const userInfo = [{
    name: "John Doe",
    email: "john@gmail.com",
    occupation: "Software Developer"
  },
  {
    name: "Jane Smith",
    email: "jane@gmail.com",
    occupation: "Designer"
  },
  {
    name: "Mike Johnson",
    email: "Mike89@gmail.com",
    occupation: "Product Manager"
  }
]

  return (
    <main>
      {
        userInfo.map(({userName,email,occupation,age=30}, index) => (
          <div key={index}>
            <h2>Name: {userName}</h2>
            <p>Email: {email}</p>
            <p>Occupation: {occupation}</p>
            <p>Age: {age}</p>
          </div>
        ))
      }
    </main>
  )
    
}

export default User;