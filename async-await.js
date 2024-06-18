let preciosCripto;

const obtenerPreciosCriptomonedas = async () => {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Respuesta de red no válida");
    }
    const data = await response.json(); // Convertir respuesta a JSON
    console.log(data); // Mostrar datos obtenidos
    preciosCripto = data;
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

const ejecutar = async () => {
  await obtenerPreciosCriptomonedas();
  console.log("precios cripto", preciosCripto); // Este console.log ahora se ejecutará después de que la API haya respondido
};

ejecutar();
