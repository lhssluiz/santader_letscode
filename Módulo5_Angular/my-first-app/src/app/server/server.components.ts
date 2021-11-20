import { Component, OnInit } from "@angular/core";
import { reduce } from "rxjs";

@Component({
    selector: "app-server",
    templateUrl:'./server.component.html', //qual vai ser o arquivo template desse arquivo
    styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
/*     serverId:number = 10;
    serverStatus:string = 'Offline';

    getServerStatus(){
        const serverId = 5;
        return this.serverStatus;
    }
 */

    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    ngOnInit(): void {
    }
  
}