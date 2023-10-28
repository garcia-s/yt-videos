type Objeto = {
  nombre: string;
};
interface IBaseDatos {
  traer(): Objeto;
  guardar(obj: Objeto): void;
}

class BaseDeDatos implements IBaseDatos {
  public traer(): Objeto {
    //trae algo de la base de datos
    return { nombre: "claro" };
  }

  guardar(obj: Objeto): void {
    // Guarda algo en la base de datos
    console.log("Guardando", obj);
  }
}

class OtraBaseDeDatos implements IBaseDatos {
  public traer(): Objeto {
    //trae algo de la base de datos
    return { nombre: "oscuro" };
  }

  guardar(obj: Objeto): void {
    // Guarda algo en la base de datos
    console.log("Guardando otra cosa", obj);
  }
}

function actualizarObjeto(db: IBaseDatos) {
  const objeto = db.traer();
  objeto.nombre == "OtroNombre";
  db.guardar(objeto);
}

actualizarObjeto(new BaseDeDatos());
actualizarObjeto(new OtraBaseDeDatos());
