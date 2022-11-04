import * as CityAdapter from '../../adapters/city.adapter';
import { getCities, postCity } from '../city.services';
import { CityModel, ICityDetailView } from '../../models/city.models';
import citiesMock from '../../../../__mocks__/cities.mock';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

describe('City Services', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("'getCities' service", async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(citiesMock),
      }),
    );

    // call
    getCities()
      .then((response: Response) => response.json())
      .then((response: ICityDetailView[]) => {
        // expect
        expect(response).toBe(citiesMock);
      });
  });

  it("'postCity' service", async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
      }),
    );

    // call
    postCity(citiesMock[1]).then((response: Response) => {
      // expect
      expect(response.ok).toBeTruthy();
    });
  });
});
