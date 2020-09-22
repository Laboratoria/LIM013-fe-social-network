export const getAllPosts = callback => firebase.firestore().collection('posts')
  .orderBy('time', 'desc')
  .onSnapshot((querySnapshot) => {
    const allPosts = [];
    querySnapshot.forEach((doc) => {
      allPosts.push({ id: doc.id, ...doc.data() });
    });
    callback(allPosts);
  });
