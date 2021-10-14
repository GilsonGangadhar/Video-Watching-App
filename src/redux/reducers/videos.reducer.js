import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST } from "../actionType"

const initialState = {
    videos : [],
    loading : false,
    nextPageToken : null,
    activeCategory : 'All'
}

export const homeVideosReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {

        case HOME_VIDEOS_SUCCESS : 
                    return {
                        ...state, 
                        videos : state.activeCategory === payload.category?[...state.videos,...payload.videos] : payload.videos,
                        loading : false,
                        nextPageToken : payload.nextPageToken,
                        activeCategory : payload.category,
                    }

        case HOME_VIDEOS_FAIL   :  
                    return {
                        ...state, 
                        loading : false,
                        error : payload
                    }

        case HOME_VIDEOS_REQUEST : 
                    return {
                        ...state, 
                        loading : true
                    }
        
            default : 
                    return state
    }
}