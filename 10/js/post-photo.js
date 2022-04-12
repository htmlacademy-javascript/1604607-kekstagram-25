const postPhoto = (data, onSuccess, onError) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      type: 'multipart/form-data',
      credentials: 'same-origin',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch((err) => {
      onError(err);
    });
};

export { postPhoto };
