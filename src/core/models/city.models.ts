// ***************************
// ****** List / Detail ******
// ***************************

export interface ICityDetailView {
  id: number;
  title: string;
  content: string;
  latitude: string;
  longitude: string;
  imageUrl: string;
  createdAt: string;
  updateAt: string;
}

export interface ICityDetailDTO {
  id?: number;
  title?: string;
  content?: string;
  lat?: string;
  long?: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

// ***************************
// **** Create / Update ******
// ***************************

export interface ICityFormView {
  id?: number;
  title: string;
  content: string;
  latitude: string;
  longitude: string;
  imageUrl: string;
}

export interface ICityFormDTO {
  id?: number;
  title: string;
  content: string;
  lat: string;
  long: string;
  image_url: string;
}

// ***************************
// ********** Model **********
// ***************************

export class CityModel implements ICityFormView {
  id?: number;
  title: string;
  content: string;
  latitude: string;
  longitude: string;
  imageUrl: string;

  constructor() {
    this.id = null;
    this.title = '';
    this.content = '';
    this.latitude = '';
    this.longitude = '';
    this.imageUrl = '';
  }
}
