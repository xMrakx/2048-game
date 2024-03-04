docker build . -t game
docker run --name game-0 -p 2048:8080 -d game
docker run --name game-1 -p 8402:8080 -d game