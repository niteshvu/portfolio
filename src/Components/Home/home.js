import React from 'react'
import './home.css'
import pp from '../../assets/pp.jpeg'
class Home extends React.Component{
    render(){
        return(
            <div className = "homeContainer">
                <div className = "grayCircle">
                </div>
                <div className = "photoContainer">
                    <img className = "photo" src = {pp}/>
                    <div className = "photoBackDrop centerAlign">
                        <p>
                        <p className = "description">Versatile Frontend Developer with strong foundation of Javascript, HTML and CSS and more than 2 years of experience in developing and managing complex and responsive websites</p>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;