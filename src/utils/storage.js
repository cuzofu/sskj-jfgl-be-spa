import {isNull} from './utils';

export const getAuthority = () => {
  return localStorage.getItem('authority');
};

export const setAuthority = params => {
  return localStorage.setItem('authority', JSON.stringify(params));
};

export const setStore = params => {
  const {name, content, type = 'session'} = params;
  const obj = {
    dataType: typeof content,
    content,
    type,
    datetime: new Date().getTime(),
  };
  if (type === 'session') sessionStorage.setItem(name, JSON.stringify(obj));
  else localStorage.setItem(name, JSON.stringify(obj));
};

/**
 * 获取 storage
 */
export const getStore = params => {
  const {name, type} = params;
  if (isNull(name)) {
    return null;
  }
  let obj;
  if (type === 'session') {
    obj = sessionStorage.getItem(name);
  } else if (type === 'local') {
    obj = localStorage.getItem(name);
  } else {
    obj = sessionStorage.getItem(name);
    if (isNull(obj)) obj = localStorage.getItem(name);
  }
  if (isNull(obj)) return null;
  obj = JSON.parse(obj);
  if (obj.dataType === 'number') {
    return Number(obj.content);
  }
  if (obj.dataType === 'boolean') {
    return eval(obj.content);
  }
  return obj.content;
};

/**
 * 删除 storage
 */

export const removeLocal = name => {
  localStorage.removeItem(name);
};

export const removeSession = name => {
  sessionStorage.removeItem(name);
};

export const removeStore = name => {
  removeLocal(name);
  removeSession(name);
};

export const clearLocal = () => {
  localStorage.clear();
};

export const clearSession = () => {
  sessionStorage.clear();
};

export const clearAll = () => {
  clearLocal();
  clearSession();
};

