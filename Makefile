.PHONY: install start build test
.DEFAULT_GOAL := help

# COLORS
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7) 
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

HELP_HELPER = \
    %help; \
    while(<>) { push @{$$help{$$2 // 'options'}}, [$$1, $$3] if /^([a-zA-Z\-\%]+)\s*:.*\#\#(?:@([a-zA-Z\-\%]+))?\s(.*)$$/ }; \
    print "usage: make [target]\n\n"; \
    for (sort keys %help) { \
    print "${WHITE}$$_:${RESET}\n"; \
    for (@{$$help{$$_}}) { \
    $$sep = " " x (32 - length $$_->[0]); \
    print "  ${YELLOW}$$_->[0]${RESET}$$sep${GREEN}$$_->[1]${RESET}\n"; \
    }; \
    print "\n"; }

help: ##prints help
	@perl -e '${HELP_HELPER}' ${MAKEFILE_LIST}

install: ##@install Install the project's dependeencies
	@yarn install

start: ##@start Start the project
	@mkdir -p dist/assets
	@cp -r src/assets/cards dist/assets/cards
	@yarn start

build:
	@mkdir -p dist/assets
	@cp -r src/assets/cards dist/assets/cards
	@yarn build

test: ##@test Run all the tests
	@yarn test
