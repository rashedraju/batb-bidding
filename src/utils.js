export const checkFile = (path) => {
    try {
        return require(path) && path;
    } catch (error) {
        return '';
    }
};
