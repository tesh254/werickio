import {
    GET_ONE_ARTICLE_REQUEST,
    GET_ONE_ARTICLE_SUCCESS,
    GET_ONE_ARTICLE_ERROR
} from "../actions/types";

const initialState = {};

const fetchSingleArticle = (state = initialState, action) => {
    switch(action.type) {
        case GET_ONE_ARTICLE_SUCCESS:
            return {
                ...state,
                article: action.payload.blogs,
                isLoading: false
            }
        case GET_ONE_ARTICLE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_ONE_ARTICLE_ERROR:
            return {
                ...state,
                error: action.payload.message,
                isLoading: false
            }
        default:
            return state;
    }
}

export default fetchSingleArticle;