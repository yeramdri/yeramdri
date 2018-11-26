export function getCurrentContentId(url) {
  const urlArray = url.split('/')
  const contentId = urlArray[urlArray.length - 1]
  return contentId
}