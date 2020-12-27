path="/webdata/"
log="/webdata/log/bing2_vue.log"

exec 1>>$log
exec 2>>$log

date "+%Y-%m-%d %H:%M:%S"

rm -rf $path"bing2_vue"
mkdir -p $path"bing2_vue"
