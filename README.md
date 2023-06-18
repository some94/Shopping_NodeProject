

<div align="center">

# Shopping_Project-NodeJS
 <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" alt="Node.js"/> 
 <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white" alt="Express"/>
 <img src="https://img.shields.io/badge/WebStorm-000000?style=flat&logo=WebStorm&logoColor=white" alt="WebStorm"/> 
 <img src="https://img.shields.io/badge/Passport-34E27A?style=flat&logo=Passport&logoColor=white" alt="Passport"/>
 <img src="https://img.shields.io/badge/.ENV-ECD53F?style=flat&logo=.ENV&logoColor=white" alt=".ENV"/>
 <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" alt="MySQL"/>
 <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=Sequelize&logoColor=white" alt="Sequelize"/>
 <img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon"/>

</div>

## 팀원소개
+ 임성묵 (https://github.com/mookseong)
+ 김동휘 (https://github.com/some94)

<br/><br/>
본 프로젝트는 API 설계 능력을 키우기 위하여 가장 대중적이면서 기본적인 CRUD 및 여러 기능들을 구현할 수 있는 쇼핑몰을 설계하고자 하였습니다. Controller, Service, Repository 설계 방식을 따라 개발하였고, API 설계만을 목적으로 하여 **Front-end는 개발하지 않았습니다.**<br/>

따라서 **서버를 실행한 후 postman으로 API 기능을 수행할 수 있습니다.** <br/><br/>

**핵심 기능**

- 로그인, 회원가입 등 사용자 관련 API 설계
- 제품 및 장바구니 관련 CRUD API 설계
- 로그인 된 경우에만 장바구니 기능을 사용가능하도록 설계<br/><br/>

**실행 방법**

node_modules와 package-lock.json 파일이 업로드 되어 있지 않으므로 **npm install express** 명령어로 express를 설치해주어야 합니다. 또한 package.json 파일을 참고하여 다른 npm 패키지를 설치하여야 합니다.<br/><br/>

.env 파일이 존재하지 않으므로 생성해주어야 합니다. .env 파일에는 PORT 번호와 SECRET_KEY, KAKAO_ID가 들어있습니다. KAKAO_ID는 https://developers.kakao.com/에서 app을 생성하고 발급받은 REST API 키입니다. 소셜 로그인 기능을 사용하지 않으려면 passport 모듈과 관련된 파일을 모두 삭제하면 됩니다.<br/><br/>

마지막으로 프로젝트 루트 디렉터리 하위에 config 폴더를 생성하고 config.json 파일을 만들어 DB 정보를 입력해주면 됩니다. “database”에 설정한 이름대로 schema를 생성한 다음 터미널에서 **npm start** 명령어로 서버를 실행하면 됩니다.<br/><br/>

### Postman 예시
<br/>

**회원 가입 요청 API**
<br/>
![image01](https://github.com/some94/Shopping_NodeProject/assets/39859203/2eba938b-53e1-407e-8bc8-ad1ca176992b)
![image02](https://github.com/some94/Shopping_NodeProject/assets/39859203/4cfc805f-b894-4aa5-b4bf-8ba7f88a6ff9)

