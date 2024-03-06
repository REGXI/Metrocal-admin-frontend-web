import './index.scss'
import { IPendingActivities } from '../../interface/pendingActivities'
import metrocalLogo from 'public/metrocal.svg'
import Image from 'next/image'

export const ItemPendingCertify = ({
  activity,
}: {
  activity: IPendingActivities
}) => {
  return (
    <div
      key={activity.id}
      className="pending-certificate__table__content__item"
    >
      <div className="responsable">
        <Image
          src={
            activity.team_members.find(
              (member) => member.id === activity.responsable,
            )?.imageURL || metrocalLogo
          }
          alt="User"
          width={40}
          height={40}
        />
      </div>
      <div className="client">
        <p>{activity.quoteRequest.client.company_name}</p>

        <div className="client__details">
          <span>
            {activity.quoteRequest.equipment_quote_request.reduce(
              (acc, item) => acc + item.count,
              0,
            )}{' '}
            equipos a certificar
          </span>
        </div>
      </div>
    </div>
  )
}
