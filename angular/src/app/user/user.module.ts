import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import {
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [UserService],
})
export class UserModule {}