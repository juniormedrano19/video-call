export const getWordsToAvatar = (userName: string): string => {
  const words = userName?.split(" ");
  let avatarString = words
    ?.slice(0, 2)
    .map((word) => word.charAt(0))
    ?.join("");
  return avatarString;
};
