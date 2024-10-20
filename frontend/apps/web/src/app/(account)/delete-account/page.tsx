import { deleteAccountAction } from '@/actions/deleteAccountAction'
import DeleteAccountForm from '@/components/forms/DeleteAccountForm'
import { Metadata } from 'next'

// Metadatos de la página, utilizados por Next.js para definir el título de la página
export const metadata: Metadata = {
  title: 'Eliminar cuenta - AquaCircuit'
}

// Componente principal de la página de eliminación de cuenta
// Es una función asíncrona que retorna el formulario de eliminación de cuenta
const DeleteAccount = async () => {
  // Renderiza el componente DeleteAccountForm y le pasa la función deleteAccountAction como manejador del evento onSubmit
  return <DeleteAccountForm onSubmitHandler={deleteAccountAction} />
}

// Exporta el componente DeleteAccount como el componente predeterminado de este módulo
export default DeleteAccount
