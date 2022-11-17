import { createPhotos } from './data.js';
import { drowThumbnails } from './thumbnail.js';

const data = createPhotos();
drowThumbnails(data);
