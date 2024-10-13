import css from './VehicleDetailsTable.module.css';

interface VehicleDetailsTableProps {
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
}

const VehicleDetailsTable = ({
  vehicleDetails
}: {
  vehicleDetails: VehicleDetailsTableProps;
}) => {
  const { form, length, width, height, tank, consumption } = vehicleDetails;
  return (
    <div className={css.vehicle_details__block}>
      <h3>Vehicle details</h3>

      <div className={css.divider} />

      <div className={css.vehicle_details__table}>
        <div className={css.vehicle_details_row}>
          <span>Form</span>
          <span>
            {form.charAt(0).toUpperCase() + form.slice(1).toLowerCase()}
          </span>
        </div>
        <div className={css.vehicle_details_row}>
          <span>Length</span>
          <span>{length}</span>
        </div>
        <div className={css.vehicle_details_row}>
          <span>Width</span>
          <span>{width}</span>
        </div>
        <div className={css.vehicle_details_row}>
          <span>Height</span>
          <span>{height}</span>
        </div>
        <div className={css.vehicle_details_row}>
          <span>Tank</span>
          <span>{tank}</span>
        </div>
        <div className={css.vehicle_details_row}>
          <span>Consumption</span>
          <span>{consumption}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsTable;
