import css from './Filters.module.css';
import icons from '../../img/icons.svg';
import Button from '../Button/Button';
import { useState } from 'react';
import { fetchCampers, clearCampers } from '../../redux/campers/operations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { FetchCampersParams } from '../../types/fetchCampersParams';

const vehicleEquipment = [
  {
    name: 'ac',
    title: 'AC',
  },
  {
    name: 'automatic',
    title: 'Automatic',
  },
  {
    name: 'kitchen',
    title: 'Kitchen',
  },
  {
    name: 'tv',
    title: 'TV',
  },
  {
    name: 'bathroom',
    title: 'Bathroom',
  },
  {
    name: 'petrol',
    title: 'Petrol',
  },
  {
    name: 'radio',
    title: 'Radio',
  },
  {
    name: 'refrigerator',
    title: 'Refrigerator',
  },
  {
    name: 'microwave',
    title: 'Microwave',
  },
];

const vehicleTypes = [
  {
    name: 'van',
    title: 'Van',
  },
  {
    name: 'fullyIntegrated',
    title: 'Fully Integrated',
  },
  {
    name: 'alcove',
    title: 'Alcove',
  },
  {
    name: 'paneltruck',
    title: 'Panel truck',
  },
];

const initialActiveFeatures = {
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  refrigerator: false,
  microwave: false,
  radio: false,
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
    setActiveFeatures((prevFeatures) => ({
      ...prevFeatures,
      [feature]: !prevFeatures[feature],
    }));
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
      let params: FetchCampersParams = {
        page: 1,
        limit: 4,
        location: locationValue,
        form: activeVehicleType,
        transmission: transmissionType || undefined,
        ...activeFeatures,
      };

      params = Object.fromEntries(
        Object.entries(params).filter(
          ([key, value]) =>
            value !== false && value !== undefined && value !== ''
        )
      );

      dispatch(clearCampers());
      dispatch(fetchCampers(params));

      setLocationValue('');
      setActiveFeatures(initialActiveFeatures);
      setTransmissionType(null);
      setActiveVehicleType('');
    }
  };

  console.log({
    locationValue,
    activeVehicleType,
    activeFeatures,
    transmissionType,
  });

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
                      <use href={`${icons}#${name}`} />
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

// const handlePushNewFeature = (feature: string) => {
//   if (activeFeatures.includes(feature)) {
//     setActiveFeatures(activeFeatures.filter((item) => item !== feature));
//   } else {
//     setActiveFeatures([...activeFeatures, feature]);
//   }
// };

// const handleFiltersFetch = () => {
//   console.log('Click!');

//   if (
//     locationValue.length !== 0 ||
//     activeFeatures.length !== 0 ||
//     activeVehicleType.length !== 0
//   ) {
//     console.log('first');

//     const params = {
//       // page: 1,
//       // limit: 4,
//       location: locationValue,
//       form: activeVehicleType,
//       // ...{ features },
//     };
//     dispatch(clearCampers());
//     dispatch(fetchCampers(params));
//     setLocationValue('');
//     setActiveFeatures([]);
//     setActiveVehicleType('');
//   }
// };
