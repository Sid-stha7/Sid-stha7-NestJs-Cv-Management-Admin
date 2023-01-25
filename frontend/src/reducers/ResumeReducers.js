import {
  ADMIN_RESUME_REQUEST,
  ADMIN_RESUME_SUCCESS,
  ADMIN_RESUME_FAIL,
  CLEAR_ERRORS,
  NEW_RESUME_REQUEST,
  NEW_RESUME_SUCCESS,
  NEW_RESUME_RESET,
  NEW_RESUME_FAIL,
  DELETE_RESUME_REQUEST,
  DELETE_RESUME_SUCCESS,
  DELETE_RESUME_FAIL,
  DELETE_RESUME_RESET,
  UPDATE_RESUME_REQUEST,
  UPDATE_RESUME_SUCCESS,
  UPDATE_RESUME_FAIL,
  UPDATE_RESUME_RESET,
} from '../constants/resumeConstans';

export const resumesReducer = (state = { resumes: [] }, action) => {
  switch (action.type) {
    case ADMIN_RESUME_REQUEST:
      return {
        loading: true,
        resumes: [],
      };

    case ADMIN_RESUME_SUCCESS:
      return {
        loading: false,
        resumes: action.payload,
      };

      return {
        loading: false,
        resumes: action.payload.resume,
      };

    case ADMIN_RESUME_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const newresumeReducer = (state = { resume: {} }, action) => {
  switch (action.type) {
    case NEW_RESUME_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_RESUME_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        resume: action.payload.resume,
      };

    case NEW_RESUME_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case NEW_RESUME_RESET:
      return {
        ...state,
        success: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//for delelte and update

export const resumeReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_RESUME_REQUEST:
    case DELETE_RESUME_REQUEST:
      // case UPDATE_RESUME_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_RESUME_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_RESUME_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_RESUME_FAIL:
    case DELETE_RESUME_FAIL:
      // case UPDATE_RESUME_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_RESUME_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case UPDATE_RESUME_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
