#!/usr/bin/env bash
diff <(./index.js < test/types.graphql) test/expected.js && exit 0 || exit 1
