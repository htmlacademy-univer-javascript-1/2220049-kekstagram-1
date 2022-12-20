import { drowThumbnails } from './thumbnails.js';
import { connectUploadModule } from './user-form.js';
import { getDataFromServer } from './api.js';
import { initFilters } from './thumbnails-filters.js';

getDataFromServer((photos) => {
  drowThumbnails(photos);
  connectUploadModule();
  initFilters(photos);
});


