import { registerAction } from '@/actions/registerAction'
import RegisterForm from '@/components/forms/RegisterForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register - AquaCircuit'
}

/**
 * Componente de registro.
 * 
 * Este componente renderiza un formulario de registro y maneja la acción de registro
 * cuando el formulario es enviado.
 * 
 * @returns {JSX.Element} El componente de formulario de registro.
 */
const Register = () => {
  return <RegisterForm onSubmitHandler={registerAction} />
}

export default Register
