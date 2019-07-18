import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import axios from "axios";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
data = [];
dataSelected= {
  id: '',
  title:'',
  describtion: '',
  picture: ''
};
closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    axios.get('http://localhost:8000/api/articles')
      .then((result) => {
        console.log(result.data);
        this.data = result.data;
      })
      .catch(() => {
        console.log('no');
      })
  }

  handleChange(e, key) {
    if (key === 'title') {
      this.dataSelected.title = e.target.value;
    } else if (key === 'describtion') {
      this.dataSelected.describtion = e.target.value;
    } else if (key === 'picture') {
      this.dataSelected.picture = e.target.value;
    }
    console.log(e.target.value);
    console.log(this.dataSelected);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngSelected(article) {
    if (article === 0) {
      this.dataSelected.id = '';
      this.dataSelected.title = '';
      this.dataSelected.describtion = '';
      this.dataSelected.picture = '';
    } else {
      this.dataSelected.id = article.id_article;
      this.dataSelected.title = article.title;
      this.dataSelected.describtion = article.describtion;
      this.dataSelected.picture = article.picture;
    }
    console.log(this.dataSelected);
  }

  ngPost() {
    axios.post('http://localhost:8000/api/articles', {
      title: this.dataSelected.title,
      describtion: this.dataSelected.describtion,
      picture: this.dataSelected.picture,
      article_date: new Date(),
      autor: 1
    })
      .then(() => {
        console.log('Votre article a été ajouté');
      })
      .catch(() => {
        console.log("L'article n'a pas été ajouté");
      });
  }

  ngPut() {
    axios.put(`http://localhost:8000/api/articles/${this.dataSelected.id}`, {
      title: this.dataSelected.title,
      describtion: this.dataSelected.describtion,
      picture: this.dataSelected.picture,
      article_date: new Date(),
      autor: 1
    })
      .then(() => {
        console.log(`Votre article a été modifié`);
      })
      .catch(() => {
        console.log("L'article n'a pas été modifié");
      });
  }

  ngDelete() {
    axios.delete(`http://localhost:8000/api/articles/${this.dataSelected.id}`)
      .then(() => {
        console.log("L'article a été supprimé");
      })
      .catch(() => {
        console.log("L'actvité n'a pas été supprimé");
      });
  }

}
