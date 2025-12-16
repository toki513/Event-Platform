'use client'

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" onClick={()=>console.log("Clicked")} className="text-white mt-6 mx-auto" >
        
        <a href="#events">

            Explore Events
            <img src="/icons/arrow-down.svg" alt="" height={24} width={24} />
        </a>
        
        </button>
  )
}

export default ExploreBtn