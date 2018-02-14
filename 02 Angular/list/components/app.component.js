class AppComponent {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ];
    }

    onContactRemove($event) {
        this.contacts.splice($event.index, 1);
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "components/app.component.html",
});

