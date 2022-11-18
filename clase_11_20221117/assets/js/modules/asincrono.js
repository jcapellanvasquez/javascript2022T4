export const runAsync = () => {
  const accionDelay = (delayTime, accion) =>
    setTimeout(() => console.log(accion), delayTime);

  const lavarseDientes = () => {
    const delay = 5000;
    const msg = "Dientes limpios!";
    console.log("Lavandose los dientes");
    accionDelay(delay, msg);
  };

  const banarse = () => {
    const delay = 10000;
    const msg = "banado, a secarse!";
    console.log("a banarse");
    accionDelay(delay, msg);
  };

  const vestirse = () => {
    const delay = 2000;
    const msg = "Vestido, a desayunar!";
    console.log("A ponerse algo bonito");
    accionDelay(delay, msg);
  };

  vestirse();
  banarse();
  lavarseDientes();
};

export const runResolveAsync = () => {
  const accionDelay = (delayTime, accion) => {
       return new Promise((resolve) => {
            setTimeout(() => {
                resolve(accion)
            }, delayTime)
       })
  }

  const lavarseDientes = () => {
    const delay = 5000;
    const msg = "Dientes limpios!";
    console.log("Lavandose los dientes");
    return accionDelay(delay, msg);
  };

  const banarse = () => {
    const delay = 10000;
    const msg = "banado, a secarse!";
    console.log("a banarse");
    return accionDelay(delay, msg);
  };

  const vestirse = () => {
    const delay = 2000;
    const msg = "Vestido, a desayunar!";
    console.log("A ponerse algo bonito");
    accionDelay(delay, msg);
  };

 console.log(accionDelay())
}
