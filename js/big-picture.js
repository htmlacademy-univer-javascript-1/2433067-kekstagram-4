const bigPicture = document.querySelector('.big-picture');
const pictureComments = bigPicture.querySelector('.social__comments');
const commentChild = pictureComments.children[0];
const closeButton = bigPicture.querySelector('#picture-cancel');

const getCommentItem = (comment) => {
  const newComment = commentChild.cloneNode(true);
  const newCommentImg = newComment.querySelector('.social__picture');

  newCommentImg.src = comment.avatar;
  newCommentImg.alt = comment.name;

  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const addPictureEvent = (picture, data) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
    bigPicture.querySelector('.likes-count').textContent = data.likes;
    bigPicture.querySelector('.comments-count').textContent = data.comments.length;
    bigPicture.querySelector('.social__caption').textContent = data.description;

    pictureComments.innerHTML = '';
    data.comments.forEach((comment) => {
      pictureComments.appendChild(getCommentItem(comment));
    });

    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
  });
};

const onEscapeKeyDown = (evt) => {
  if(evt.key === 'Escape'){
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }

  document.removeEventListener('keydown', onEscapeKeyDown);
};

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onEscapeKeyDown);
});

document.addEventListener('keydown', onEscapeKeyDown);

export {addPictureEvent};
