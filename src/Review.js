import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
const [index, setIndex] = useState(0)

const {image, name, job, text} = people[index]

//random number
const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * people.length); //use let we will reassign 
  if(randomNumber === index){
    randomNumber = index - 1;
  }
  setIndex(checkNumber(randomNumber))
}



//check number 
const checkNumber = (number) =>{
  if(number > people.length - 1){ //it is an array 
    return 0
  }
  if(number < 0){
    return people.length - 1
  }
  return number;
}

//next person
const nextPerson =() =>{
  setIndex((index) =>{
const newIndex = index + 1;
    return checkNumber(newIndex);
  })
}

//prev Person 
const prevPerson =() =>{
  setIndex((index) =>{
const newIndex = index - 1;
    return checkNumber(newIndex);
  })
}


  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'><FaQuoteRight/></span>
      </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className="button-container">
      <button onClick={prevPerson}  className='prev-btn'><FaChevronLeft /></button>
      <button onClick={nextPerson} className='next-btn'><FaChevronRight /></button>
    </div>
    <button onClick={randomPerson} className='random-btn'>Surprise Me</button>
    </article>
    )
};

export default Review;
