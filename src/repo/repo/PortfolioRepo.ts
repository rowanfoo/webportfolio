import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Portfolio} from "../model/Portfolio";
import {Config} from "../../share/Config";


@Injectable()
export class PortfolioRepo {
  constructor(private http: HttpClient) {
  }


  getPortfolio(): Observable<Portfolio[]> {
    let url = Config.portfoliourl
    console.log('---------AlgoRepo---getPortfolio----' + url)
    return this.http.get<Portfolio[]>(url)
  }


  getPortfolioAverage(): Observable<Portfolio[]> {
    let url = Config.portfoliourl + "/portfolio/average"
    console.log('---------AlgoRepo---getPortfolio----' + url)
    return this.http.get<Portfolio[]>(url)
  }
}
