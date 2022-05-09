export const url = "https://api.github.com/users/";
export const REPOS_PER_PAGE = 4;
export const reduceToThousands = (num) => {
  if (num > 1000) {
    const res = (num / 1000).toFixed(1);
    return `${res}k`;
  } else {
    return num;
  }
};
