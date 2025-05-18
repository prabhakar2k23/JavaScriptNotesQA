Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("Oops");
  })
  .then((x) => console.log("Never runs"))
  .catch((err) => console.log(err.message));
