import React, { useState } from "react";
import PropTypes from "prop-types";
import unknown from '../Assets/ItsNotMe.webp'
export default function Profile({fullName,bio,profession,image})  {
    function handleName(){
        alert("this is the full name :" + fullName)
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
                backgroundColor:"#20639B",
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
                color:"red",
                fontSize:"25px",
                fontWeight:"bolder"

            }
            const [show , setShow] =useState(false)
            const find ={
                color: "#20639B",
                display:"flex",
                justifyContent: "center",
            }
            const reveal={
                marginLeft: "700px",
                borderRadius: "40%",
                backgroundColor: "brown",
                borderColor: "white",
                height:"40px" ,
                color:"white",
                padding: "10px",
                }
                const alertt={
                    borderRadius: "40%",
                    backgroundColor: "#20639B",
                    borderColor: "white",
                    height:"40px" ,
                    color:"white",
                    padding: "10px",
                    }

return(
    <>
    <section>
        <h1 style={find}> Find {fullName} </h1>
        {show ?
    <div style={container}>
    
        
        
        <div style={c1}>
            <div style={c2}>
                <span style={{color:"white",fontSize:40}} >{fullName}</span>
            </div>
        </div>
        <div>
            <div style={c3}>
                
                <div style={c4}>
                    <img src={image} width={240} height={180} style={{borderRadius:"50%", marginTop:"-100px",border:"4px white solid"}}/>
                    <span style={bioStyle} >The bio: {bio}</span>
                    <span style={professionStyle}>Profession: {profession}</span>
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

    Profile.defaultProps = {
        image:`${unknown}`,
        fullName: "Jason Diams",
        bio: "you don't need a bio when you're a legend but hey i'll tell you what i do, basically i steal data from companies like apple, microsoft, amazon, and i'm not going to stop now or ever d 'somewhere else .",
        profession: "Hackeur pro XD"
    };

    Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};
