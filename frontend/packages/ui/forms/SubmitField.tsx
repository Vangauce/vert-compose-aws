'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

type SubmitFieldProps = {
  isLoading?: boolean
}

/**
 * SubmitField Component
 *
 * Este componente representa un botón de envío que se utiliza en formularios.
 * Cambia su apariencia y comportamiento basado en el estado de carga.
 *
 * @component
 * @param {Object} props - Propiedades que recibe el componente.
 * @param {React.ReactNode} props.children - Contenido del botón.
 * @param {boolean} props.isLoading - Indica si el botón está en estado de carga.
 *
 * @example
 * ```tsx
 * <form onSubmit={handleSubmit}>
 *   <SubmitField isLoading={isSubmitting}>
 *     Enviar
 *   </SubmitField>
 * </form>
 * ```
 *
 * @description
 * El componente `SubmitField` se utiliza dentro de formularios para representar un botón de envío.
 * Recibe una propiedad `isLoading` que, cuando es `true`, deshabilita el botón y cambia su estilo
 * para indicar que una acción está en progreso.
 */
const SubmitField: React.FC<React.PropsWithChildren<SubmitFieldProps>> = ({
  children,
  isLoading
}) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={twMerge(
        'block h-10 w-full rounded bg-purple-600 font-medium text-white',
        isLoading && 'bg-purple-400'
      )}
    >
      {children}
    </button>
  )
}

export default SubmitField
