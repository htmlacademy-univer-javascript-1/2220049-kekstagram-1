import { createPhotos } from './data.js';
import { drowThumbnails } from './thumbnail.js';
import { connectUploadModule } from './user-Form.js';

const data = createPhotos();
drowThumbnails(data);
connectUploadModule();
