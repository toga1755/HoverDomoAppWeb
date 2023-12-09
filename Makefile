start :
	docker compose up -d --build
	docker-compose exec php /bin/bash -c "cd LaravelReactProject  &&  composer install --no-scripts &&  composer dump-autoload && cp .env.example .env && php artisan key:generate "
	docker-compose exec node /bin/sh -c "cd LaravelReactProject && rm -rf node_modules && rm -rf package-lock.json && npm cache clear --force"
	docker-compose exec node /bin/sh -c "cd LaravelReactProject && npm install && npm run dev"

build:
	docker compose up -d --build

run :
	docker compose up -d --build
	docker-compose exec node /bin/sh -c "cd LaravelReactProject && npm run dev"

watch :
	docker compose up -d --build
	docker-compose exec node /bin/sh -c "cd LaravelReactProject && npm run watch-poll"

up :
	docker compose up -d

down :
	docker compose down

stop :
	docker compose stop