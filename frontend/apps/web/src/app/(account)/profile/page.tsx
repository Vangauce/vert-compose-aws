import { profileAction } from '@/actions/profileAction'
import ProfileForm from '@/components/forms/ProfileForm'
import { getApiClient } from '@/lib/api'
import { authOptions } from '@/lib/auth'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'

export const metadata: Metadata = {
  title: 'Profile - AquaCircuit'
}

/**
 * Componente de perfil que obtiene la sesión del servidor y el cliente de la API,
 * y luego renderiza el formulario de perfil con los datos del usuario actual.
 *
 * @returns {JSX.Element} El formulario de perfil con los datos del usuario actual.
 */
const Profile = async () => {
  const session = await getServerSession(authOptions)
  const apiClient = await getApiClient(session)

  return (
    <ProfileForm
      currentUser={apiClient.users.usersMeRetrieve()}
      onSubmitHandler={profileAction}
    />
  )
}

export default Profile
