import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className='footer'>
    <SocialLinks styleClass='footer-links'></SocialLinks>
<h4>&copy; Digital-JA {new Date().getFullYear()}

</h4>
    </footer>
}

export default Footer
