import React from 'react'
import groovz from '../assets/groovz.png'

export const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={groovz} alt="logo" className="w-29 h-16 "/>
        <button type="button" 
        onClick={ ()=> window.open("https://github.com/akshitak27/article_summarizer")
          }
        className="black_btn">Github</button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'> Discover Groovz, an open-source tool for summarizing articles, simplifying your reading by transforming lengthy content into clear and concise summaries.</h2>
    </header>
  )
}
export default Hero;
