.PHONY: init
init:
	cp -n .env.dist .env
	./bin/generate-certificates
