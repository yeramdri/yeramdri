export function getCurrentContentId(url) {
  const urlArray = url.split('/')
  const contentId = urlArray[urlArray.length - 1]
  return contentId
};

export const searchTag = (tag, pathname, push) => {
  const [, category] = pathname.split('/')
  push(`/${category}/results?search=${tag}`)
};