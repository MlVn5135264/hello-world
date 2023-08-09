import { Component } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    templateUrl:'./hello-world.component.html',
    styleUrls:['./hello-world.component.css']
})

export class helloWorldComponent{
    name = 'Wecome to the Angular World Mohan'
    getValue()
    {
        return this.name
    }
}