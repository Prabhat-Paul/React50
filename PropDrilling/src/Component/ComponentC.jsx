
import { useContext } from 'react'
import {DataContext, DataContext2} from '../App'

const Component = () => {
  const myName = useContext(DataContext)
  const myGirl = useContext(DataContext2)
  return (
    <p>
      I am {myName} and my girl is {myGirl}
    </p>
  )

  // return ( //Without useContext Hook
  //   <DataContext.Consumer>
  //     {
  //       (name)=>{
  //         return (
  //           <DataContext2.Consumer>
  //             {
  //               (name2)=>{
  //                 return <p> My name is {name} and my girl is {name2}</p>
  //               }
  //             }
  //           </DataContext2.Consumer>   

  //         )    
  //       }
  //     }
  //   </DataContext.Consumer>
  // )
}

export default Component