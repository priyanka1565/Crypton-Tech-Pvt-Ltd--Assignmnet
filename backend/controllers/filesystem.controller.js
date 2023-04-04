// file system api
const fs = require('fs/promises');


const displaySize = async (path) => {
    const stats = await fs.stat(path);
    const fileSizeInBytes = stats.size;
    
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024); // file size in MB
    console.log(fileSizeInMegabytes + ' megabytes');
};

displaySize('../Backend_Developer_v1.pdf');

