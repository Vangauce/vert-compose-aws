import PagesOverview from '@/components/PagesOverview';
import UserSession from '@/components/UserSession';
import TestNavbar from '../components/Navbar/TestNavbar';
import Footer from '../components/Footer/Footer';
import Page from '../components/AquaCircuit/Page';



/**
 * Componente principal de la página de inicio.
 * 
 * Este componente devuelve una estructura JSX que incluye:
 * - Un título principal con estilo.
 * - Un párrafo descriptivo sobre el kit de inicio AquaCircuit para proyectos Django y Next.js.
 * - Un enlace a la sección de Issues del repositorio de GitHub para proporcionar retroalimentación.
 * - El componente `UserSession` para manejar la sesión del usuario.
 * - Una línea horizontal para separar secciones.
 * - El componente `PagesOverview` para mostrar una visión general de las páginas.
 * 
 * @returns {JSX.Element} Estructura JSX de la página de inicio.
 */
const Home = () => {
  return (
    <div>
      <TestNavbar />
      <Page />
      <div className="container mx-auto">
        <div className="pt-16"> {/* Añade un padding-top para evitar que el contenido se superponga con el Navbar */}
          <h1 className="text-4xl font-bold text-center mt-8">
            AquaCircuit
          </h1>

          <p className="mb-12 mt-2 max-w-4xl text-base leading-relaxed text-gray-600">
            AquaCircuit is minimal and opiniated starter kit for Django & Next.js projects
            connected via REST API. For the documentation please visit GitHub
            repository and in case of some feedback, dont hesitate to raise a ticket
            in{' '}
            <a
              href="https://github.com/unfoldadmin/turbo/issues"
              className="underline text-purple-600"
            >
              Issues section
            </a>
            .
          </p>

          <UserSession />

          <hr className="my-8" />

          <PagesOverview />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;