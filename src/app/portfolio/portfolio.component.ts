import {Component, OnInit} from '@angular/core';
import {PortfolioRepo} from "../../repo/repo/PortfolioRepo";
import {Portfolio} from "../../repo/model/Portfolio";
import {Subject} from "rxjs";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  //dtOptions: any = {};
  dtOptions: DataTables.Settings = {};
  total = 0


  constructor(private portfolioRepo: PortfolioRepo) {
  }

  public portfolio: Portfolio[] = []

  ngOnInit(): void {
    console.log("-----grabber-----")

    this.portfolioRepo.getPortfolioAverage().subscribe(value => {
      value.forEach(cat => {
        this.portfolio.push(cat)
        this.total = this.total + (cat.quantity * cat.price)
      })

    })

    //this.portfolio

    console.log(this.portfolio)
    this.dtOptions = {
      pageLength: 30,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[4, 'desc']],
      dom: 'Bfrtip',
      // buttons: [
      //   'columnsToggle',
      //   'colvis',
      // ]

    }


  }
}
