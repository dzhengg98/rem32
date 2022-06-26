import * as ImageAPIUtil from '../util/image_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const RECEIVE_IMAGE_ERRORS = 'RECEIVE_IMAGE_ERRORS';
export const CLEAR_IMAGE_ERRORS = 'CLEAR_IMAGE_ERRORS';

export const receiveImages = (images) => {
  return {
    type: RECEIVE_IMAGES,
    images
  }
};

export const receiveImage = (image) => {
  return {
    type: RECEIVE_IMAGE,
    image
  }
};

export const removeImage = (imageId) => {
  return {
    type: REMOVE_IMAGE,
    imageId
  }
};

export const receiveImageErrors = (errors) => {
  //debugger
  return {
    type: RECEIVE_IMAGE_ERRORS,
    errors
  }
};

export const clearImageErrors = () => {
  return {
    type: CLEAR_IMAGE_ERRORS
  }
}

export const fetchImages = () => {
  //debugger
  return (dispatch) => {
    //debugger
    return ImageAPIUtil.fetchImages().then(images =>
      dispatch(receiveImages(images))
    )
  }
};

export const fetchImage = (imageId) => {
  //debugger
  return (dispatch) => {
    //debugger
    return ImageAPIUtil.fetchImage(imageId).then(image =>
      dispatch(receiveImage(image))
    )
  }
};


export const createImage = (image) => {
  //debugger
  return (dispatch) => {
    //debugger
    return ImageAPIUtil.createImage(image).then(image =>
      dispatch(receiveImage(image)), err =>
      dispatch(receiveImageErrors(err.responseJSON))
    )
  }
};

export const editImage = (image) => {
  // debugger
  return (dispatch) => {
    // debugger
    return ImageAPIUtil.editImage(image).then(image =>
      dispatch(receiveImage(image)), err =>
      dispatch(receiveImageErrors(err.responseJSON))
    )
  }
};

export const deleteImage = (imageId) => {
  return (dispatch) => {
    return ImageAPIUtil.deleteImage(imageId).then(() =>
      dispatch(removeImage(imageId))
    )
  }
};