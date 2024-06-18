const obtenerUsuarios = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Respuesta de red no válida");
      }
      return response.json(); // Convertir respuesta a JSON
    })
    .then((data) => {
      console.log("Usuarios obtenidos:", data); // Mostrar usuarios obtenidos
      return data; // Devolver los datos de los usuarios
    })
    .catch((error) => {
      console.error("Error en la solicitud de usuarios:", error);
      return null; // Devolver null en caso de error
    });
};

const obtenerDetallesUsuario = (usuarioId) => {
  const url = `https://jsonplaceholder.typicode.com/users/${usuarioId}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Respuesta de red no válida");
      }
      return response.json(); // Convertir respuesta a JSON
    })
    .then((data) => {
      console.log(`Detalles del usuario ${usuarioId} obtenidos:`, data); // Mostrar detalles del usuario
      return data; // Devolver los detalles del usuario
    })
    .catch((error) => {
      console.error(
        `Error en la solicitud de detalles del usuario ${usuarioId}:`,
        error
      );
      return null; // Devolver null en caso de error
    });
};

const ejecutar = () => {
  obtenerUsuarios()
    .then((usuarios) => {
      if (usuarios) {
        // Obtener detalles del primer usuario como ejemplo
        return obtenerDetallesUsuario(usuarios[0].id);
      } else {
        console.error("No se pudieron obtener los usuarios.");
        return null;
      }
    })
    .then((detallesUsuario) => {
      if (detallesUsuario) {
        console.log("Detalles del primer usuario:", detallesUsuario); // Este console.log ahora se ejecutará después de que los detalles del usuario hayan sido obtenidos
      } else {
        console.error("No se pudieron obtener los detalles del usuario.");
      }
    })
    .catch((error) => {
      console.error("Error inesperado:", error);
    });
};

ejecutar();
