import {useState} from "react";
import { useEffect } from "react";
import "./carousel.css"

function Carousel ({images}) {
    const [current, setCurrent] = useState(0);
    
   
    useEffect (()=>{
       
        setTimeout (() => {slideRight();},3000) 
    });

    const slideRight = () => {
        setCurrent (current=== images.length -1 ? 0 : current +1)};
    
    const slideLeft = () => {
        setCurrent (current=== 0 ? images.length  -1  : current - 1)}
     
    
        
    

    

    return (
        <div className="carousel" >
            <div className="carousel-wrapper">
                {images.map ((image,index)=>{
        return (
            <div key={index} className= {index === current ? "carousel-card carousel-card-active" : "carousel-card"}>
                <img className="carousel-img" src={image.image} alt="" /> 
                
                </div>
                
        )
        }) }
       
        </div>
      
           
        </div>
    );

}

export default Carousel;