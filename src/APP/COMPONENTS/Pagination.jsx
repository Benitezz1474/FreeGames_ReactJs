import { useLayoutEffect } from "react"
import { useScrollTo } from "react-use-window-scroll"

export const Pagination=({changeLimit, changeOffset,limit,offset})=>{

    

    return <div className="container d-flex align-items-center justify-content-around py-4 my-5 bg-light">
         <button  className="btn btn-primary" onClick={()=>{
             if(offset <= 0 ) return
             changeLimit(limit - 20)
             changeOffset(offset - 20)
                scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}>Back</button>
            
            <button className="btn btn-primary" onClick={()=>{
             if(limit >= 88) return
                changeLimit(limit + 20)
                changeOffset(offset + 20)
                scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}>Next</button>
    </div>
}