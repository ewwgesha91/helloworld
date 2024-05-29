const url = "https://wedev-api.sky.pro/api/kanban";
const userUrl = "https://wedev-api.sky.pro/api/user";

export async function getCadrs({ token }) {
  const response = await fetch(url, {
    method: "GET",
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
  return data;
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

export async function addNewCard({
  token,
  title,
  topic,
  status,
  description,
  date,
}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (!response.ok) {
    throw new Error(
      "Ошибка! Задача не может быть добавлена. Пожалуйста, проверьте правильность заполнения полей."
    );
  }
  const data = await response.json();
  return data;
}