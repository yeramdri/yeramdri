<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/286950/44381217-3fb83580-a54a-11e8-8b96-5395f2851df1.png"/>
  <br/>
  <br/>
</p>

# `Yeramdri` 에 기여하기

누구나 `yeramdri` 저장소에 기여할 수 있습니다. 👋

* [이슈에 기여하기](#이슈에-기여하기)
* [코드에 기여하기](#코드에-기여하기)

## 이슈에 기여하기

`yeramdri` 저장소는 [깃헙](https://github.com/livelikeabel/yeramdri-web-project/issues)에서 이슈를 관리합니다.
프로젝트에 기여하기에 앞서, 기여하고자 하는 이슈를 선택해 주세요. 관련된 이슈가 없다면 생성해 주세요.

* 기여하고 싶은 이슈를 찾고 싶으신가요? <kbd>[help wanted](https://github.com/livelikeabel/yeramdri-web-project/labels/%3Araising_hand_man%3A%20help%20wanted)</kbd> 또는 <kbd>[good first issue](https://github.com/livelikeabel/yeramdri-web-project/labels/%3A%2B1%3A%20good%20first%20issue)</kbd> 라벨이 달린 이슈를 찾아주세요.
* 이슈에 [RFC](https://github.com/livelikeabel/yeramdri-web-project/issues?q=is%3Aissue+is%3Aopen+label%3ARFC) 라벨을 사용하면, 기능 개발에 앞서 yeramdri sw 팀의 피드백을 받을 수 있습니다.🎉

## 코드에 기여하기

### 리뷰 진행하기

모든 브랜치는 `pull request`(이하 `PR`) 를 통해 머지 되어야 하며, 모든 `PR` 은 반드시 리뷰를 거쳐야 합니다.

* (`develop` 브랜치를 제외한) 모든 `PR` 는 `develop` 브랜치로 보내는 것 이 원칙입니다.
* 리뷰어는 `PR`을 **생성한 사람**이 지정 합니다.
* 모든 리뷰어들이 수정사항을 <kbd>approve</kbd> 하면, 리뷰를 요청한 사람이 머지를 수행합니다.
* 머지를 수행한 후 머지에 사용된 브랜치는 **삭제**합니다.

`PR` 를 통한 리뷰는 다음과 같이 진행합니다.

* 수정사항이 반영된 브랜치를 `push` 합니다.
* PR 을 작성합니다.
* 리뷰어들을 추가하고, 리뷰 및 피드백(코멘트) 을 받습니다.
* 받은 피드백을 바탕으로 코드를 수정합니다.
* 수정한 부분을 `push` 합니다.
* 리뷰 피드백에 대한 코멘트를 작성하여, 리뷰어에게 변경사항을 알립니다.
  * 수정이 완료된 피드백 코멘트는 `hide` 처리해 주세요. 리뷰어들이 `PR` 의 진행사항을 효율적으로 파악하는데 도움이 됩니다.
* 이 과정을 모든 리뷰어가 <kbd>approve</kbd> 할 때까지 반복해 주세요.

`PR` 을 통한 리뷰를 진행할 때에는 아래의 사항들을 고려해 주세요.

* 개발자간의 코드 리뷰는 최대한 **상세하게**  진행 됩니다. 코드 스타일, 예상할 수 있는 버그, 의미를 파악하기 힘든 코드에 대한 질문 등등...

> 리뷰 중 기존의 commit들을 삭제하는 경우 주의해 주세요. 리뷰 코멘트 thread 가 닫힐 수 있습니다.

> [`git worktree`](https://git-scm.com/docs/git-worktree) 명령어를 활용하면, 동시에 여러 브랜치의 코드를 쉽게 리뷰할 수 있습니다.

> [git worktree 로 여러 브랜치를 동시에 작업하기](../docs/blog/2017/git-worktree.md) 포스트를 참고하세요.

### 문서 작성하기

* 프로젝트와 관련이 있는 문서는 각 프로젝트의 `docs` 디렉토리에 생성해 주세요.
* 문서는 문서 **그 자체로** 이해가 될 수 있어야 합니다. `image` 와 링크를 최대한 활용해 주세요.
  * 너무 큰 이미지는 문서를 읽는데 오히려 방해가 될 수 있습니다.
  * `<kbd><img width="400" src="<URL>"/></kbd>` 태그 활용해 이미지의 크기를 적절하게 조절할 수 있습니다.
  * 이미지의 `height` 가 너무 커서 조절이 어렵다면, `<details><summary></summary></details>` 태그를 활용해 [이미지를 감췄다가 필요한 경우 확인할 수 있습니다.](https://github.com/riiid/www/blob/master/experiments/intro-history/README.md#snapshots)
* 문서를 [이미지로 시작하는 것을 고려해 주세요](../docs/README.md). 나중에 문서를 기억해 내는데 도움을 줄 수 있습니다. ([ClipArt ETC](https://etc.usf.edu/clipart/) 의 이미지가 github flavored markdown 과 잘 어울립니다.) 문서에 고풍스러움도 추가됩니다. :trollface:
