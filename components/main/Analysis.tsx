import React from 'react'

export default function Analysis({numberOfChar, numberOfCharInstaLeft, numberOfCharFacebookLeft, numOfWord}:
   {numberOfChar: number, numberOfCharInstaLeft:number, numberOfCharFacebookLeft: number, numOfWord: number}) {
  return (
    <div className=' bg-slate-300 w-[45%] grid grid-cols-1 lg:grid-cols-2'>
      <Stat num={numOfWord} word={'WORDS'}/>
      <Stat num={numberOfChar} word={'CHARACTERS'}/>
      <Stat num={numberOfCharInstaLeft} word={'INSTAGRAM'}/>
      <Stat num={numberOfCharFacebookLeft} word={'FACEBOOK'}/>
    </div>
  )
}

function Stat({num, word}: {num: number, word: string}){
  return (
    <div className=' flex flex-col justify-center items-center border border-slate-400'>
      <p className={`text-xl font-semibold ${num<0 ? ' text-red-500' : 'text-gray-900'}`}>{num}</p>
      <p className=' text-xs font-medium text-gray-800'>{word}</p>
    </div>
  )
}