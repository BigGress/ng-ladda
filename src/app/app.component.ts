import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  test(obj: any) {
    console.log("哈啊哈");
    console.log(obj);

    obj.promise = new Promise((res, rej) => {
      setTimeout(() => {
        res("test")
      }, 1000)
    })
  }
}
