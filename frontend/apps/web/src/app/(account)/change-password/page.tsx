import { changePasswordAction } from '@/actions/changePasswordAction'
import ChangePaswordForm from '@/components/forms/ChangePasswordForm'
import { Metadata } from 'next'

// Metadatos de la página, incluyendo el título que aparecerá en la pestaña del navegador
export const metadata: Metadata = {
  title: 'Change password - AquaCircuit'
}

// Componente principal de la página de cambio de contraseña
const ChangePassword = async () => {
  // Renderiza el formulario de cambio de contraseña y pasa la función de manejo de envío como prop
  return <ChangePaswordForm onSubmitHandler={changePasswordAction} />
}

// Exporta el componente por defecto para que pueda ser utilizado en otras partes de la aplicación
export default ChangePassword
