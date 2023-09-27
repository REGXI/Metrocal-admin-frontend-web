import './layout.scss'
import { Montserrat } from 'next/font/google'
import { NAVLINK_MENU_LIST } from '@/constans/navLinkMenuItems'
import NavLink from './NavLink'
import Image from 'next/image'
import metrocalLogo from 'public/metrocal.svg'
import vectorIcon from '@/assets/icons/vector.svg'
import notificationIcon from '@/assets/icons/notification.svg'
import profileImg from '@/assets/images/profile.jpg'
import { CButton } from '@/components/CButton'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="dashboard-container">
          <section className="sidebar">
            <div className="logo">
              <Image src={metrocalLogo} alt="Metrocal" />
            </div>
            <nav>
              {
                <RenderNavLinkByCategory
                  category="organización"
                  list={NAVLINK_MENU_LIST}
                />
              }
              {
                <RenderNavLinkByCategory
                  category="descripción general"
                  list={NAVLINK_MENU_LIST}
                />
              }
            </nav>
          </section>
          <div className="content">
            <header className="header">
              <div className="hello">
                <h4>
                  Bienvenido <span>Francisco G</span>
                </h4>
              </div>

              <div className="user">
                <div className="quote">
                  <CButton>
                    <span>+</span> SOLICITAR COTIZACIÓN
                  </CButton>
                </div>
                <div className="notification" data-badge="+9">
                  <Image src={notificationIcon} alt="Notification" />
                </div>
                <div className="profile">
                  <Link href="/profile">
                    <Image src={profileImg} alt="Profile" />
                  </Link>
                </div>
              </div>
            </header>
            <section className="content-container">{children}</section>
          </div>
        </main>
      </body>
    </html>
  )
}

const RenderNavLinkByCategory = ({
  category,
  list,
}: {
  category: string
  list: any
}) => {
  return (
    <div className="nav-links">
      <h4>{category}</h4>

      <ul className="nav-links-list">
        {list.map(
          (navLink: any) =>
            navLink.category === category && (
              <li
                key={navLink.href}
                className={navLink.collection && 'collection'}
                data-collection-height={
                  navLink.collection && navLink.collection.length
                }
              >
                <NavLink href={navLink.href} segment={navLink.segment}>
                  <Image src={navLink.icon} alt={navLink.name} />
                  {navLink.name}

                  {navLink.collection && (
                    <Image
                      src={vectorIcon}
                      alt="Vector"
                      className="vector-icon"
                    />
                  )}
                </NavLink>
                {navLink.collection && (
                  <ul className="nav-links-list-collection">
                    {navLink.collection.map((navLink: any) => (
                      <li key={navLink.href}>
                        <NavLink href={navLink.href}>{navLink.name}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ),
        )}
      </ul>
    </div>
  )
}