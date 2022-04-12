
const loadImages = async (onError) => fetch(
  'https://25.javascript.pages.academy/kekstagram/data',
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => data)
  .catch((err) => {
    onError(err);
  });

export { loadImages };

