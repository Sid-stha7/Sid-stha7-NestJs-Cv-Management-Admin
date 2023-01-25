import axios from 'axios';
import {
  ADMIN_RESUME_FAIL,
  ADMIN_RESUME_REQUEST,
  ADMIN_RESUME_SUCCESS,
  NEW_RESUME_REQUEST,
  NEW_RESUME_SUCCESS,
  NEW_RESUME_RESET,
  NEW_RESUME_FAIL,
  CLEAR_ERRORS,
  DELETE_RESUME_REQUEST,
  DELETE_RESUME_SUCCESS,
  DELETE_RESUME_FAIL,
  UPDATE_RESUME_SUCCESS,
  UPDATE_RESUME_REQUEST,
  UPDATE_RESUME_FAIL,
} from '../constants/resumeConstans';

//create
export const newResume = (resumeData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_RESUME_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/resume/new`,
      resumeData,
      config,
    );

    dispatch({
      type: NEW_RESUME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_RESUME_FAIL,
      payload: error.response.data.message,
    });
  }
};

//get details resume admin
export const getAdminRESUME = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_RESUME_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/resumes`);

    dispatch({
      type: ADMIN_RESUME_SUCCESS,
      payload: data.resumes,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_RESUME_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete resume (Admin)
export const deleteResume = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_RESUME_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/resume/${id}`);

    dispatch({
      type: DELETE_RESUME_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_RESUME_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update resume (ADMIN)
export const updateresume = (id, resumeData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_RESUME_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `/api/v1/admin/resume/${id}`,
      resumeData,
      config,
    );

    dispatch({
      type: UPDATE_RESUME_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_RESUME_FAIL,
      payload: error.response.data.message,
    });
  }
};
//clear error
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
