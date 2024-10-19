import css from './Filters.module.css';
import icons from '../../img/icons.svg';
import Button from '../Button/Button';
import { useState } from 'react';
import { fetchCampers, clearCampers } from '../../redux/campers/operations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { FiltersTypeParams } from '../../types/filtersTypeParams';
import { vehicleEquipment, vehicleTypes } from '../../utils/filters';
import {
  setForm,
  setLocation,
  setTransmission,
  toggleFeature,
} from '../../redux/filters/slice';

const initialActiveFeatures: Omit<
  FiltersTypeParams,
  'page' | 'limit' | 'transmission' | 'location' | 'form'
> = {
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  refrigerator: false,
  microwave: false,
  radio: false,
};

const filterActiveFeatures = (features: typeof initialActiveFeatures) => {
  return Object.fromEntries(
    Object.entries(features).filter(([_, value]) => value === true)
  );
};

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [locationValue, setLocationValue] = useState('');
  const [activeFeatures, setActiveFeatures] = useState(initialActiveFeatures);
  const [transmissionType, setTransmissionType] = useState<string | null>(null);
  const [activeVehicleType, setActiveVehicleType] = useState('');

  const handleChangeLocationValue = (inputValue: string) => {
    setLocationValue(inputValue);
  };

  const handleChangeActiveVehicleType = (vehicleType: string) => {
    const newActiveVehicleType =
      vehicleType === activeVehicleType ? '' : vehicleType;
    setActiveVehicleType(newActiveVehicleType);
  };

  const handlePushNewFeature = (feature: keyof typeof activeFeatures) => {
    const updateFeatures = {
      ...activeFeatures,
      [feature]: !activeFeatures[feature],
    };

    setActiveFeatures(updateFeatures);
  };

  const handleTransmission = (name: string) => {
    if (transmissionType === name) {
      setTransmissionType(null);
    } else {
      setTransmissionType(name);
    }
  };

  const handleFiltersFetch = () => {
    if (
      locationValue ||
      activeVehicleType ||
      Object.values(activeFeatures).some(Boolean)
    ) {
      const filteredFeatures = filterActiveFeatures(activeFeatures);

      const params: FiltersTypeParams = {
        page: 1,
        limit: 4,
        location: locationValue,
        form: activeVehicleType,
        transmission: transmissionType || undefined,
        ...filteredFeatures,
      };

      dispatch(clearCampers());
      dispatch(fetchCampers(params));
      dispatch(setLocation(locationValue));
      dispatch(setForm(activeVehicleType));
      dispatch(setTransmission(transmissionType));
      dispatch(toggleFeature(filteredFeatures));
    }
  };

  return (
    <aside className={css.filters_wrap}>
      <div className={css.location_block}>
        <span className={css.location_title}>Location</span>

        <div className={css.map_block}>
          <svg className={css.map}>
            <use href={`${icons}#map`} />
          </svg>
          <input
            type="string"
            className={css.map_location}
            placeholder="City"
            value={locationValue}
            onChange={(event) => handleChangeLocationValue(event.target.value)}
          />
        </div>
      </div>

      <div className={css.filters_form__block}>
        <span className={css.filters_title}>Filters</span>

        <div className={css.filter_group}>
          <h3 className={css.filter_group__title}>Vehicle equipment</h3>

          <div className={css.divider} />

          <ul className={css.filter_group__list}>
            {vehicleEquipment.map(
              ({ name, title }: { name: string; title: string }) => {
                const isActiveFeature =
                  activeFeatures[name as keyof typeof activeFeatures];
                const isAutomatic =
                  name === 'automatic' && transmissionType !== null;
                const isActive =
                  name === 'automatic' ? isAutomatic : isActiveFeature;
                return (
                  <li
                    key={name}
                    className={`${css.filter_group__item} ${
                      isActive ? css.filter_group__item_active : ''
                    }`}
                    onClick={() => {
                      if (name === 'automatic') {
                        handleTransmission('automatic');
                      } else {
                        handlePushNewFeature(
                          name as keyof typeof activeFeatures
                        );
                      }
                    }}
                  >
                    <svg className={css.filter_group__img}>
                      <use href={`${icons}#${name.toLocaleLowerCase()}`} />
                    </svg>
                    <span className={css.filter_group__text}>{title}</span>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div className={css.filter_group}>
          <h3 className={css.filter_group__title}>Vehicle type</h3>

          <div className={css.divider} />

          <ul className={css.filter_group__list}>
            {vehicleTypes.map(
              ({ name, title }: { name: string; title: string }) => {
                const isActive = name === activeVehicleType;
                return (
                  <li
                    key={name}
                    className={`${css.filter_group__item} ${
                      isActive ? css.filter_group__item_active : ''
                    }`}
                    onClick={() => handleChangeActiveVehicleType(name)}
                  >
                    <svg
                      className={css.filter_group__img}
                      width="32px"
                      hanging="32px"
                    >
                      <use href={`${icons}#${name}`} />
                    </svg>
                    <span className={css.filter_group__text}>{title}</span>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>

      <Button onClick={handleFiltersFetch}>Search</Button>
    </aside>
  );
};

export default Filters;
