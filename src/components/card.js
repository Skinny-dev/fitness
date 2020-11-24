import React from 'react'
import CircleImage from '../images/circles.png'
import './style/card.css'

class Card extends React.Component{
    /*
    constructor(props){
        super(props)
        this.state = {
            image: 'https://firebasestorage.googleapis.com/v0/b/fitness-a1456.appspot.com/o/homero.jpeg?alt=media&token=6d1357f0-d2de-45e2-812e-631f3cb1c6cb'
        }
    }
    
    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                image: 'https://firebasestorage.googleapis.com/v0/b/fitness-a1456.appspot.com/o/vete_versh1.jpeg?alt=media&token=d69855f7-baf0-4799-b736-bb6a930b5c26'
            })
        }, 5000)
    }*/
    render(){
        const { title, description, leftColor, img,  rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage:`url(${ CircleImage }), linear-gradient(to right, ${ leftColor }, ${ rightColor })`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={ img } width="100" height="100" alt="vete la versh" className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{ title }</h1>
                            <p> { description }</p>
                        </div>
                    </div>
                </div>        
            </div>
        );
    }
}
export default Card
