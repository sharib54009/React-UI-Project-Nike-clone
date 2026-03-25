import React from 'react'
import {Search, Heart, Handbag} from "lucide-react"

const Header2 = () => {
  return (
<div className="sticky top-0 z-[9999] bg-white">
  <div className="md:h-[72px] h-[32px] flex items-center justify-between">
  
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAclBMVEX///8AAAC8vLz09PR6enrn5+fS0tL4+PhZWVnx8fH7+/sICAiioqLj4+PCwsIjIyPb29tkZGRMTEzKyspsbGyHh4ccHByPj48zMzMRERE+Pj60tLRDQ0PNzc10dHSYmJhVVVUrKyuqqqo1NTWfn58ZGRm0UDjBAAADRElEQVR4nO3aa4OxQBTA8WfoSqRILiuyfP+v+CRWpKtLTP6/92vmnDozZ6b99w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7mOO9HdP4TP1Bltn76rvnsYHUjueK8Rk3Hv3RAqM3jGoqVmbvRB9f/CO0Stbak2PqI+syUxE3K3Z9Nj1jI1G32o9qqUfETOGTQ58D3XaaW4wc+W7+2NmbOUt1VxLdxN2GxpJsyahOFlsZdigFOE3MEpUS8pMnBnDhh7IY7ZCvHw5VseeO08yE9XTJ2/diVFfLF7anR5qyRYXfn0Z6umguxAieNmv99SlE4orxlKKeop50XyXr/lpM25+r/SV8WvGeonhYcov2FCjWjJE2mz92a1wihkvBk9eAnoDK11LcSu8lOzgHcR7xzMXgaT5vTaRqZ5inXjeP896orrmZyZG2HLVU8ycPi850UHSsTMzIxbLDz9aZgpO6+TDZRU1vzmJibbu1TOm2rjVafr9hx6sPlYWeYkRU0WWfi/tHNPdpwdds5x+bmaio6U8/V7K9hzEfU2gulTm+YmJ6km6/SnRSyJzav+x2SmopZgEVzUFrItIagWia7vb5veavZOs30vpXq4V1U+eg61RsMicXsSPv/oss76Kp9LycH1blVtPjd/VP991RGHZjqtr69/yxIipJWO/l7ZNRRUW9feD9aZCYqJWW/p6Orp9DXICUztBpcTIvj9dGGUE59wEp6+8sGJm7F0b6ulIyYzQ6CRLT1erWEsH7lCO+/JqpnlhLhzfsnZe8FO6YScm8t1HFBlXj7xM2KJ6OlqXB12Nu2xTPR2Vtf8VBS3o927VWFBy7deyXtUUMx9PzUa2TwmVZXU5tUj1aa6mVXn4BeyW1tPJI8kxWltPJ9rdqVHk/JRQh3pfZkIJP83V17tnK3c70n5KqMepm5l5oLWvFc4xrJea76ins7BGaoxvqac/lY/l8zbcl9flVasn66vq6Sz7LvC76ynhF2dm5rXlvvwuw4IvdM73vjQnppf5XxJ9w/rql+bPwEu/PbbxpWtwFnPoG7/T6DjRn4du4I/bdlv+sK46GGmjAXkBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUMV/t/4hRILgrN8AAAAASUVORK5CYII= " className="h-10 md:h-14 ml-2 md:ml-6" />

  <div className="flex justify-center  w-fit pl-3 md:pl-20 ">
    <div className="md:flex items-center  md:gap-8 hidden md:block md:font-medium  md:text-xl">
      <p className="hover:border-b-2 hover:border-black">New & featured</p>
      <p className="hover:border-b-2 hover:border-black">Men</p>
      <p className="hover:border-b-2 hover:border-black">Women</p>
      <p className="hover:border-b-2 hover:border-black">Kids</p>
      <p className="hover:border-b-2 hover:border-black">Jordan</p>
    </div>
  </div>

 <div className="flex items-center ml-2 mr-2 md:mr-6 relative gap-5 md:gap-4">
  <Search className="md:absolute    md:w-10 h-5 w-5  md:h-10 p-0 md:p-1  text-black rounded-full bg-gray-100 " />

  <input
    type="text"
    placeholder="Search"
    className="rounded-full hidden md:block bg-gray-100 w-20 md:w-50 md:h-10 h-3 md:h-8 pl-6 md:pl-15 pr-1 md:pr-4 hover:bg-gray-200 "
  />
  <Heart className=' md:w-8 h-5 w-5  md:h-8' />
  <Handbag className=' md:w-8 h-5 w-5  md:h-8' />
</div>


</div>
    </div>
  )
}

export default Header2












