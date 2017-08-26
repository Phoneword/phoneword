import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      
       <main classNameName="container">
         <div classNameName="pure-g">
           <div classNameName="pure-u-1-1">
             <span>
               <p>Please log in to use the application. This requires a running an unlocked ethereum client such as geth so that you can communicate with the Ethereum blockchain. Or you can instead use MetaMask. This restriction will me removed in a future release.</p>
             </span>
            </div>
         </div>
       </main>
    )
  }
}

export default Home
