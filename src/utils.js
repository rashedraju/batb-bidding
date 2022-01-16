export const checkFile = (path) => {
    try {
        return require(path);
    } catch (error) {
        return '';
    }
};
