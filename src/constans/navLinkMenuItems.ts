import activitiesIcon from '../assets/icons/activities.svg'
import certificatesIcon from '../assets/icons/certificates.svg'
import dashboardIcon from '../assets/icons/dashboard.svg'
import quotesIcon from '../assets/icons/quotes.svg'
import reportsIcon from '../assets/icons/reports.svg'
import settingsIcon from '../assets/icons/settings.svg'
import usersIcon from '../assets/icons/users.svg'

export const NAVLINK_MENU_LIST = [
  {
    name: 'Panel de control',
    href: '/dashboard',
    segment: 'dashboard',
    category: 'organización',
    icon: dashboardIcon,
  },
  {
    name: 'Cotizaciones ',
    href: '',
    segment: 'quotes',
    category: 'organización',
    icon: quotesIcon,
    collection: [
      {
        name: 'Solicitudes',
        href: '/dashboard/quotes/requests',
      },
      {
        name: 'Registros',
        href: '/dashboard/quotes/records',
      },
    ],
  },
  {
    name: 'certificados',
    href: '/dashboard/certificates',
    segment: 'certificates',
    category: 'organización',
    icon: certificatesIcon,
  },
  {
    name: 'Usuarios',
    href: '/dashboard/users',
    segment: 'users',
    category: 'organización',
    icon: usersIcon,
  },
  {
    name: 'Actividades',
    href: '/dashboard/activities',
    segment: 'activities',
    category: 'organización',
    icon: activitiesIcon,
  },
  {
    name: 'Reportes',
    href: '/dashboard/reports',
    segment: 'reports',
    category: 'descripción general',
    icon: reportsIcon,
  },
  {
    name: 'Configuración',
    href: '/dashboard/settings',
    segment: 'settings',
    category: 'descripción general',
    icon: settingsIcon,
  },
]
