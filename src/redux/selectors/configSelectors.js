import { createSelector } from '@reduxjs/toolkit'

export const getPictures = createSelector(
  state => state.pictures.data,
  pictures => pictures
);
