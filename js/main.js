import { drowThumbnails } from './thumbnails.js';
import { connectUploadModule } from './user-Form.js';
import { getDataFromServer } from './load-data.js';


getDataFromServer((photos) => {
  drowThumbnails(photos);
  connectUploadModule();});

