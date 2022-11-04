import React, { useEffect, useState } from 'react';
import { BiDetail } from 'react-icons/bi';
import { ICityDetailProps } from '../types/city-detail.component.types';
import useFetchByGetMethod from '../../../hooks/use-fetch-by-get-method.hook';
import * as CityService from '../../../../core/services/city.services';
import * as CityAdapter from '../../../../core/adapters/city.adapter';
import { ICityDetailView } from '../../../../core/models/city.models';
import Error from '../../../components/error.component';
import Image from 'react-bootstrap/Image';
import FALLBACK_IMAGE from '../../../../assets/images/image-not-found.png';
import Modal from '../../../components/modal.component';

const CityDetail = (props: ICityDetailProps) => {
  // props
  const { cityId } = props;

  // states
  const [city, setCity] = useState<ICityDetailView | null>(null);

  // custom hooks
  const {
    fetchByGetMethod: fetchCity,
    error,
    setError,
  } = useFetchByGetMethod(
    () => CityService.getCityById(cityId),
    CityAdapter.adaptCityDetailDTOToCityDetailView,
    setCity,
  );

  // states
  const [show, setShow] = useState(false);

  // useEffects
  useEffect(() => {
    if (city) {
      setShow(true);
    }
  }, [city]);

  // handlers
  const handleHide = () => {
    setShow(false);
    setCity(null);
  };

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  // render
  return (
    <>
      <BiDetail size="1.2rem" onClick={fetchCity} />
      {city && (
        <Modal
          show={show}
          setShow={setShow}
          headerLabel={city.title}
          handleHide={handleHide}
        >
          <div className="city-detail">
            <Image
              className="city-detail__image"
              src={city.imageUrl}
              onError={handleImageError}
            />
            <p>{city.content}</p>
          </div>
        </Modal>
      )}
      <Error error={error} setError={setError} />
    </>
  );
};

export default CityDetail;
