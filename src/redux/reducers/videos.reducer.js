import {
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  RELATED_VIDEO_FAIL,
  SEARCHED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
  SUBSCRIPTIONS_CHANNEL_REQUEST,
  SUBSCRIPTIONS_CHANNEL_FAIL,
  SUBSCRIPTIONS_CHANNEL_SUCCESS,
  CHANNEL_VIDEOS_FAIL,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  PLAYLIST_SUCCESS,
  PLAYLIST_REQUEST,
  PLAYLIST_FAIL,
  PLAYLIST_VIDEOS_REQUEST,
  PLAYLIST_VIDEOS_SUCCESS,
  PLAYLIST_VIDEOS_FAIL,
} from "../actionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};

// const SELECTED_VIDEO_REQUEST = "SELECTED_VIDEO_REQUEST"
// const SELECTED_VIDEO_SUCCESS = "SELECTED_VIDEO_SUCCESS"
// const SELECTED_VIDEO_FAIL = "SELECTED_VIDEO_FAIL"

export const homeVideosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = {
    loading: true,
    video: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case "SELECTED_VIDEO_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "SELECTED_VIDEO_SUCCESS":
      return {
        ...state,
        video: payload,
        loading: false,
      };
    case "SELECTED_VIDEO_FAIL":
      return {
        ...state,
        video: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const relatedVideoReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case RELATED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case RELATED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const searchedVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SEARCHED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCHED_VIDEO_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case SEARCHED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const subscriptionsChannelReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SUBSCRIPTIONS_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUBSCRIPTIONS_CHANNEL_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case SUBSCRIPTIONS_CHANNEL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const channelVideosReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case CHANNEL_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANNEL_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case CHANNEL_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const channelPlaylistReducer = (state = {
  loading : false,
  playlists : []
}, action) => {
  const {type, payload} = action

  switch(type) {

    case PLAYLIST_REQUEST : 
    return {
      ...state,
      loading : true
    }

    case PLAYLIST_SUCCESS : 
    return {
      ...state,
      playlists : payload,
      loading : false
    }

    case PLAYLIST_FAIL : 
    return {
      ...state, 
      loading : false,
      error : payload
    }

    default :
    return state
  }
}

export const channelPlaylistVideosReducer = (state = {
  loading : false,
  playlistVideos : []
}, action) => {
  const {type, payload} = action

  switch(type) {

    case PLAYLIST_VIDEOS_REQUEST : 
    return{
      ...state,
      loading : true
    }

    case PLAYLIST_VIDEOS_SUCCESS : 
    return {
      ...state,
      playlistVideos : payload,
      loading : false
    }

    case PLAYLIST_VIDEOS_FAIL : 
    return {
      ...state,
      loading : false, 
      error : payload
    }

    default :
    return state
  }
}
