import React from 'react'
import { TweetItem } from '../tweet/tweet-item'
import { tweet } from '@/data/tweet'

export const ProfileFeed = () => {
  return (
    <div>
        <TweetItem tweet={ tweet }/>
        <TweetItem tweet={ tweet }/>
        <TweetItem tweet={ tweet }/>
        <TweetItem tweet={ tweet }/>
        <TweetItem tweet={ tweet }/>
    </div>
  )
}
