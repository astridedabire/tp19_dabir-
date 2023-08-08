//cercle section 1
const cerclea=document.querySelector(".cerclea")
    const cercleb=document.querySelector(".cercleb")
    const cerclec=document.querySelector(".cerclec")
// cercle section 2
    const cerclea2=document.querySelector(".cerclea2")
    const cercleb2=document.querySelector(".cercleb2")
    const cerclec2=document.querySelector(".cerclec2")
// cercle section 3
    const cerclea3=document.querySelector(".cerclea3")
    const cercleb3=document.querySelector(".cercleb3")
    const cerclec3=document.querySelector(".cerclec3")

    const section1=document.querySelector(".section1")
    const section2=document.querySelector(".section2")
    const section3=document.querySelector(".section3")
//bouton
    const a=document.querySelector(".a")
    const b=document.querySelector(".b")
    const c=document.querySelector(".c")
//bouton forward section1 
    a.addEventListener("click", () => {
        section1.style.display="none"
        section2.style.display="block"
    section3.style.display="none"
        })
        //backward section 2
        b.addEventListener("click", () => {
            section1.style.display="block"
            section2.style.display="none"
        section3.style.display="none"
            })
            //forward section2
            c.addEventListener("click", () => {
                section1.style.display="none"
                section2.style.display="none"
            section3.style.display="block"
                })

cercleb.addEventListener("click", () => {
    section1.style.display="none"
    section2.style.display="block"
section3.style.display="none"
   

    })
    cerclec.addEventListener("click", () => {
        section1.style.display="none"
        section2.style.display="none"
    section3.style.display="block"
       
    
        })
        //formulaire2
        cerclea2.addEventListener("click", () => {
            section1.style.display="block"
            section2.style.display="none"
        section3.style.display="none"
           
         })
         cerclec2.addEventListener("click", () => {
            section1.style.display="none"
            section2.style.display="none"
        section3.style.display="block"
           
         })
         //formulaire3
           
         cerclea3.addEventListener("click", () => {
            section1.style.display="block"
            section2.style.display="none"
        section3.style.display="none"
           
         })
         cercleb3.addEventListener("click", () => {
            section1.style.display="none"
            section2.style.display="block"
        section3.style.display="none"
           
         })
       
   
