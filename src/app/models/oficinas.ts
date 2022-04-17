import { BoundElementPropertyAst } from "@angular/compiler";

export class Oficinas {
    constructor(id = "",  title="",
    description="",
    is_destacada=Boolean("false"),
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
    extPath="",
    attachment="") {
    
        this.id = id;
        this.title=title;
        this.description=description;
        this.is_destacada=is_destacada;
        this.road_name=road_name;
        this.zip_code=zip_code;
        this.province=province;
        this.city=city;
        this.modality=modality;
        this.latitude=latitude;
        this.longitude=longitude;
        this.floor=floor;
        this.parking_public=parking_public;
        this.parking_private=parking_private;
        this.underground=underground;
        this.train=train;
        this.bus=bus;
        this.comercial=comercial;
        this.extPath=extPath;
        this.attachment=attachment
        
      }
    
      id: string;
      title: string;
      description: string;
      is_destacada: Boolean;
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
      attachment: string;
    
    
      public toString() : string {
        return JSON.stringify(this)
    }
}
