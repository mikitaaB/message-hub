FROM node:22.19.0-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY prisma ./prisma/

RUN npx prisma generate

COPY . ./

RUN npm run build
FROM node:22.19.0-alpine AS production
WORKDIR /app

COPY --from=build /app ./
EXPOSE 3000

CMD ["node", "dist/index.js"]