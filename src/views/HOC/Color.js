import React from "react"

function getRamdomColor(){
    var letters = '0123456789ABCD'
    var color = '#'
    for(var i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const Color = (WrappedComponent) => {
    
    const ramdomColor = getRamdomColor()
    return(props) => (
        <div style={{color : ramdomColor}}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Color