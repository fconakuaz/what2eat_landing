import { useEffect, useState } from 'react';
import { getSession } from 'auth-astro/server';

const MenuAvatar = () => {
  const [session, setSession] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Obtener la sesión de usuario
    const fetchSession = async () => {
      const sessionData = await getSession();
  console.log('Session obtenida:', sessionData);
  setSession(sessionData);
    };

    fetchSession();
  }, []);

  const handleMouseOver = () => {
    console.log('🔵🔵🔵 isVisible antes 🔵🔵🔵', isVisible);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  if (!session) {
    return <div>Cargando sesión...</div>;
  }

  return (
    <div>
      <button onClick={handleMouseOver}>HOLAAA</button>
      <img
        id="avatarButton"
        className="w-10 h-10 rounded-full cursor-pointer"
        src={
          session?.user?.image
            ? session?.user?.image
            : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw0Vllb1XiOZpoagNvr5TIZD&ust=1737150242377000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICM8Yqb-4oDFQAAAAAdAAAAABAE'
        }
        alt="User dropdown"
        onClick={handleMouseOver}
        onMouseLeave={handleMouseLeave} // Añadido para ocultar el menú al salir con el ratón
      />

      {isVisible && (
        <div id="signOutContainer" className="absolute right-[22px] mt-1">
          <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{session?.user?.name}</div>
              <div className="font-medium truncate">{session?.user?.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mi menú del día
                </a>
              </li>
              <li>
                <a
                  href="/history"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Historial
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Estadísticas
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
            </ul>
            <div className="py-1">
              {/* <SignOut style={{ width: '100%', textAlign: 'left' }}>
                <span className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Cerrar sesión
                </span>
              </SignOut> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuAvatar;
