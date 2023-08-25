import { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Scratchpad from '../images/Scratchpad.jpg'
import Feedme from '../images/Feedme.jpg'
import Ezexplore from '../images/Ezexplore.jpg'
import Employeedb from '../images/Employeedb.jpg'

function Projects() {


return (
    <div>
    
        <Header />
        <Nav />
        <h3>Project 1</h3>
        <a href="https://github.com/jbpete/ScratchPad">
            <img src={Scratchpad} alt="Composition Notebook" width="200" height="150"></img>
        </a> 
        <h3>Project 2</h3>
        <a href="https://github.com/jbpete/teamnarnia">
            <img src={Feedme} alt="Travel Agent" width="200" height="150"></img>
        </a> 
        <h3>Project 3</h3>
        <a href="https://github.com/Heathlington/ez-explore">
            <img src={Ezexplore} alt="Travel Agent" width="200" height="150"></img>
        </a>
        <h3>Project 4</h3>
        <a href="https://github.com/jbpete/12-EmployeeTracker">
            <img src={Employeedb} alt="Travel Agent" width="200" height="150"></img>
        </a>
        <Footer />
    </div>
);
}



export default Projects;