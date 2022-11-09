import React, { useState } from "react";
import PropTypes from "prop-types";
import who from '../Assets/who.jpg'
export default function Profile2(props)  {
    function handleName(){
        alert("this is the full name :" + props.fullName)
    }
        const container ={
            backgroundColor: "rgb(230, 227, 227)",
            borderRadius: "10%",
            display: "flex",
            justifyContent: "center",
            gap: "1000px",
            flexWrap: "wrap",
            height: "580px",
        }
        const c1 = {
            margin:"25px",

        }
        const c2 = {
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                backgroundColor:"#00B894",
                width:"420px",
                padding: "5px",
                height:"480px",
            }
            const c3 = {
                marginTop: "-1480px",
                backgroundColor:"White",
            }
            const c4 = {
                marginTop:"180px",
                display: "flex",
                justifyContent:"center",
                padding: "5px",
                gap: "10px",
                flexWrap: "wrap",
                width:"420px",
                height:"275px"
            }
            const bioStyle={
                textAlign:"center"
            }
            const professionStyle={
                color:"#7ED6DF",
                fontSize:"25px",
                fontWeight:"bolder"

            }
            const [show , setShow] =useState(false)
            const find ={
                color: "#00B894",
                display:"flex",
                justifyContent: "center",
            }
            const reveal={
                marginLeft: "700px",
                borderRadius: "40%",
                backgroundColor: "#23A6B3",
                borderColor: "white",
                height:"40px" ,
                color:"white",
                padding: "10px",
                }
                const alertt={
                    borderRadius: "40%",
                    backgroundColor: "#00B894",
                    borderColor: "white",
                    height:"40px" ,
                    color:"white",
                    padding: "10px",
                    }

return(
    <>
    <section>
        <h1 style={find}> Find {props.fullName} </h1>
        {show ?
    <div style={container}>
    
        
        
        <div style={c1}>
            <div style={c2}>
                <span style={{color:"white",fontSize:40}} >{props.fullName}</span>
            </div>
        </div>
        <div>
            <div style={c3}>
                
                <div style={c4}>
                    <img src={props.children} width={240} height={180} style={{borderRadius:"50%", marginTop:"-100px",border:"4px white solid"}}/>
                    <span style={bioStyle} >The bio: {props.bio}</span>
                    <span style={professionStyle}>Profession: {props.profession}</span>
                    <button style={alertt} onClick={()=> handleName()}>click her to alert</button>
                </div>
                    
            </div>
        </div>
    </div>
    :
        <></>
        }
        <button style={reveal} id='show' onClick={() => setShow(!show) }>Reveal the secret</button>
        </section> 
        </>
    )
}

    Profile2.defaultProps = {
        image:`${who}`,
        fullName: "ME ME",
        bio: "just Nothing.",
        profession: "Nothing"
    };

    Profile2.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};




















// export default function Profile(props) {

//     function handleName(){
//         alert(props.fullName)
//     }

//     return (
//         <>
//             <div className="px-4 py-5">
//                 <div className="card mb-3 m-auto border-dark" style={{maxWidth:540}}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img src={props.children} width={179.33} height={250} alt="img.webp" />
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title" style={{color: "red"}} onMouseOver={handleName}>{props.fullName}</h5>
//                                 <p className="card-text">
//                                     {props.bio}
//                                 </p>
//                                 <p className="card-text">
//                                     {props.profession}
//                                 </p>
//                                 <p className="card-text"><small className="text-muted">Profile created 2 years ago</small></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// //Set default props
