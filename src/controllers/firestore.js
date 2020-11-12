import { fstore } from './initialFirebase.js';

const getPosts = callback => fstore.collection('posts')
  .get()
  .then((snapshot) => {
    // eslint-disable-next-line no-console
    console.log(snapshot);
    // postsPublic(snapshot);
    const data = [];
    snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // eslint-disable-next-line no-console
      console.log(doc.id, ' => ', doc.data());
      data.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        image: doc.data().image,
      });
    });
    callback(data);
  });
export { getPosts };
