FROM node:16-alpine
RUN apk add --no-cache make gcc g++ python3
WORKDIR /app
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn
RUN yarn test
RUN yarn build
EXPOSE 80
CMD ["yarn", "start"]
