document.addEventListener("DOMContentLoaded", () => {
    // -------- REGISTRO --------
    const registroForm = document.getElementById("registroForm");
    if (registroForm) {
      registroForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
  
        // Verifica si el correo ya está registrado
        if (localStorage.getItem("usuario_" + correo)) {
          alert("Este correo ya está registrado. Por favor, inicia sesión o usa otro correo.");
          return;
        }
  
        // Verifica que las contraseñas coincidan
        if (password !== password2) {
          alert("Las contraseñas no coinciden.");
          return;
        }
  
        const usuario = { nombre, correo, password };
  
        // Guarda el usuario en localStorage
        localStorage.setItem("usuario_" + correo, JSON.stringify(usuario));
  
        alert("Registro exitoso. Ahora inicie sesión.");
        window.location.href = "login.html";
      });
    }
  
    // -------- LOGIN --------
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const correo = document.getElementById("correoLogin").value.trim();
        const password = document.getElementById("passwordLogin").value;
  
        const usuarioGuardado = localStorage.getItem("usuario_" + correo);
        if (!usuarioGuardado) {
          alert("El correo no se encuentra registrado.");
          return;
        }
  
        const usuario = JSON.parse(usuarioGuardado);
  
        if (usuario.password === password) {
          localStorage.setItem("usuario_actual", JSON.stringify(usuario));
          alert("Ingreso exitoso. Bienvenido, " + usuario.nombre + "!");
          window.location.href = "mi_cuenta.html";
        } else {
          alert("Contraseña incorrecta.");
        }
      });
    }
  });
  