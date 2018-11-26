import meta from './meta/reducer'
import search from './search/reducer'
import contents from './contents/reducer'

// 이는 바깥에서 combine 해준다.
export default {
  meta,
  search,
  contents
}
