// authActions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import APIS_ROOT from '../../../constants/APIS_ROOT';

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ username, password }: { username: string; password: string }) => {
    const { data } = await axios({
      url: `${APIS_ROOT}user/login`,
      method: 'POST',
      data: { username, password },
      withCredentials: true,
    });

    return data;
  }
);
