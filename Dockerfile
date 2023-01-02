FROM node:16-alpine
RUN apk add --no-cache make gcc g++ python3
WORKDIR /app
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn
EXPOSE 80
EXPOSE 3000
CMD ["yarn", "dev"]
