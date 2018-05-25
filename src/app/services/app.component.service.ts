import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { UserData } from '../interfaces/userdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService extends HttpBaseService {

    constructor(private injector: Injector) {
        super(injector);
    }

    private getUserData(): Observable<UserData> {
        return super.customGet('../assets/userdata.json');
    }
}
