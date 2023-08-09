import { Component } from "@angular/core";

@Component({
    selector: 'app-hello-world',
    templateUrl:'./hello-world.component.html',
    styleUrls:['./hello-world.component.css']
})

export class helloWorldComponent{
    name = 'Wecome to the Angular World Mohan'
    color = 'red'
    getValue()
    {
        return this.name
    }

    getMax(first: number, second: number){
        return Math.max(first, second)
    }
}