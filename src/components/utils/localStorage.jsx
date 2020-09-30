export function isAuthenticated() {
  let token = window.localStorage.getItem("token");
  if (token != null) return true;
  else return false;
}
export function clearStorage() {
  window.localStorage.clear();
  //   history.push("/");
}
export function setStorage(name, value) {
  window.localStorage.setItem(name, value);
}
export function getStorage(name, value) {
  window.localStorage.getItem(name, value);
}
