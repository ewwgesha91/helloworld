const url = "https://wedev-api.sky.pro/api/kanban";
const userUrl = "https://wedev-api.sky.pro/api/user";

export async function getCadrs({ token }) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка получения данных");
  }

  const data = await response.json();
  return data;
}

export async function loginUser({ login, password }) {
  const response = await fetch(userUrl + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
    if (!response.ok) {
      throw new Error("Неправильный логин или пароль");
    }
const data = await response.json();
    return data ;
  }


export async function regUser({ login, name, password }) {
  const response = await fetch(userUrl, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });
  if (!response.ok) {
    throw new Error("Пользователь уже зарегистрирован");
  }
  const data = await response.json();

  return data;
}