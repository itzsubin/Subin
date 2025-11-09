import { useState, useRef } from "react";

const AngryBird = () =>{
     // Birds Position
     const[birdPosition, setBirdPosition] = useState({x: 200, y: 400});
     const[birdVelocity, setBirdVelocity] = useState({x:0, y:0});

     // Drag Handles
     const[isDragging, setIsDragging] = useState(false);
     const[dragstart, setDragstart] = useState({x: 0, y:0});
     
     //game elemets
     const [trajectoryPoints, setTrajectoryPoints] = useState([]);
     const [objects, setObjects] = useState([]);
     const [target, setTarget] = useState([]);

     // animation ref
     const animationRef = useRef();

return (
    <div className = "relative overflow-hidden">

    </div>

)
}
export default AngryBird;