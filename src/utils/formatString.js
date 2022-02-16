export const formatString = (string, size) => {
    if (!string) {
        return string;
    }
    size = size || 4;
    if (string.length < size * 2 + 3) {
        return string;
    }
    return `${string.substr(0, size)}...${string.substr(-size)}`;
};

export default formatString;
