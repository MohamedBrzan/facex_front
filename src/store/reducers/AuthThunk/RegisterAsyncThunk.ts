// authActions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import APIS_ROOT from '../../../constants/APIS_ROOT';

export const registerUser = createAsyncThunk(
  'user/register',
  async (user: {
    avatar: string;
    cover: string;
    name: {
      first: string;
      last: string;
    };
    email: string;
    password: string;
  }) => {
    const { data } = await axios({
      url: `${APIS_ROOT}user/register`,
      method: 'POST',
      data: { ...user },
      withCredentials: true,
    });

    return data;
  }
);
