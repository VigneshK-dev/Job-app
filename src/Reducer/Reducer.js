//initialstate 




const initialstate = {
         Sidebar:false,
         Loading:false,
         User:JSON.parse(localStorage.getItem("user")),
         Editjob:false,
         Jobs:[],
         SingleEditjob:[],
         token:localStorage.getItem("token"),
         Statsdata:{carddata:{pending:0,interview:0,declined:0},graphdata:{}}
}


// action 
export const Togglesidebar = () => ({type:"sidebar"})

export const Userdata  = (data)=> ({type:"user",payload:data})

export const Edit  = (state)=> ({type:"editjob",payload:state})

export const Alljob = (data) => ({type:"alljobs",payload:data}) 

export const Loadingdata = (state) => ({type :"loading",payload:state})
//reducer

export const SingleEditJob = (editid) => ({type:"singleeditjob",payload:editid})

export const GetToken = (data)=> ({type:"gettoken",payload:data})

export const Getstats = (data) => ({type:"stats",payload:data})

export const Reducer = (state = initialstate,action)=>{
     
    switch(action.type){
        case "sidebar" :
        return {
            ...state,
             Sidebar:!state.Sidebar
        }
        case "loading":
            return {
                ...state,
                Loading:action.payload
            }
        case "user":
            // console.log(action.payload)
            return {
                 ...state,
                 User:action.payload
            }
         case "editjob":
             return{
                  ...state,
                  Editjob:action.payload
             } 
           case "alljobs" :
               return {
                    ...state,
                   Jobs:action.payload
               }
           case "singleeditjob":
               let Edit = state.Jobs.filter(ele => (ele._id === action.payload)) 
               return {
                   ...state,
                 SingleEditjob:Edit
                     }
               case "gettoken":
                   return{
                       ...state,
                       token:action.payload
                   }      
                case "stats":
                   const {defaultStats,monthlyApplications} = action.payload 
                    return {
                        ...state,
                       Statsdata:{carddata:{...defaultStats},graphdata:[...monthlyApplications]}
                    }   
             default :
       return{
           ...state
       } 
    }

}

