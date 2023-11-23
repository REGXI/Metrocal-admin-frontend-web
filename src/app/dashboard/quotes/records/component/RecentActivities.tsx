import { Content } from '@/components/Content'
import { fetchData } from '@/utils/fetch'
import { formatDate } from '@/utils/formatDate'
import { getCookie } from 'cookies-next'

const getData = async (lastActivities: number) => {
  return await fetchData({
    url: `activities/get-last-activities/${lastActivities}`,
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    },
  })
}

export const RecentActivities = async () => {
  const response = await getData(5)

  return (
    <Content
      title="Actividades recientes"
      colorTitle="red"
      className="recent-activities"
    >
      <div className="recent-activities__container">
        <header className="recent-activities__header">
          <div className="recent-activities__header--title">
            <span>Fecha</span>
            <span>Empresa</span>
            <span>Precio</span>
            <span>Aprobado por</span>
          </div>
        </header>

        <div className="recent-activities__body">
          {response.data.map((item: any) => (
            <div key={item.id} className="item">
              <span>{formatDate(item.created_at)}</span>
              <span>{item.company_name}</span>
              <span className="price">{item.price} $</span>
              <span>{item.approved_by}</span>
            </div>
          ))}
        </div>
      </div>
    </Content>
  )
}
