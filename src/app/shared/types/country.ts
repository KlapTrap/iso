// Searching for dsa causes empty values
export interface BaseEntityData {
  id?: string;
  iso2code?: string;
  value?: string;
}

export interface BaseCountry {
  name: string;
  id: string;
  iso2Code: string;
  region: BaseEntityData;
  adminregion: BaseEntityData;
  incomeLevel: BaseEntityData;
  lendingType: BaseEntityData;
  capitalCity?: string;
}

export interface Country extends BaseCountry {
  longitude?: string;
  latitude?: string;
}

export interface CountryParsed extends BaseCountry {
  longitude: number | null;
  latitude: number | null;
}
