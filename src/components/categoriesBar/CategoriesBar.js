import React, { useState } from 'react';
import './_categoriesBar.scss';
import { useDispatch } from 'react-redux';
import { getVideosByCategory } from '../../redux/actions/videos.action';

const keywords = [
  'All',
  'React js',
  'Angular js',
  'Movies',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Aviation',
  'Tourism',
  'Live'
]

const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState('All');

  const dispatch = useDispatch()

  const handleClick = (value) => {
    setActiveElement(value)
    dispatch(getVideosByCategory(value))
  }

  return <div className='categoriesBar'>
    {
      keywords.map((value, i) => (
        <span 
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? 'active' : ''}
        >
          {value}
        </span>
      ))
    }
  </div>
}

export default CategoriesBar
