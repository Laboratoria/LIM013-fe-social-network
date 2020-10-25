const varFirestore = () => ({
  collection: namecollection => ({
    add: objData => new Promise((resolve) => {
      resolve('promesa exitosa');
    }),
  }),
});

const firebase = {
  firestore: varFirestore,
};

export default jest.fn(() => firebase);
