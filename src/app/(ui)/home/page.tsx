import { HomeFeed } from '@/components/home/home-Feed'
import { HomeHeader } from '@/components/home/home-header'
import { TweetPost } from '@/components/tweet/tweetPost'
import React from 'react'

export default function Page() {
  return (
    <div>
        <HomeHeader/>
        <TweetPost />
        <HomeFeed />
    </div>
  )
}
