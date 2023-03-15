 import Container from './Container';
import {NavLink as RouterLink} from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import Crumb from '../Breadcrumbs';
import React from 'react';


const Header = () => {
 


    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''} hover:underline hover:scale-150 transition duration-300 `
    }

    return <Container>
        <nav className="flex gap-4">
      
            <RouterLink className={getClassName} to="/">Home</RouterLink>
            <RouterLink className={getClassName} to="/about">About</RouterLink>
            <RouterLink className={getClassName} to="/books">Books</RouterLink>
        </nav>
<div class ='m'>
       <a class = 'z'>Directory <img class ='y' src="https://assets.stickpng.com/images/58f8bcf70ed2bdaf7c128307.png"></img> {Crumb()} </a>
       </div>
     </Container>
}

export default Header; 

