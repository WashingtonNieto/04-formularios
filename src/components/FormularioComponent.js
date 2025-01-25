import React from 'react'

export const FormularioComponent = () => {

  const conseguirDatosFormulario = e => {

    e.preventDefault();

    let datos = e.target;

    console.log(datos);

  }

  return (
    <div>
      <h1>Formularios con React</h1>

      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <select>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea placeholder='Biografia'></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
