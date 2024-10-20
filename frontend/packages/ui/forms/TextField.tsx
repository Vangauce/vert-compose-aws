'use client'

import React from 'react'
import { UseFormRegisterReturn, FormState } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type TextFieldProps = {
  type: 'text' | 'password' | 'number'
  label: string
  placeholder?: string
  register: UseFormRegisterReturn
  formState: FormState<any>
}

/**
 * TextField Component
 *
 * Este componente renderiza un campo de texto con un label y maneja la validación de errores.
 * Es utilizado en formularios para capturar entradas de texto del usuario.
 *
 * @component
 * @param {Object} props - Propiedades que recibe el componente.
 * @param {string} props.type - El tipo de input (e.g., "text", "password").
 * @param {string} props.label - El texto del label asociado al input.
 * @param {string} props.placeholder - El texto placeholder que se muestra en el input.
 * @param {Object} props.register - El objeto de registro de react-hook-form para conectar el input con el formulario.
 * @param {Object} props.formState - El estado del formulario de react-hook-form, utilizado para mostrar errores de validación.
 *
 * @example
 * // Ejemplo de uso en un formulario
 * import { useForm } from 'react-hook-form';
 * 
 * const MyForm = () => {
 *   const { register, handleSubmit, formState } = useForm();
 * 
 *   const onSubmit = (data) => {
 *     console.log(data);
 *   };
 * 
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <TextField
 *         type="text"
 *         label="Nombre"
 *         placeholder="Ingresa tu nombre"
 *         register={register('nombre', { required: 'Este campo es obligatorio' })}
 *         formState={formState}
 *       />
 *       <button type="submit">Enviar</button>
 *     </form>
 *   );
 * };
 */
const TextField: React.FC<TextFieldProps> = ({
  type,
  label,
  placeholder,
  register,
  formState
}) => {
  const hasError = formState.errors[register.name]

  return (
    <label className="mb-6 flex flex-col last:mb-0">
      <span className="mb-3 block font-medium leading-none">{label}</span>

      <input
        type={type}
        placeholder={placeholder}
        className={twMerge(
          'block h-10 max-w-lg rounded bg-white px-4 font-medium shadow-sm outline outline-1 outline-gray-900/10 focus:outline-purple-600 focus:ring-4 focus:ring-purple-300',
          hasError && 'outline-red-700 focus:outline-red-600 focus:ring-red-300'
        )}
        {...register}
      />

      {hasError && (
        <div className="mt-2 text-red-600">
          {formState.errors[register.name]?.message?.toString()}
        </div>
      )}
    </label>
  )
}

export default TextField
