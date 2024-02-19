const ShowReplyInput = (id: string) => {
  const comment = Array.from(
    document.querySelectorAll('.comments .comment')
  ).find((c) => c.getAttribute('data-comment') === id);

  const replyInputSection =
    comment?.firstElementChild?.lastElementChild?.lastElementChild;

  replyInputSection?.classList.remove('hidden');

  const replyInput = replyInputSection?.lastElementChild
    ?.firstElementChild as HTMLTextAreaElement;
  replyInput.focus();
};

export default ShowReplyInput;
