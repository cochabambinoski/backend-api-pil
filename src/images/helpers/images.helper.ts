

export const renameImage = (req, file, callback) => {

    const extension = file.originalname.split('.')[1];
    const fileName = file.originalname;
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');

    callback(null, `publi.jpg`);
}

export const fileFilter = (req, file, callback) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return callback( new Error('Invalid format type'), false)
    }

    callback(null, true)
}