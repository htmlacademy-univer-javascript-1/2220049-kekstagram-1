import { drowThumbnails } from './thumbnails.js';
import { connectUploadModule } from './userform.js';

import { getDataFromServer } from './api.js';
import { initFilters } from './thumbnails-filters.js';

getDataFromServer((photos) => {
  drowThumbnails(photos);
  connectUploadModule();
  initFilters(photos);
});


