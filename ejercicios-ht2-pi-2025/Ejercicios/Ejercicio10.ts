enum Prioridad {
  ALTA  = 'Alta',
  MEDIA = 'Media',
  BAJA  = 'Baja'
}

enum EstadoTarea {
  PENDIENTE    = 'Pendiente',
  EN_PROGRESO  = 'En progreso',
  FINALIZADA   = 'Finalizada'
}

interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  prioridad: Prioridad;
  estado: EstadoTarea;
}

class GestorTareas {
  private tareas: Tarea[] = [];

  agregarTarea(titulo: string, prioridad: Prioridad): void {
    const nueva: Tarea = {
      id: Date.now(),         
      titulo,
      completada: false,
      prioridad,
      estado: EstadoTarea.PENDIENTE
    };
    this.tareas.push(nueva);
  }

  listarTareas(): void {
    console.log('Lista de tareas:');
    this.tareas.forEach(t =>
      console.log(`[${t.prioridad}] ${t.titulo} - Estado: ${t.estado}`)
    );
  }
}

const gestor = new GestorTareas();

gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA);
gestor.agregarTarea('Lavar la ropa', Prioridad.MEDIA);
gestor.agregarTarea('Pagar servicios', Prioridad.BAJA);

gestor.listarTareas();
