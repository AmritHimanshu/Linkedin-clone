import { createSlice } from '@reduxjs/toolkit';

export const profilePhotoSlice = createSlice({
    name: 'profilePhoto',
    initialState: {
        profilePhoto: null,
    },
    reducers: {
        setPic: (state, action) => {
            state.profilePhoto = action.payload;
        },
        removePic: (state) => {
            state.profilePhoto = null;
        },
    },
});

export const { setPic, removePic } = profilePhotoSlice.actions;

export const selectProfilePhoto = (state) => state.profilePhoto.profilePhoto;

export default profilePhotoSlice.reducer;
