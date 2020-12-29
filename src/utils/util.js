/**
 * 首字母大写
 * @param {*} str
 */
export function firstLetterUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 生成UUID
 */
export function createUUID() {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });

  return uuid;
}

/**
 * body上添加/删除类名
 * @param {string} className 类名
 * @param {add | remove} action 添加或删除
 */
export function toggleBodyClass(className, action) {
  const docEl = document.getElementsByTagName('body')[0];

  if (action === 'add') {
    docEl.classList.add(className);
  } else if (action === 'remove') {
    docEl.classList.remove(className);
  }
}

/**
 * 文件引入
 * @param {} r
 * @param {*} type
 */
export function importAll(r, type = 'object', split = '') {
  const modules = type === 'object' ? {} : [];

  r.keys().forEach(key => {
    let moduleKey = key.replace(/(\.\/|\.js)/g, '');
    const moduleKeyArr = moduleKey.split(/[-/]/);

    moduleKey = '';

    if (split) {
      moduleKey = moduleKeyArr.join(split);
    } else {
      moduleKeyArr.forEach((item, index) => {
        moduleKey += index > 0 ? firstLetterUpper(item) : item;
      });
    }

    if (type === 'object') {
      modules[moduleKey] = r(key).default;
    } else {
      modules.push(r(key).default);
    }
  });

  return modules;
}

/**
 * 是否是外部 url
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 *
 * @param {Array} arr 数组
 * @param {String} labelKey label 键值
 * @param {String} valueKey value 键值
 */
export function arrToMap(arr, labelKey = 'value', valueKey = '') {
  const map = {};

  arr.forEach(item => {
    map[item[labelKey]] = valueKey ? item[valueKey] : item;
  });

  return map;
}

/**
 *
 * @param {Object} obj 对象
 * @param {function} callback 转换函数
 */
export function mapToArr(obj, callback) {
  return Object.keys(obj).map(key => {
    return callback(key, obj[key]);
  });
}
