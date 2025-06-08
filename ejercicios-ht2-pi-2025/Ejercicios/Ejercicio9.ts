interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
  correo?: string;
}

interface InformacionLogIn {
  correo: string;
  clave: string;
  recaptcha: boolean;
}

const usuarioActual: Usuario = {
  nombre: 'Juan',
  edad: 25,
  activo: true,
  correo: 'juan@example.com'
};

function loguear(info: InformacionLogIn): void {
  const correoValido = info.correo.includes('@') && info.correo.includes('.');
  const claveValida  = info.clave.length >= 6;
  const recaptchaOK  = info.recaptcha;

  if (correoValido && claveValida && recaptchaOK) {
    console.log('Acceso permitido');
  } else {
    console.log('Datos inválidos');
  }
}

const datosLogin: InformacionLogIn = {
  correo: 'correo@ejemplo.com',
  clave:  '123456',
  recaptcha: true
};

loguear(datosLogin);