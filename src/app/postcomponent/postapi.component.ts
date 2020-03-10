import { Component, OnInit, Input } from '@angular/core';
import { PostApiService } from '../postapi.service';

@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostApiComponent {

  @Input() api2template;

  posts = [];
  
  constructor(private postapiservice: PostApiService) {
    this.postapiservice.getData().subscribe(data => {
      this.posts = data;
    });
}

}
