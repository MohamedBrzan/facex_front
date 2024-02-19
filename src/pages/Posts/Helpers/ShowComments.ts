const ShowComments = (postIndex: number) => {
  const post = Array.from(document.querySelectorAll('.posts .post'))[postIndex];
  post.lastElementChild?.lastElementChild?.classList.toggle('active');

  (
    post.lastElementChild?.lastElementChild?.lastElementChild?.firstElementChild
      ?.lastElementChild?.firstElementChild
      ?.firstElementChild as HTMLInputElement
  ).focus();
};

export default ShowComments;
