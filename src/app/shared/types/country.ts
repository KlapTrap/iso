export interface BaseEntityData {
  id: string;
  iso2Code: string;
  value: string;
}

export interface Country {
  name: string;
  id: string;
  iso2Code: string;
  region: BaseEntityData;
  adminregion: BaseEntityData;
  incomeLevel: BaseEntityData;
  lendingType: BaseEntityData;
  capitalCity: string;
  longitude: string;
  latitude: string;
}
