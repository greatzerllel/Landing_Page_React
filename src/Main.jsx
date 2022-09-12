import React from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

export function Main ({ navbar, header, cards, footer }) { // Destructurin Javascript
    return(
        <>
        <Navbar navbar = {navbar} />
        <Body body = {body} />
        <Footer footer = {footer} />
        </>
    )
    
}