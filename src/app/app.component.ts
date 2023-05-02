import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent  implements OnInit {
  ngOnInit() {
    localStorage.setItem('auth_token', 'bWVnYXNhYWI9VEVTVF9QQVNTV09SRA==');
  }
}
