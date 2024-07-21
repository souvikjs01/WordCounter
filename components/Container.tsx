'use client'
import React, { useState } from 'react'
import TextArea from './main/TextArea'
import Analysis from './main/Analysis'
import { MAX_FACEBOOK_CHAR, MAX_INSTA_CHAR } from '@/lib/constant';

export default function Container() {
  const [text, setText] = useState<string>("");
  const numberOfChar = text.length;
  const numberOfCharInstaLeft = MAX_INSTA_CHAR - numberOfChar
  const numberOfCharFacebookLeft = MAX_FACEBOOK_CHAR - numberOfChar
  const numOfWord = text.split(/\s/).filter((word) => word !== '').length

  return (
    <div className=' flex flex-col sm:flex-row justify-center items-center'>
      <div className=' flex border w-auto h-auto relative bottom-6 rounded-md shadow-md'>
        <TextArea text={text} setText={setText} />
        <Analysis numberOfChar={numberOfChar} numberOfCharInstaLeft={numberOfCharInstaLeft}
          numberOfCharFacebookLeft={numberOfCharFacebookLeft} numOfWord={numOfWord}
        />
      </div>
    </div>
  )
}
