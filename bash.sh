set -o errexit

npm i
npm run build
npm run prisma:migrate:deploy
