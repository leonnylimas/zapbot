FROM node
WORKDIR /app

RUN apt-get update
RUN apt-get install nano -y
RUN apt-get install -y wget
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install -y ./google-chrome-stable_current_amd64.deb

RUN git clone https://github.com/orkestral/venom.git
RUN cd venom
COPY What.js ./

RUN npm install express venom-bot
RUN npm install
EXPOSE 8000


