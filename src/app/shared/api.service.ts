import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Api service contains methods lik Get, Post, Put, Delete
 */
export class ApiService {

  /** Options */
  options: any;

  /**
   * Constructor
   * @param httpClient Http client service to Performs HTTP requests
   */
  constructor(private httpClient: HttpClient) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.options = { headers: headers };
  }

  /**
   * Post data
   * @param url Url
   * @param data Data
   * @returns Observable
   */
  post(url: string, data: any): Observable<any> {
    return this.httpClient.post<any>(url, data, this.options);
  }

  /**
   * Get data
   * @param url Url
   * @param id Id
   * @returns Observable
   */
  get(url: string, id: any): Observable<any> {
    return this.httpClient.get<any>(url, id);
  }

  /**
   * Get all
   * @param url Url
   * @returns Observable
   */
  getAll(url: string): Observable<any> {
    return this.httpClient.get<any>(url);
  }

  /**
   * Put data
   * @param url Url
   * @param data Data
   * @returns Observable
   */
  put<T>(url: string, data: T): Observable<any> {
    return this.httpClient.put<any>(url, data);
  }

  /**
   * Delete data
   * @param url Url
   * @param id Id
   * @returns Observable
   */
  delete(url: string, id: any): Observable<any> {
    return this.httpClient.delete(url + '' + id, this.options);
  }
}