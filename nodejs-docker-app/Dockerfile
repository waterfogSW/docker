# 베이스 이미지 명시
FROM node:10

# Working Dirctory
# Workdir를 지정해 주지 않으면 copy한 파일들이 root디렉토리에 복사됨
# 만약 base이미지에 이미 home이라는 폴더가 있다면 copy시 덮어씌어지게 됨
# copy파일과 root폴더가 뒤섞이게 됨
# 지정해주면 run시 workdir부터 시작
WORKDIR /usr/src/app

# package.json, server.js
# 파일을 컨테이너 내부에 copy(npm install 사전작업)
# COPY package.json ./

# 매 코드 수정시마다 종속성을 다운로드 받아야 하므로 불필요한 작업 발생
# 따라서 종속성 부분만 따로 먼저 copy해 줌(npm install) -> 종속성부분이 캐시되어 추후 코드수정시 build가 빨라짐
COPY package.json ./

# COPY server.js ./ --> COPY ./ ./ = 현재디렉토리의 모든 파일을 도커로 복사
COPY ./ ./

# 추가적으로 필요한 파일 다운로드
RUN npm install

# 컨테이너 시작시 실행될 명령어를 명시
CMD [ "node", "server.js" ]
