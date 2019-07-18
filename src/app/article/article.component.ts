import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: number;
  data = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    axios.get(`http://localhost:8000/api/articles/${this.id}`)
      .then((result) => {
        this.data = result.data[0];
      })
      .catch(() => {
        console.log('no');
      })
  }

}
