/* 是否是公司邮箱*/
export function isWscnEmail(str) {
  const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wallstreetcn\.com$/i;
  return reg.test(str.trim());
}

/* 手机号 */
export function validateMobile(str) {
  const reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
  return reg.test(str);
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}
/* 是否为数组*/
export function isArray (value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}

/* 是否为原生函数*/
export function isFunction (value) {
  return Object.prototype.toString.call(value) === '[object Function]'
}

/* 是否为正则*/
export function isRegExp (value) {
  return Object.prototype.toString.call(value) === '[object RegExp]'
}

// 将Fri Mar 23 2018 12:19:48 GMT+0800 (国际时间)转化为dd-MM-yyyy HH:mm:ss
export const dateToFormat = (date) => {
  date.toLocaleString("en-US", { hour12: false }).replace(/\b\d\b/g, '0$&').replace(new RegExp('/', 'gm'), '-')
}

// 获取当前的时间yyyy-MM-dd HH:mm:ss
export const obtainDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minu = date.getMinutes();
  let second = date.getSeconds();
  //判断是否满10
  let arr = [month, day, hours, minu, second];
  arr.forEach(item => {
    item < 10 ? "0" + item : item;
  })
  return year + '-' + arr[0] + '-' + arr[1] + ' ' + arr[2] + ':' + arr[3] + ':' + arr[4]
}

// 将时间戳转化为yyyy-MM-dd HH:mm:ss
export const compareTwo = (dateOne, dateTwo) => {
  return Number(dateOne.replace(/\-/g, "")) < Number(dateTwo.replace(/\-/g, ""))
}

// 数组对象排序
export const orderArr = (arr) => {
  arr.sort((a, b) => {
    let value1 = a[property];
    let value2 = b[property];
    return value1 - value2;//sort方法接收一个函数作为参数，这里嵌套一层函数用
    //来接收对象属性名，其他部分代码与正常使用sort方法相同
  })
}

