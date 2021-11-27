// try {
//   console.log("start");
//   console.log(value);
//   console.log("end");
// } catch (err) {
//   console.log("Error happend!!!");
// }

// try {
//   console.log("start");
//   setTimeout(() => {
//     try {
//       console.log(value);
//     } catch (err) {
//       console.log("Error!!!");
//     }
//   }, 3000);
//   console.log("end");
// } catch (err) {
//   console.log("Error happend!!!");
// }

// const a = 10;
// try {
//   try {
//     if (a === 10) {
//       throw new SyntaxError("my custom error");
//     }
//     console.log(a);
//   } catch (err) {
//     if (err.name === "Error") {
//       console.log(err.name, err.message);
//     } else {
//       throw new Error("error's done");
//     }
//   }
// } catch (err) {
//   console.log(err.message);
// }

const baseUrl = "https://reqres.in/api";

const getResponseData = (data) => {
  console.log(data, "Done");

  const element = document.createElement("div");
  element.style.background = "red";
  element.style.fontSize = "40px";
  element.innerHTML = `User with id = ${data.id}, created at ${data.createdAt}`;

  document.body.appendChild(element);
};
// const getRequest = (page, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `${baseUrl}/users?page=${page}`);
//   xhr.send();

//   xhr.responseType = "json";
//   //   xhr.onload = function () {
//   //     callback(JSON.parse(xhr.response).data);
//   //   };

//   xhr.onload = function () {
//     callback(xhr.response.data);
//   };
// };

getRequest(1, getResponseData);

const postRequest = (body, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", `${baseUrl}/users`);
  xhr.send(JSON.stringify(body));
  xhr.responseType = "json";
  xhr.onload = function () {
    callback(xhr.response);
  };
};

postRequest({ name: "Neo", job: "Soldier" }, getResponseData);

const getRequest = async (page) => {
  try {
    const res = await fetch(`${baseUrl}/users?page=${page}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
getRequest(1);

const getRequest = async (page) => {
  const res = await fetch(`${baseUrl}/users?page=${page}`);
  const data = await res.json();
  console.log(data);
};
getRequest(1);

const postRequest = async (body) => {
  const res = await fetch(`${baseUrl}/users`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await res.json();
  getResponseData(data);
};
postRequest({ name: "Neo", job: "Soldier" });
