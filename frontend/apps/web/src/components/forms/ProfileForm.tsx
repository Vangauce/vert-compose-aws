'use client'

import { ProfileAction } from '@/actions/profileAction'
import { fieldApiError } from '@/lib/forms'
import { profileFormSchema } from '@/lib/validation'
import { UserCurrent } from '@frontend/types/api'
import FormHeader from '@frontend/ui/forms/FormHeader'
import SubmitField from '@frontend/ui/forms/SubmitField'
import TextField from '@frontend/ui/forms/TextField'
import SuccessMessage from '@frontend/ui/messages/SuccessMessage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type ProfileFormSchema = z.infer<typeof profileFormSchema>

type ProfileFormProps = {
  currentUser: Promise<UserCurrent>
  onSubmitHandler: ProfileAction
}

/**
 * Componente de formulario para actualizar la información del perfil del usuario.
 *
 * @component
 * @param {ProfileFormProps} props - Propiedades del componente.
 * @param {Promise<User>} props.currentUser - Promesa que resuelve con los datos del usuario actual.
 * @param {function} props.onSubmitHandler - Función que maneja el envío del formulario.
 *
 * @returns {JSX.Element} El formulario de perfil.
 *
 * @example
 * <ProfileForm
 *   currentUser={currentUserPromise}
 *   onSubmitHandler={handleProfileUpdate}
 * />
 *
 * @description
 * Este componente utiliza `react-hook-form` para manejar el estado del formulario y la validación.
 * Al enviar el formulario, se llama a `onSubmitHandler` con los datos del formulario.
 * Si la respuesta no es `true` o `boolean`, se muestran los errores correspondientes.
 * Si la actualización es exitosa, se muestra un mensaje de éxito.
 *
 * @remarks
 * - `useForm` se inicializa con un esquema de validación de Zod.
 * - Los campos del formulario incluyen "First name" y "Last name".
 * - El componente muestra un mensaje de éxito si la actualización del perfil es exitosa.
 */
const ProfileForm: React.FC<ProfileFormProps> = ({
  currentUser,
  onSubmitHandler
}) => {
  const [success, setSuccess] = useState<boolean>(false)

  const { formState, handleSubmit, register, setError } =
    useForm<ProfileFormSchema>({
      resolver: zodResolver(profileFormSchema),
      defaultValues: async () => {
        const user = await currentUser

        return {
          firstName: user.first_name || '',
          lastName: user.last_name || ''
        }
      }
    })

  return (
    <>
      <FormHeader
        title="Update you profile information"
        description="Change your account data"
      />

      <form
        method="post"
        onSubmit={handleSubmit(async (data) => {
          const res = await onSubmitHandler(data)

          if (res !== true && typeof res !== 'boolean') {
            setSuccess(false)

            fieldApiError('first_name', 'firstName', res, setError)
            fieldApiError('last_name', 'lastName', res, setError)
          } else {
            setSuccess(true)
          }
        })}
      >
        {success && (
          <SuccessMessage>Profile has been succesfully updated</SuccessMessage>
        )}

        <TextField
          type="text"
          register={register('firstName')}
          label="First name"
          formState={formState}
        />

        <TextField
          type="text"
          register={register('lastName')}
          label="Last name"
          formState={formState}
        />

        <SubmitField isLoading={formState.isLoading}>
          Update profile
        </SubmitField>
      </form>
    </>
  )
}

export default ProfileForm
