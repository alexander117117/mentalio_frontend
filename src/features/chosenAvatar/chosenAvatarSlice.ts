import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ChosenAvatarState {
  selectedAvatar: string
}

const initialState: ChosenAvatarState = {
  selectedAvatar: '',
}

const chosenAvatarSlice = createSlice({
  name: 'chosenAvatar',
  initialState,
  reducers: {
    setSelectedAvatar(state, action: PayloadAction<string>) {
      state.selectedAvatar = action.payload
    },
  },
})

export const { setSelectedAvatar } = chosenAvatarSlice.actions
export const chosenAvatarReducer = chosenAvatarSlice.reducer
