import React from 'react';
import './Experience.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
        <div className="achievement"> 
        <div className="circle"style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span style={{color: darkMode? 'white':''}}>completed</span>
        <span>Projects</span>
        </div>
        <div className="achievement"> 
        <div className="circle"style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span style={{color: darkMode? 'white':''}}>github</span>
        <span>Repositories</span>
        </div>
        <div className="achievement"> 
        <div className="circle"style={{color: darkMode?'var(--orange)':''}}>4+</div>
        <span style={{color: darkMode? 'white':''}}>working</span>
        <span>Projects</span>
        </div>
    </div>
  )
}

export default Experience