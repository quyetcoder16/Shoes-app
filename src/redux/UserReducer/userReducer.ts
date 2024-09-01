import { ACCESS_TOKEN, http, settings, USER_LOGIN } from '../../utils/config';
import { UserState, UserLoginModel, UserLoginResult, UserProfile, FacebookDataLogin } from './../../Models/userModel';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'



const initialState: UserState = {
    userLogin: settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) : null,
    userProfile: null
}

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginAsyncAPI.fulfilled, (state: UserState, action: PayloadAction<UserLoginResult>) => {
            state.userLogin = action.payload;
            settings.setStorageJson(USER_LOGIN, action.payload);
            settings.setCookieJson(USER_LOGIN, action.payload, 30);
            settings.setStorage(ACCESS_TOKEN, action.payload.accessToken);
            settings.setCookie(ACCESS_TOKEN, action.payload.accessToken, 30);
            window.location.replace('/profile')
        })
            .addCase(getProfileAsyncApi.fulfilled, (state: UserState, action: PayloadAction<UserProfile>) => {
                state.userProfile = action.payload
            })
            .addCase(loginFacebookApi.fulfilled, (state: UserState, action: PayloadAction<UserLoginResult>) => {
                state.userLogin = action.payload
                settings.setStorageJson(USER_LOGIN, action.payload);
                settings.setCookieJson(USER_LOGIN, action.payload, 30);
                settings.setStorage(ACCESS_TOKEN, action.payload.accessToken);
                settings.setCookie(ACCESS_TOKEN, action.payload.accessToken, 30);
                window.location.replace('/profile');
            })
    },
});

export const { } = userReducer.actions

export default userReducer.reducer

// extra Reducer

export const loginAsyncAPI = createAsyncThunk("userReducer/loginAsyncAPI", async (userLogin: UserLoginModel): Promise<UserLoginResult> => {
    const response = await http.post(`/Users/signin`, userLogin);
    return response?.data?.content;
})

export const getProfileAsyncApi = createAsyncThunk(
    'userReducer/getProfileAsyncApi',
    async (): Promise<UserProfile> => {
        const response = await http.post('/users/getProfile');
        return response.data.content;
    }
);

export const loginFacebookApi = createAsyncThunk(
    'userReducer/loginFacebookApi',
    async (facebookToken: string): Promise<UserLoginResult> => {
        let data: FacebookDataLogin = {
            facebookToken: facebookToken
        }
        const response = await http.post('/Users/facebooklogin', data);
        return response.data.content;
    }
);