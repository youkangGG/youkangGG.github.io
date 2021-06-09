/*
默认选项复制
*/
function random(low, high) {
    low = low - 1
    var rand = parseInt(Math.random() * (low - high + 1) + high);
    return rand;
}
// 产生1到10的随机数字
place_num = random(1, 11)
$('#select_place').val(place_num)


Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  
function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
}
$('#iptdate').val(new Date().toDateInputValue());

var d = new Date();
h=d.getHours()

if(h < 13){
    $('#select_time').val('13:00-14:00')
}else if(h >= 20){
    $('#select_time').val('20:00-21:00')
}else{
    $('#select_time').val((h+1)+':00-'+(h+2)+':00')
}

/*
生成
*/
$('#iptGenerate').on('click', function(){
    $('.module').hide()
    $('.block .number').text($('#select_place').val() + '号')
    
    datetime_ = parseDate($('#iptdate').val()).Format("yyyy-MM-dd")
    $('.block .date').text(datetime_)
    
    $('.block .time').text($('#select_time').val())
})

$('#header-close').click(function(){
    alert('又不是真的，点了也没用~')
})
$('#return').click(function(){
    alert('又不是真的，返回也没用~')
})
