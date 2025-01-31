#!/bin/env sh

if [ ! -d ./tmp ]; then
  mkdir ./tmp
fi

cat $1 | jq -cr '.db[0].data.posts | map(select(.status == "published"))[] | .slug' > tmp/keys
cat $1 | jq -cr '.db[0].data.posts | map(select(.status == "published"))[] | {"page": {"meta_title": .title, "body_class": (if .type == "post" then "post-template" else "page-template" end)}, "post": {"post_class": "post no-image", "title": .title, "plaintext": (if .plaintext != null then .plaintext | @json | ltrimstr("\"") |  rtrimstr("\"") | gsub("\\n"; "") else null end), "html": (if .html == null then "" else .html | @json | ltrimstr("\"") |  rtrimstr("\"") end)}}' > ./tmp/values

while read key <&3 && read value <&4; do
  bunx wrangler kv key put "/${key}/" "$value" --binding=DATA --local
done 3<tmp/keys 4<tmp/values

if [ -d ./tmp ]; then
  rm -rf ./tmp
fi
