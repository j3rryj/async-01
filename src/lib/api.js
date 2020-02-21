export const mockApiCall = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (id) {
        case 1:
          return resolve({ id: 1, name: "Vince Noir" });
        case 2:
          return resolve({ id: 2, name: "Howard Moon" });
      }
      reject(new Error("id not found"));
    }, 500);
  });
