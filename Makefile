# TODO

ROOT=../..
REACH=$(ROOT)/reach
include $(ROOT)/VERSION
include $(ROOT)/DEPS

.PHONY: clean-client-lib-py
clean-client-lib-py:
	[ -d ./reach-client/lib ] && rm -r ./reach-client/lib || true

.PHONY: clean
clean: clean-client-lib-py \
	rm -rf server/build/*.main.mjs

server/build/%.main.mjs: reach-server/%.rsh
	$(REACH) compile $^ main

.PHONY: client-lib-py
client-lib-py: clean-client-lib-py
	$(MAKE) -C $(ROOT)/rpc-client/py build
	cp -r $(ROOT)/rpc-client/py/dist ./reach-client/lib

.PHONY: build-py
build-py: reach-server/build/index.main.mjs client-lib-py
	cd client-py && docker build \
	  --build-arg VERSION=$(shell cat $(ROOT)/rpc-client/py/VERSION) \
	  --build-arg PYTHON_IMAGE=$(PYTHON_IMAGE) \
	  --tag=reachsh/reach-app-tut-7-rpc-client-py:latest .

.PHONY: build
build: reach-server/build/index.main.mjs \
       build-py \

.PHONY: run
run:
	REACH_DEBUG=1 sbin/test-on.sh "${REACH_CONNECTOR_MODE}" py

.PHONY: runtest
runtest: build-cs
	# $(REACH) down
	REACH_DEBUG=1 sbin/test-on.sh "${REACH_CONNECTOR_MODE}" cs