import React, { useState } from 'react'

export default function About() {
   const [mystyle,setmystyle]=useState(
   {
        color:'white',backgroundColor:'black',
    })
    const[btntext,setbtntext]=useState("enable light mode")

 const togglestyle=()=>{
    if(mystyle.color=='white'){
        setmystyle({
            color:'black',
            backgroundColor:'white',
            border:'3px solid white',
            
        })
        setbtntext("enable dark mode")
    }
    else{
        setmystyle({
            color:'white',
            backgroundColor:'black',
        })
        setbtntext("enable light mode")
    }
  }
    return (
        <div>
            <div clasNameName="container " style={mystyle}>
                <h1 clasNameName='my-3'>About Us</h1>
                <div clasName="accordion " id="accordionExample"  >
                    <div clasName="accordion-item" >
                        <h2 clasName="accordion-header" id="headingOne">
                            <button clasName="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" clasName="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div clasName="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate clasNamees that we use to style each element. These clasNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div clasName="accordion-item">
                        <h2 clasName="accordion-header" id="headingTwo">
                            <button clasName="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" clasName="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div clasName="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate clasNamees that we use to style each element. These clasNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div clasName="accordion-item">
                        <h2 clasName="accordion-header" id="headingThree">
                            <button clasName="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" clasName="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div clasName="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate clasNamees that we use to style each element. These clasNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <div clasNameName="conatiner my-3">
            <button onClick={togglestyle} type="button" clasNameName="btn btn-primary">{btntext}</button>
            </div>
            </div>
            
        </div>
    )
}
