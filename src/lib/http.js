import axios from "axios";

export const post = async (path, postData) => {
  const baseUrl = "";
  let url = baseUrl.concat(path);
  const data = JSON.stringify(postData);
  let ret = await new Promise((resolve) => {
    axios({
      method: "post",
      url,
      data,
      headers: { "Content-Type": "application/json" },
    }).then((res) => resolve(res.data));
  }).then((ret) => ret);
  return ret;
};

export const get = async (path, token) => {
  const baseUrl = "";
  let url = baseUrl.concat(path);
  let ret = await new Promise((resolve) => {
    axios({
      method: "get",
      url,
      headers: { Authorization: `passport ${token}` },
    }).then((res) => resolve(res.data));
  }).then((ret) => ret);
  return ret;
};

export const getUsername = async (token) => {
  const ret = await get("https://os.ncuos.com/api/user/profile/index", token);
  const name = ret.name || "未获取";
  window.localStorage.setItem("name", name);
  return name;
};
