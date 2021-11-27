import avatar1 from './avatars/avatar1.jpeg';
import avatar2 from './avatars/avatar2.jpeg';
import avatar3 from './avatars/avatar3.png';
import avatar4 from './avatars/avatar4.jpeg';
import avatar5 from './avatars/avatar5.jpeg';
import avatar6 from './avatars/avatar6.jpeg';
import avatar7 from './avatars/avatar7.jpeg';
import avatar8 from './avatars/avatar8.jpeg';
import avatar9 from './avatars/avatar9.jpeg';
import avatar10 from './avatars/avatar10.jpeg';
import avatar11 from './avatars/avatar11.jpeg';
import avatar12 from './avatars/avatar12.jpeg';
import avatar13 from './avatars/avatar13.jpeg';
import avatar14 from './avatars/avatar14.jpeg';
import avatar15 from './avatars/avatar15.jpeg';
import avatar16 from './avatars/avatar16.jpeg';
import avatar17 from './avatars/avatar17.jpeg';
import avatar18 from './avatars/avatar18.jpeg';
import avatar19 from './avatars/avatar19.jpeg';
import avatar20 from './avatars/avatar20.jpeg';
import avatar21 from './avatars/avatar21.jpeg';
import avatar22 from './avatars/avatar22.jpeg';
import avatar23 from './avatars/avatar23.jpeg';
import avatar24 from './avatars/avatar24.jpeg';
import avatar25 from './avatars/avatar25.jpeg';

const randomImages = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
  avatar16,
  avatar17,
  avatar18,
  avatar19,
  avatar20,
  avatar21,
  avatar22,
  avatar23,
  avatar24,
  avatar25
];

export const getRandomImage = () => {
  const index = Math.floor(Math.random() * 24);
  return randomImages[index];
};


export const getCleanImage = (member) => {
  let cleanImage = member.user?.image || '';

  const cleanIndex = randomImages.findIndex((image) => image.includes(cleanImage?.slice?.(1, -14)));

  if (cleanIndex === -1) {
    cleanImage = getRandomImage();
  } else {
    cleanImage = randomImages[cleanIndex];
  }

  if (member.user?.name === 'Jen Alexander') {
    cleanImage = randomImages[11];
  }

  if (member.user?.name === 'Kevin Rosen') {
    cleanImage = randomImages[23];
  }

  return cleanImage;
};
