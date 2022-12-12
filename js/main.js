import { createPhotos } from './data.js';
import { drowThumbnails } from './thumbnails.js';
import { connectUploadModule } from './user-Form.js';

const data = createPhotos();
drowThumbnails(data);
connectUploadModule();
