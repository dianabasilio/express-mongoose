let preciosCripto;

const obtenerPreciosCriptomonedas = () => {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Respuesta de red no válida");
      }
      return response.json(); // Convertir respuesta a JSON
    })
    .then((data) => {
      console.log(data); // Mostrar datos obtenidos
      preciosCripto = data;
      return data;
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
};

const ejecutar = () => {
  obtenerPreciosCriptomonedas()
    .then(() => {
      console.log("precios cripto", preciosCripto); // Este console.log ahora se ejecutará después de que la API haya respondido
    })
    .catch((error) => {
      console.error(error);
    });
};

ejecutar();
