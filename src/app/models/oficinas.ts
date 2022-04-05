export class Oficinas {
    constructor(_id = "",  title="",
    description="",
    is_available=Boolean("false"),
    road_name="",
    zip_code="",
    province="",
    city="",
    modality="",
    latitude="",
    longitude="",
    floor="",
    parking_public=Boolean("false"),
    parking_private=Boolean("false"),
    underground="",
    train="",
    bus="",
    comercial="",
    extPath="") {
    
        _id = _id;
        title=title;
        description=description;
        is_available=is_available;
        road_name=road_name;
        zip_code=zip_code;
        province=province;
        city=city;
        modality=modality;
        latitude=latitude;
        longitude=longitude;
        floor=floor;
        parking_public=parking_public;
        parking_private=parking_private;
        underground=underground;
        train=train;
        bus=bus;
        comercial=comercial;
        extPath=extPath;
      }
    
      _id: string;
      title: string;
      description: string;
      is_available: Boolean;
      road_name:  string;
      zip_code:  string;
      province:  string;
      city:  string;
      modality:  string;
      latitude: string;
      longitude: string;
      floor: string;
      parking_public: Boolean;
      parking_private: Boolean;
      underground: string;
      train:  string;
      bus: string;
      comercial: string;
      extPath: string;
    
    
      public toString() : string {
        return JSON.stringify(this)
    }
}
