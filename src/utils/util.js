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
