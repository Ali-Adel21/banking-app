import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Ali' , lastName:'Adel', email: 'contact@gmail.com'};

  return (
    <section className='home'>
    <div className='home-content'>
      <header className='home-header'>
        <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Access and Manage your account and transaction efficently'
         />

         <TotalBalanceBox 
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={1000.00}
         />
      </header>  
      RECENT TRANSACTIONS    
    </div>  

    <RightSidebar
    user = {loggedIn}
    transactions = {[]}
    banks={[{ currentBalance: 7250.20 }, { currentBalance: 2000.00 }]}
    />
    </section>
  )
}

export default Home
