---
title: "[Mac] Visual Studio Code(VSCode)로 C/C++ 개발환경 구축하기 (g++, lldb)"
excerpt: "Visual Studio Code를 C/C++ 개발툴로 사용해보기"
header:
    overlay_image: /assets/images/unsplash-sample-wallpaper-2.jpg
    og_image: /assets/images/unsplash-sample-wallpaper-2.jpg
    caption: "Photo by [**Safar Safarov**](https://unsplash.com/@codestorm) on [**Unsplash**](https://unsplash.com)"
tags: 
  - Visual Studio Code
  - C/C++
  - Problem Solving
  - Development Environment
---

### Why VSCode?

Mac에서 C/C++ 소스코드를 빌드하고 실행하는 방법으로는 [Xcode](https://ko.wikipedia.org/wiki/엑스코드)를 사용하는 것이 가장 보편적으로 알려져있습니다. 저는 Problem Solving을 공부할 때 주로 C/C++을 사용하는데, Xcode를 주로 사용했었습니다.

하지만, 가장 큰 단점이 하나 있었습니다. 바로 파일을 stdin로 리다이렉션하는 기능을 지원하지 않습니다(...) Problem Solving을 하다보면 엄청 큰 input data를 넣어보는 경우가 생기는 데 일일이 몇 메가바이트짜리 평문을 복사 붙여넣기 해야하는 불상사가 있었습니다.

그래서 새로운 대안으로 [Visual Studio Code](https://ko.wikipedia.org/wiki/비주얼_스튜디오_코드)를 사용하게 되어 과정을 포스팅하게 되었습니다. 이 방법을 사용하면 **Redirection input from file 이 가능합니다!** `./a.out < input.txt` 와 같은 식으로 사용해서 좀 더 효율적인 Problem Solving이 가능해집니다.

### 필수 사항

아래 두개가 설치되어 있어야합니다.

* g++
* lldb

다행히 두가지 모두 Mac에서 손쉽게 설치가 가능합니다. 먼저 g++을 말씀드리겠습니다.

#### 내 Mac에 g++ 설치되었는지 확인하기

내 Mac에 g++이 설치되어있는지 확인하려면 아래처럼 입력하시면 됩니다.

```bash
$ g++ -v
```

만약 설치되어 있다면 아래와 같이 정보가 뜰 거고 없으면 알 수 없는 명령어라는 에러가 뜰 것입니다.

![image-20191012174926395](/assets/images/image-20191012174926395.png)

#### 내 Mac에 g++ 설치하기

g++을 설치하는 가장 쉬운 방법은 `Command Line Tools`를 설치하는 방법입니다. `Command Line Tools`는 맥 환경에서 `gcc`, `g++`, `make`, `git`, `svn` 등 여러가지 기본 툴을 사용하기 위해서 설치해야합니다. Xcode를 설치하면 자동으로 설치가 되지만, **굳이 Xcode를 설치하지 않고도 설치할 수 있습니다!**

1. 아래와 같은 명령어를 입력합니다.
```bash
$ xcode-select --install
```
2. 설치하겠냐는 대화상자와 함께 설치를 동의하고 기다립니다. 약 150MB ~ 200MB를 다운로드하고 설치해야하므로 시간이 약간 소요됩니다.
3. 설치가 끝나면 g++이 제대로 설치되었는 지 확인합니다.

```bash
$ g++ -v
```



다음은 `lldb`를 말씀드리겠습니다.

#### 내 Mac에 lldb가 설치되었는지 확인하기

Terminal에 아래와 같은 명령어를 입력하기만 하면 됩니다.

```bash
$ lldb
```

![image-20191012175915751](/assets/images/image-20191012175915751.png)

만약 설치가 되지 않았으면 install이 된다고 합니다. [출처](https://stackoverflow.com/a/40604085)

### Getting Started

1. 먼저 `⌘(Command)` + `⇧(Shift)` + `P` 를 눌러서 `Extensions: Install Extensions` 를 선택합니다.
![image-20191012172333903](/assets/images/image-20191012172333903.png)

2. `C/C++` 을 검색해서 Microsoft에서 배포한 [C/C++](https://github.com/Microsoft/vscode-cpptools) Extension을 설치합니다.

   ![image-20191012172502017](/assets/images/image-20191012172502017.png)

3. `lldb` 를 검색해서 `Vadim Chugunov` 님이 배포한 [CodeLLDB](https://github.com/vadimcn/vscode-lldb) 를 설치합니다. 그리고 성공적으로 설치되었으면 `⌘(Command)` + `Q` 를 눌러서 VSC를 한번 종료하고 다시 켜주세요!

   ![image-20191012172832825](/assets/images/image-20191012172832825.png)

4. 그러고 나서 `File` - `Open workspace...` 를 눌러 빌드파일이 생성될 폴더를 하나 생성하고 선택합니다. `⌘(Command)` + `O` 를 눌러도 상관없습니다.

   ![image-20191012173104461](/assets/images/image-20191012173104461.png)

5. cpp 파일을 하나 생성하고 간단한 Hello World 코드를 작성해서 저장합니다. 파일명은 상관없어요!

   ![image-20191012173321390](/assets/images/image-20191012173321390.png)

6. cpp 파일을 선택한 상태에서 `⌘(Command)` + `⇧(Shift)` + `B` 를 누르면 빌드 항목을 고르도록 되어있는데 원하시는 컴파일러의 오른쪽에 톱니바퀴 아이콘을 선택해주세요. 저는 `g++`로 빌드하고 싶기 때문에 g++을 선택하겠습니다.

   ![image-2019101217340448](/assets/images/image-20191012173403448.png)
   
7. Explorer 패널을 보면 `.vscode` 디렉토리와 하단에 `tasks.json` 이 생긴 것을 볼 수 있습니다. 여기서 tasks.json을 아래와 같이 입력해주세요.

   ```json
   {
       // See https://go.microsoft.com/fwlink/?LinkId=733558 
       // for the documentation about the tasks.json format
       "version": "2.0.0",
       "tasks": [
           {
               "type": "shell",
               "label": "g++",
               "command": "g++",
               "args": [
                   "-g",
                   "${file}",
                   "-o",
                   "${fileDirname}/${fileBasenameNoExtension}.out",
                   /*
                   "&&",   //to join building and running of the file
                   "${fileDirname}/${fileBasenameNoExtension}.out",
                   "<",
                   "${fileDirname}/sample_input.txt"
                   */
               ],
               "group": {
                   "kind": "build",
                   "isDefault": true
               },
               "presentation": {   //Explained in detail below
                   "echo": false,
                   "reveal": "always",
                   "focus": true,
                   "panel": "shared",
                   "clear": false,
                   "showReuseMessage": false
               },
               "problemMatcher": []
           }
       ]
   }
   ```

   ![image-20191012173802290](/assets/images/image-20191012173802290.png)

   각 항목을 간단하게 설명하면 다음과 같습니다.

   * `label` : task의 이름
   * `command` : 빌드 시 실행할 Shell 명령어
   * `args` : 명령어의 인자로 넘겨줄 항목들
   * `group` : vscode에서 이 task가 default인지, build인지 등을 확인할 때 쓰는 항목
   * `presentation` : vscode에서 build했을 때 terminal panel에 결과를 어떻게 보여줄 것인지에 대한 명세

   #### 참고

   > json 파일에 `args` 부분을 보면 주석이 들어가 있는 것을 볼 수 있습니다. 저부분을 지우게 되면 빌드가 끝나고 실행이 되며 `sample_input.txt`의 내용을 stdin으로 리다이렉션됩니다. 디버깅 없이 실행하고 싶을 때 사용하는 항목입니다.

8. `tasks.json`을 저장하고 다시 cpp 파일로 돌아와서 `⌘(Command)` + `⇧(Shift)` + `B` 를 눌러서 빌드합니다. 빌드가 성공되면 `cpp` 파일과 이름이 똑같은 `out` 파일이 생긴 것이 보입니다. 저 `main.out` 파일이 `main.cpp` 코드를 빌드한 실행파일입니다.

   > **빌드를 할 때, 꼭 cpp 파일을 선택한 상태여야 합니다.** `tasks.json`은 컴파일이 안되기 때문에 에러가 나게 됩니다.

   ![image-20191012180825856](/assets/images/image-20191012180825856.png)

9.  이제 디버깅을 하기 위해서 세팅을 하겠습니다. `.vscode` 디렉토리 아래에 `launch.json`을 생성합니다. 그리고 아래 내용을 붙여넣습니다.

   ```json
   {
       "version": "0.2.0",
       "configurations": [
           {
               "type": "lldb",
               "request": "launch",
               "name": "Launch",
               "program": "${fileDirname}/${fileBasenameNoExtension}.out",
               "args": [],
               "preLaunchTask": "g++",
               "stdio": ["${fileDirname}/sample_input.txt"],
               "terminal": "integrated"
           }
       ]
   }
   ```

   ![image-20191012181543559](/assets/images/image-20191012181543559.png)

   각 항목에 대한 자세한 설명을 [여기](https://github.com/vadimcn/vscode-lldb/blob/master/MANUAL.md#launching)에 있습니다. 중요한 항목만 몇개 설명드리겠습니다.

   * `preLaunchTask` : `tasks.json`에서 정의한 `g++` 라벨을 가진 task를 실행하고 launch하겠다는 의미입니다. 즉, 무조건 빌드를 하고 실행한다는 의미입니다.
   * `stdio` : `stdin`, `stdout`, `stderr`를 각각 파일로부터 받겠다는 의미입니다. 저는 `stdin`을 `sample_input.txt` 파일에서 리다이렉션할 것이기 때문에 저렇게 작성했습니다.

10. 그리고 실행하기 전에 소스코드에서 `stdin`으로 값을 입력 받도록 바꾸고 `sample_input.txt`을 생성해서 아무 값이나 입력했습니다.

   ![image-20191012182116865](/assets/images/image-20191012182116865.png)

11. 왼쪽에 디버깅 아이콘을 누르거나  `⌘(Command)` + `⇧(Shift)` + `D` 를 눌러서 디버깅 패널을 엽니다. 그리고 패널 상단에 실행버튼을 누릅니다.
  
    > **F5**를 누르거나 터치바 맥북을 사용하신다면 디버깅 실행 아이콘(꽉찬 삼각형)을 누르셔도 됩니다.
    
    ![image-20191012182409144](/assets/images/image-20191012182409144.png)
    
    그러면 위처럼 `Debug Console`이 아닌 `Terminal`을 누르고 `Launch` 터미널을 선택하면 실행된 결과를 볼 수 있습니다.
    
12. 이제 `Breakpoint`를 걸어보겠습니다. `Breakpoint`를 걸고싶은 라인 넘버 왼쪽을 누르면 빨간색 점이 생깁니다. 그러고 나서 실행을 하면 해당 라인이 실행되기 이전에 정지하게 되며 변수의 상태, 콜스택 등등을 확인할 수 있습니다.

    ![image-20191012182728452](/assets/images/image-20191012182728452.png)

    `input` 변수에 제대로 들어간 것이 보입니다. 디버깅 명령어들은 Visual Studio와 동일하게 라인 단위 실행, 함수 진입, 함수 탈출, 다음 브레이크 포인트까지 진행 기능을 지원합니다.

### 결론

아직 많이 사용해보진 않아서 얼마나 좋은지는 잘 모르겠습니다. Xcode는 메모리 사용량, CPU 점유율 등 여러가지 inspection을 지원해주지만 VSCode는 그렇지 않다는 점이 좀 아쉽습니다. 하지만, 소스 코드 에디터에 그치지 않고 IDE의 기능을 사용할 수 있기 때문에 의미있는 시도였다고 생각합니다.

하지만, 좀 더 정밀한 디버깅이 필요한 개발이나 규모가 큰 프로젝트에서는 IDE를 사용하는 것을 추천드리고 싶습니다.

