import storage from 'js-storage';
import router from '@/router';

const localStorage = storage.localStorage;
const loginUserKey = 'loginUser';

export function getLoginUser() {
  return localStorage.get(loginUserKey);
}

export function setLoginUser(userInfo, isRemember) {
  localStorage.set(loginUserKey, userInfo);
}

export function removeLoginUser() {
  localStorage.remove(loginUserKey);
}

/**
 * 跳转登录页
 *
 * @export
 */
export function expireToLogin(redirectUrl) {
  const { fullPath, path } = router.currentRoute;

  if (path !== '/login') {
    router.push({
      path: '/login',
      query: {
        redirectUrl: typeof redirectUrl === 'undefined' ? '' : fullPath,
      },
    });
  }
}
