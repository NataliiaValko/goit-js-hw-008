import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');

const VIMEO_KEY_LS = 'vimeo-watching-time';

const setWatchingTime = ({ seconds }) => {
  localStorage.setItem(VIMEO_KEY_LS, seconds);
};

const player = new Player(iframeRef);
player.on('timeupdate', throttle(setWatchingTime, 1000));
player.setCurrentTime(localStorage.getItem(VIMEO_KEY_LS));
