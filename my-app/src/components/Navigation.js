// import React, { Component } from 'react'
// export default class Navigation extends Component {
//     render() {
//         return (
//             <div className='navigation'>
                
//                 <nav>
//                     <ul>
//                         <li><a className='active' href='#home'> Home </a></li>
//                         <li><a href='#news'>News</a></li>
//                         <li><a href='#about'>About</a></li>
//                         <li><a href='#contact'>Contact</a></li>
//                     </ul>
//                 </nav>
//             </div>
//         )
//     }
// }
// import React from 'react'
// export default function Navigation() {
//   return (
//     <div className='navigation'>
//     <nav>
//   <ul>
//       <li><a className='active' href='#home'>Home</a></li>
//       <li><a href='#news'>News</a></li>
//       <li><a href='#about'>About</a></li>
//       <li><a href='#contact'>Contact</a></li>
//   </ul>
// </nav>
// </div>
//   )
// }
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className='navigation'>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul>
              <li><a style={{color: theme.color}} className='active' href='#home'>Home</a></li>
              <li><a style={{color: theme.color}}  href='#news'>News</a></li>
              <li><a style={{color: theme.color}}  href='#about'>About</a></li>
              <li><a style={{color: theme.color}}  href='#contact'>Contact</a></li>
</ul>
          <div style={{position: 'absolute', top: '10px', right: '15px'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
      </nav>
    </div>
  )
}

