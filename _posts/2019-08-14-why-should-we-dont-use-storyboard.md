---
title: "iOS 개발에서 Xcode 스토리보드를 쓰지 말아야 하는 이유"
excerpt: "스위프트에서의 **스토리보드 vs. 코드 UI**"
header:
    overlay_image: /assets/images/unsplash-sample-wallpaper-1.jpg
    og_image: /assets/images/unsplash-sample-wallpaper-1.jpg
    caption: "Photo by [**Florencia Potter**](https://unsplash.com/@florenciapotter) on [**Unsplash**](https://unsplash.com)"
tags: 
  - iOS
  - UI
---

iOS 개발을 했다면 누구나 한번씩은 봤을 기능인 Xcode Storyboard가 있다. 이 기능은 직관적으로 앱의 흐름을 파악할 수 있고, 무엇보다 **코드를 몰라도 View를 구성**할 수 있다!

하지만, 뷰가 복잡해지면 Storyboard도 같이 복잡해지고, 앱 규모가 커지면 Storyboard의 크기가 커져서 로드하는데 오래걸리게 된다(...)

![Xcode Storyboard Overview](/assets/images/image-20190814143246597.png)

스토리보드와 코드로 짜는 UI는 명백히 Trade-off의 문제고, 많은 사람들이 이러한 문제에 대해 공감하고 있어서 이에 대한 많은 의견들이 나오고 있다.

그 의견들을 모아 **언제 스토리보드를 써야하는지와 그 이유를 찾기위해 여러가지 아티클들을 찾아본 결론**을 정리해보고자 글을 쓴다. *참고한 링크들은 글 가장 하단에 첨부했다.*

스토리보드의 장단점으로 논의되는 점들을 간단하게 요약해보면 다음과 같다.

## 스토리보드의 장점

* **빠른 초기화** - 뷰를 만드는데 오래걸리지 않는다는 장점
* **시각화** - 앱의 흐름을 한눈에 볼 수 있는 점. 눈에 바로바로 보이기 때문에 이목을 끌 수 있는 점
* **낮은 진입장벽** - 코드를 볼라도 초보자들이 이쁜 뷰를 만들 수 있는 점

## 스토리보드의 한계와 단점

* **생산성** - 앱이 점점 커지고 스토리보드 로딩시간이 길어지게 되면 오히려 생산성이 떨어짐
* **가독성** - 스토리보드가 방대하면 읽기도 어려워지고 난잡해보여서 가독성이 많이 떨어짐
* **협업 어려움** - 스토리보드 파일이 XML 포맷에다가 읽기도 어렵기 때문에 다수의 인원이 수정을 하게되면 **Merge Conflict 처리가 큰 어려움**으로 작용
* **재사용성** - 스토리보드로 만든 뷰는 재사용하기가 어렵다
* **번거로움** - 스토리보드로 만든 뷰들을 코드와 연결하기 위해서는 `Identifier`를 부여해줘야하는 데 이걸 매번 일일이 연결해주는 게 생각보다 번거롭다!

## 코드로 UI를 짜야하는 이유

* Storyboard를 통해 만들 수 있는 UI는 전부 코드로 가능하다. **하지만, 코드로 만든 UI 중에 Storyboard로는 구현 못하는 것이 있다.**

  * 버튼에 `Border Radius`를 준다던가.. 배경에 특정 패턴을 준다던가..

  ![UI Ability](/assets/images/image-20190814150748264.png)

* 코드로 UI를 작성하다보면 API Reference Documentation을 자주 찾아보게되고 자연스럽게 공식 문서와 친해진다.
  
  * 네비게이션 바, 탭바 컨트롤러 동작원리 등을 자연스럽게 찾아보게 됨
* 스토리보드에만 의존하다보면 언젠가는 한계에 직면하게 되고 극복하려면 코드를 써야한다.

## 결론

스토리보드가 배우기 쉽고 눈에 잘들어와서 좋지만, 고급 개발자로 거듭나기 위해서는 언젠가는 버려야한다. 이미 거대한 앱, 프로젝트들에서는 잘 사용하지 않는 추세를 보인다.

스토리보드를 사용해도 되는 때를 정리하고 글을 마치도록 하겠다.

1. 앱이 규모가 크지 않고, 복잡하지 않아서 빠르게 만들 수 있을 때
2. 스토리보드만으로 만들 수 있고, 흐름을 한눈에 보고싶을 때
3. 누군가와 협업하지 않고 혼자서 앱을 만들 때

**이외에는 스토리보드보다 코드를 작성하는 걸 추천한다.**

### 참고자료

* [**Storyboard Navigation vs. Programmatic Navigation in Swift** - lvano Di Gase](https://medium.com/better-programming/ios-programming-storyboard-navigation-vs-programmatic-navigation-cfd363de3618)

* [**Why I Don't Use Storyboard** - Bob Lee](https://blog.bobthedeveloper.io/why-i-dont-use-storyboard-fe14a1a99f58)

* [**Storyboard vs. Programmatically in Swift** - Henry Chan](https://medium.com/@chan.henryk/storyboard-vs-programmatically-in-swift-9a65ff6aaeae)

* [**Why We Don’t Use Interface Builder and Storyboards at Instabug**](https://instabug.com/blog/why-we-dont-use-interface-builder-and-storyboards-at-instabug/)

