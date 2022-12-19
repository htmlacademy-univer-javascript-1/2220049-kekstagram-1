import { drowThumbnails } from './thumbnails.js';
import { connectUploadModule } from './user-Form.js';
import { getDataFromServer } from './api.js';
import { initFilters } from './thumbnails_filters.js';


getDataFromServer((photos) => {
  drowThumbnails(photos);
  connectUploadModule();
  initFilters(photos);
});

