import React from 'react'
import {
  InstagramOutlined,FacebookOutlined,TwitterOutlined 
} from "@ant-design/icons";

import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className='footer_Section'>
        <div className='About'>
          <span>Expense Manager</span>
          <p>"Simplify your financial life with our intuitive expense manager. Stay organized, manage bills, and make smarter money decisions."</p>
        </div>

       
        {/* <div className='icons'>
          <InstagramOutlined/>
        <FacebookOutlined/>
        <TwitterOutlined/>
        </div> */}
       

      </div>
    </div>
  )
}

export default Footer