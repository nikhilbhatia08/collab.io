
function Slides() {

  const data = [{
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
  },
  {
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
  },
  {
    src:"https://upload.wikimedia.org/wikipedia/en/thumb/1/19/IIT_Hyderabad_Insignia.svg/1200px-IIT_Hyderabad_Insignia.svg.png"
  },
  {
    src:"https://www.iitk.ac.in/mse/IWHEM/images/partner/iitk.png"
  },
  {
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png"
  },
  {
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
  },
  {
    src : "https://media.licdn.com/dms/image/C560BAQEEf96n13OC1A/company-logo_200_200/0/1658502157654?e=2147483647&v=beta&t=KeBlSx_yrLRoGYConDMa0XxTm-X_zXcLHSFb_R9FbkA"
  },
  {
    src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nYN2_O5i28QU8ac2vj9S7JdzqnJL3t7S_A&usqp=CAU"
  },
  {
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/800px-Netaji_Subhas_University_of_Technology.svg.png"
  },
  

  ]
    
    return(
        <>
           <p className="text-white font-bold text-center font-bold underline">Our Collaborators</p>
          <div className="flex flex-wrap m-2 justify-between border border-white rounded-md mx-10 px-5 mb-5" >
            {data.map((node)=>{
              return(
                 <img 
                  className="h-24 m-2 my-5"
                  src={node.src}
                  alt=""
                   />
              )
              })}
          </div>
        </>
    )
}

export default Slides