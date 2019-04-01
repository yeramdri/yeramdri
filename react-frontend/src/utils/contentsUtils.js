export const searchTag = (tag, pathname, push) => {
  const [, category] = pathname.split('/')
  push(`/${category}/results?search=${tag}`)
};