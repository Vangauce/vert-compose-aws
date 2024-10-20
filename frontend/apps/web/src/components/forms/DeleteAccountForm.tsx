'use client'

import {
  DeleteAccountAction,
  DeleteAccountFormSchema
} from '@/actions/deleteAccountAction'
import { deleteAccountFormSchema } from '@/lib/validation'
import FormHeader from '@frontend/ui/forms/FormHeader'
import SubmitField from '@frontend/ui/forms/SubmitField'
import TextField from '@frontend/ui/forms/TextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type DeleteAccountProps = {
  onSubmitHandler: DeleteAccountAction
}

/**
 * Componente de formulario para eliminar una cuenta de usuario.
 *
 * @component
 * @param {DeleteAccountProps} props - Propiedades del componente.
 * @param {function} props.onSubmitHandler - Función que maneja el envío del formulario.
 *
 * @returns {JSX.Element} El formulario de eliminación de cuenta.
 *
 * @description
 * Este componente renderiza un formulario que permite a los usuarios eliminar su cuenta.
 * Utiliza `useForm` para manejar el estado del formulario y la validación con `zodResolver`.
 * Al enviar el formulario, se llama a `onSubmitHandler` con los datos del formulario.
 * Si la respuesta es exitosa, el formulario se reinicia y el usuario se cierra sesión.
 *
 * @example
 * <DeleteAccountForm onSubmitHandler={handleDeleteAccount} />
 */
const DeleteAccountForm: React.FC<DeleteAccountProps> = ({
  onSubmitHandler
}) => {
  const session = useSession()

  const { formState, handleSubmit, register, reset, setValue } =
    useForm<DeleteAccountFormSchema>({
      resolver: zodResolver(deleteAccountFormSchema)
    })

  useEffect(() => {
    if (session.data?.user.username) {
      setValue('usernameCurrent', session.data?.user.username)
    }
  }, [setValue, session.data?.user.username])

  return (
    <>
      <FormHeader
        title="Delete your account"
        description="After this action all data will be lost"
      />

      <form
        method="post"
        onSubmit={handleSubmit(async (data) => {
          const res = await onSubmitHandler(data)

          if (res) {
            reset()
            signOut()
          }
        })}
      >
        <TextField
          type="text"
          register={register('username')}
          label="Username"
          formState={formState}
        />

        <SubmitField>Delete account</SubmitField>
      </form>
    </>
  )
}

export default DeleteAccountForm
