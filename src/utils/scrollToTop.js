import { OVERFLOW_CONTAINER_CLASS } from '@theme/Layout';

const scrollToTop = () =>
  document.querySelector(`.${OVERFLOW_CONTAINER_CLASS}`).scrollTo(0, 0);

export default scrollToTop;
