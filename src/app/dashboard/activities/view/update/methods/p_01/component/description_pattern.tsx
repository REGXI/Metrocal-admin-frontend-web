import { useForm } from '@/hooks/useForm'
import { IDescriptionPattern } from '../../../../[id]/interface/p_01'
import { CInput } from '@/components/CInput'
import { AlertDialogModal } from '@/components/AlertDialogModal'
import { AutocompleteInput } from '@/components/AutocompleteInput'

export const DescriptionPattern = ({
  description_pattern,
  handleSaveInformation,
}: {
  handleSaveInformation: (
    values: IDescriptionPattern,
    url: string,
    useActivityID?: boolean,
  ) => void
  description_pattern: IDescriptionPattern
}) => {
  const { values, handleInputChange } = useForm({ ...description_pattern })
  const url = `methods/ni-mcit-p-01/description-pattern/`

  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, checked } = e.target

    handleInputChange({ name, value: checked })
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AutocompleteInput
          requiredLabel
          value={values.pattern}
          label="Patrón utilizado"
          name="pattern"
          onChange={handleInputChange}
          required
          placeholder="seleccione su patrón utilizado"
          list={[
            { id: 1, name: 'NI-MCPP-01' },
            { id: 2, name: 'NI-MCPP-02' },
            { id: 3, name: 'NI-MCPP-04' },
            { id: 4, name: 'NI-MCPP-05' },
            { id: 5, name: 'NI-MCPP-06' },
          ]}
          keyList="pattern"
        />
        <CInput
          label="Observaciones"
          name="observation"
          value={values.observation}
          onChange={handleCheckedChange}
        />

        <div className="my-4 w-fit">
          <label
            htmlFor="creditable"
            className="text-sm flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              name="creditable"
              id="creditable"
              checked={values.creditable}
              onChange={handleCheckedChange}
              className="mr-2 text-blue-500 form-checkbox focus:ring-blue-500 h-4 w-4"
            />
            ¿Equipo acreditado?
          </label>
        </div>
      </div>
      <div>
        <AlertDialogModal
          title="Guardar modificaciones"
          description="¿Estás seguro de guardar las modificaciones?"
          onConfirm={() => handleSaveInformation(values, url, true)}
          nameButton="Guardar modificaciones"
          buttonStyle={{
            margin: '1em 0',
          }}
        />
      </div>
    </div>
  )
}
