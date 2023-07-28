import React from 'react'
import Modal from '../components/modal/Modal'
import { primaryColors, backgroundColors } from "./Colors"
import { useThemeContext } from '../context/ThemeContext'
import './Theme.css'


const PrimaryColor = ({className}) => {
    const {themeHandler} = useThemeContext();
    return (
      <button className={className} onClick={() => themeHandler(className)}></button>
    )
}

const BackgroundColor = ({className}) => {
    const {themeHandler} = useThemeContext()
  
    return (
      <button className={className} onClick={() => themeHandler(className)}></button>
    )
}


export default function Theme() {

    return (
        <Modal className="theme__modal">
            <h3>Customize Your Theme</h3>
            <small>Change the primary and background color to your preference.</small>
            <div className="theme__primary-wrapper">
                <h5>Primary Color</h5>
                <div className="theme__primary-colors">
                    {
                        primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className}/>)
                    }
                </div>
            </div>
            <div className="theme__background-wrapper">
                <h5>Background Color</h5>
                <div className="theme__background-colors">
                    {
                        backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                    }
                </div>
            </div>
        </Modal>
      )
}
