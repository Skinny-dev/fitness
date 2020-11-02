import React from 'react'
import ReactDom from 'react-dom'
import Card from './components/card'
import 'bootstrap/dist/css/bootstrap.css'

ReactDom.render(<Card
          title = "Vete a la versh"
          description = "El mejor contenido de vete la versh"
          image = "https://firebasestorage.googleapis.com/v0/b/fitness-a1456.appspot.com/o/vete_versh1.jpeg?alt=media&token=d69855f7-baf0-4799-b736-bb6a930b5c26" 
          leftColor = "#A74CF2"
          rightColor = "#617BFB"
          />,
          document.getElementById('root')
)
