import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { AccordionModule } from 'ng2-bootstrap/accordion';

@Component({
  selector: 'app-jobs-accordion',
  templateUrl: './jobs-accordion.component.html',
  styleUrls: ['./jobs-accordion.component.css']
})
export class JobsAccordionComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  makeRequest(): void {
    this.loading = true;
    let params: URLSearchParams = new URLSearchParams();
    params.set('facility', '3471');
    let url = "https://hh1.herokuapp.com/jobs/";

    this.http.get(url, { search: params })
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
