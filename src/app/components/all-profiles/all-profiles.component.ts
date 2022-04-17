import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "src/app/models/Profile";

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {

  profiles: Profile[] = [];
  idOficina: string = ''

  constructor(private profilesService: ProfileService, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.idOficina = this.route.snapshot.params["id"]
    //this.getProfiles();
    this.getProfilesByOficinaId(this.idOficina);
  }

  getProfiles(){
    this.profilesService.getProfiles().subscribe((res) => {
      this.profilesService.profiles = res;
    });
  }

  getProfilesByOficinaId(oficinaId: string){
    this.profilesService.getProfilesByOficinaId(oficinaId).subscribe((res) => {
      this.profilesService.profiles = res;
    });
  }


  deleteProfiles(_id: string) {
    if (confirm("Are you sure you want to delete it?")) {
      this.profilesService.deleteProfiles(_id).subscribe((res) => {
        this.getProfilesByOficinaId(this.idOficina);
      });
    }
  }

}
