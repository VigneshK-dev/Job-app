//initialstate 



const initialstate = {
    Sidebar: false,
    Loading: false,
    User: JSON.parse(localStorage.getItem("user")),
    Editjob: false,
    Jobs: { Alljob: [], numofpg: 1, totaljobs: 0 },
    SingleEditjob: [],
    Delete:0,
    token: localStorage.getItem("token"),
    Statsdata: { carddata: { pending: 0, interview: 0, declined: 0 }, graphdata: {} },
    Filter: { status: "all", jobType: "all", sort: "latest", search: "", page: 1 }
}


// action 
export const Togglesidebar = () => ({ type: "sidebar" })

export const Userdata = (data) => ({ type: "user", payload: data })

export const Edit = (state) => ({ type: "editjob", payload: state })

export const Alljob = (data) => ({ type: "alljobs", payload: data })

export const Loadingdata = (state) => ({ type: "loading", payload: state })
//reducer

export const SingleEditJob = (editid) => ({ type: "singleeditjob", payload: editid })

export const GetToken = (data) => ({ type: "gettoken", payload: data })

export const Getstats = (data) => ({ type: "stats", payload: data })

export const HandelChange = (data) => ({ type: "handlechange", payload: data })

export const Clearfilter = (data) => ({ type: "clear", payload: data })

export const HandlePagechange = (data) => ({ type: "handlepage", payload: data })

export const Deletejob = () => ({ type: "delete"})

export const ClearState = () => ({ type: "initialstate" })

export const Reducer = (state = initialstate, action) => {

    switch (action.type) {
        case "sidebar":
            return {
                ...state,
                Sidebar: !state.Sidebar
            }
        case "loading":
            return {
                ...state,
                Loading: action.payload
            }
        case "user":
            // console.log(action.payload)
            return {
                ...state,
                User: action.payload
            }
        case "editjob":
            return {
                ...state,
                Editjob: action.payload
            }
        case "alljobs":
            const { jobs, totalJobs, numOfPages } = action.payload
            return {
                ...state,
                Jobs: { Alljob: jobs, numofpg: numOfPages, totaljobs: totalJobs }
            }
        case "singleeditjob":
            let Edit = state.Jobs.Alljob.filter(ele => (ele._id === action.payload))
            return {
                ...state,
                SingleEditjob: Edit
            }
        case "gettoken":
            return {
                ...state,
                token: action.payload
            }
        case "stats":
            const { defaultStats, monthlyApplications } = action.payload
            return {
                ...state,
                Statsdata: { carddata: { ...defaultStats }, graphdata: [...monthlyApplications] }
            }
        case "handlechange":
            const { name, value } = action.payload
            return {
                ...state,
                Filter: { ...state.Filter, [name]: value, page: 1 }
            }
        case "handlepage":
            const { names, values } = action.payload
            return {
                ...state,
                Filter: { ...state.Filter, [names]: values }
            }
        case "clear":
            return {
                ...state,
                Filter: action.payload
            }
        case "initialstate":
            let resetstate = {
                Sidebar: false,
                Loading: false,
                User: null,
                Editjob: false,
                Jobs: { Alljob: [], numofpg: 1, totaljobs: 0 },
                SingleEditjob: [],
                token: null,
                Statsdata: { carddata: { pending: 0, interview: 0, declined: 0 }, graphdata: {} },
                Filter: { status: "all", jobType: "all", sort: "latest", search: "", page: 1 }
            }
            return {
                ...state,
                Sidebar:resetstate.Sidebar,
                Loading: resetstate.Loading,
                User: resetstate.User,
                Editjob: resetstate.Editjob,
                Jobs: resetstate.Jobs,
                SingleEditjob: resetstate.SingleEditjob,
                token: resetstate.token,
                Statsdata: resetstate.Statsdata,
                Filter:resetstate.Filter
           }
          case "delete":
              return{
                  ...state,
                  Delete:(Math.random()*100)
              } 
        default:
            return {
                ...state
            }
    }

}

