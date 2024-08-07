import React from 'react'
import {Header} from './components/Header'
import { RecoilRoot } from "recoil";
import {Sidebar} from "./components/sidebar"
import { Overview } from './components/Overview';
import { Transactions } from './components/Transactions';

export default function App() {
  return (
    <RecoilRoot>
     <div className="flex w-full">
      <Sidebar/>
      <div className="w-full">
       <Header />
        <main className="p-3 sm:p-8 w-full gap-8 flex flex-col bg-[#fafafa]">
          <Overview />
          <Transactions/>
          <h5 className="text-center text-gray-500">Made with ❤️ & 🧠 by <a className="underline font-bold" target="_blank" href="https://x.com/_Omkar_Bansod">Omkar Bansod</a></h5>
        </main>
        </div>
      
    </div>
    
      
      </RecoilRoot>
  )
}