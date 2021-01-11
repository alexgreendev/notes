.DEFAULT_GOAL := default

default:
	docker-compose build

init.db:
	docker exec -ti database /bin/sh -c \
	'psql -a -f /database/init_db.sql'
	make note.db.upgrade

note.db.create:
	docker exec -ti note_service /bin/sh -c \
	'npm run typeorm:create -n "$(name)"'
	note.editable

note.db.up:
	docker exec -ti note_service /bin/sh -c \
	'npm run typeorm migration:run'

note.db.down:
	docker exec -ti note_service /bin/sh -c \
	'npx typeorm migration:revert'

note.editable:
	docker exec -ti note_service /bin/sh -c \
	'chmod 777 ./src/* && chmod 777 ./src/migration/*'
