export interface IDataCompania {
    isExitoso: boolean;
    resultado: Compania[];
    mensaje:   string;
  }
  
  export interface Compania {
    id:             number;
    nombreCompania: string;
    dirreccion:      string;
    telefono:       string;
    telefono2:      string;
  }