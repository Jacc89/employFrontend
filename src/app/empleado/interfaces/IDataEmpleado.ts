
export interface IDataEmpleado {
    totalRegistros: number;
    totalPaginas: number;
    pageZise: number;
    statusCode: number;
    isExitoso: boolean;
    resultado: Empleado[];
    mensaje:   string;
  }
  
  export interface Empleado {
    Apellidos:            string;
    Nombres: string;
    Cargo:       string;
    Compañia:      string;
  }