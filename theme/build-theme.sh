#!/bin/env sh

file_path=`realpath "$0"`
file_dir=`dirname $file_path`
root_dir=${file_path%/*/*}
src_dir=${root_dir}/src
dst_file=${src_dir}/hbs_tpl.compiled.js

head=`cat >$dst_file <<EOF
import Handlebars from 'handlebars'

export default function () {
  // ===== templates =======
EOF
`
tail="}"


for template in "${file_dir}/*.hbs"; do
  handlebars $template -o -k asset -k date >> $dst_file 
done

for partial in "${file_dir}/partials/*"; do
  handlebars $partial -p -o -k url -k page_url -k excerpt -k date >> $dst_file 
done

echo -n $tail >> $dst_file
