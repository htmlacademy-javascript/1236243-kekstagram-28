const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_COUNT = 5;


const hasValidCount = (hashtags) =>
  hashtags.length <= HASHTAG_MAX_COUNT;

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasUniqeTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqeTags(tags) && tags.every(isValidTag);
};

export {validateTags};
