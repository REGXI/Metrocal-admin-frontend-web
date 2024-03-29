import { ReportMethodActivity } from '@/components/ReportMethodActivity'
import { IEnvironmentalConditions, Cycle } from '../../interface/p_01'

interface EnvironmentalConditionsProps {
  environmental_conditions: IEnvironmentalConditions
  id: number
  method_name: string
  report_status: boolean
  report_messages: string[]
}

export const EnvironmentalConditions = ({
  environmental_conditions,
  id,
  method_name,
  report_status,
  report_messages,
}: EnvironmentalConditionsProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="environmental-conditions grid grid-row-1 p-4 gap-2">
        {environmental_conditions?.cycles?.map((cycle) => {
          return <RoWCycle key={cycle.cycle_number} cycle={cycle} />
        })}

        <div>
          <div></div>
          <div className="grid grid-cols-4 border text-center p-2 font-semibold">
            <div>
              <span>Equipos utilizados</span>
            </div>
            <div className="flex flex-col col-span-2 border">
              <span>{environmental_conditions?.cycles[0]?.ta.equipement} </span>
            </div>
            <div className="flex flex-col border">
              <span>
                {environmental_conditions?.cycles[0]?.hPa.equipement}{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ReportMethodActivity
        method_name={method_name}
        zone={'Condiciones ambientales'}
        method_id={id}
        report_messages={report_messages}
        report_status={report_status}
      />
    </div>
  )
}

const RoWCycle = ({ cycle }: { cycle: Cycle }) => {
  return (
    <div className="">
      <div className="grid grid-cols-4 border text-center ">
        <div className="flex flex-col">
          <span className="font-semibold">Ciclo {cycle.cycle_number}</span>
          <span>Iniciales</span>
          <span>Finales</span>
        </div>
        <div className="flex flex-col font-semibold">
          <span>T. A. (ºC):</span>
          <span>{cycle.ta.tac.initial}</span>
          <span>{cycle.ta.tac.final}</span>
        </div>
        <div className="flex flex-col font-semibold">
          <span>H R (%):</span>
          <span>{cycle.ta.hrp.initial}</span>
          <span>{cycle.ta.hrp.final}</span>
        </div>

        <div className="flex flex-col font-semibold">
          <span>P. A.(hPa):</span>
          <span>{cycle.hPa.pa.initial}</span>
          <span>{cycle.hPa.pa.final}</span>
        </div>
      </div>
    </div>
  )
}

/*
"environmental_conditions": {
                "id": 27,
                "cycles": [
                    {
                        "ta": {
                            "hrp": {
                                "final": 13,
                                "initial": 12
                            },
                            "tac": {
                                "final": 11,
                                "initial": 10
                            },
                            "equipement": "NI-MCPPT-01"
                        },
                        "hPa": {
                            "pa": {
                                "final": 11,
                                "initial": 10
                            },
                            "equipement": "NI-MCPPT-06"
                        },
                        "cycle_number": 1
                    },
                    {
                        "ta": {
                            "hrp": {
                                "final": 16,
                                "initial": 13
                            },
                            "tac": {
                                "final": 15,
                                "initial": 11
                            },
                            "equipement": "NI-MCPPT-01"
                        },
                        "hPa": {
                            "pa": {
                                "final": 12,
                                "initial": 10
                            },
                            "equipement": "NI-MCPPT-06"
                        },
                        "cycle_number": 2
                    },
                    {
                        "ta": {
                            "hrp": {
                                "final": 9,
                                "initial": 10
                            },
                            "tac": {
                                "final": 59,
                                "initial": 11
                            },
                            "equipement": "NI-MCPPT-01"
                        },
                        "hPa": {
                            "pa": {
                                "final": 12,
                                "initial": 40
                            },
                            "equipement": "NI-MCPPT-06"
                        },
                        "cycle_number": 3
                    }
                ]
            },
 */
