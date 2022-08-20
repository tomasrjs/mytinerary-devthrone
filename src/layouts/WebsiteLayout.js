import React from 'react'
import Footer from '../components/Footer'

export default function WebsiteLayout(props) {
  return (
    <div>
        {/* header */}

        {props.children}

        <Footer />
    </div>
  )
}
