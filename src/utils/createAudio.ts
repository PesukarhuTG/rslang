import createUrl from './createUrl';

const createAudio = (url: string) => {
  return new Audio(createUrl(url));
};

export default createAudio;
