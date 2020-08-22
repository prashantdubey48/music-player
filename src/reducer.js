export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    /// remove default token later
    token:''
    //'BQCtH9m4aMxLj5RUGw8b5iG_HPahaews5xUS5F6mPRSfnwBdrOBYzd31nK4DxNvl-25Eq91IjqPP6Ml9unHga7vtaqyHe3W1e3vpEJChS_hKsGFSpNatWeRywiFHP3KCZZ3zNXFB5MjY3OUzJDU7afTaMEIQWmnbw_5XWWCw4hPv1Ivd'
  };
  
  const reducer = (state, action) => {
    console.log("action",action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  