
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
  }

  ]
    
    return(
        <>
           <p className="text-white font-bold text-center font-bold underline">Our Collaborators</p>
          <div className="flex flex-wrap m-2 justify-between border border-white rounded-md mx-5 px-5" >
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