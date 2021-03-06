/**
 * Created by Neeraj
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService } from './../../core/service/auth.service'
import { PromiseErrorHandler } from './../../core/error/error.handler'
import { IFeedModel } from './../../../backend/modules/feed/models/feed.model'

@Injectable()
export class FeedService {

    private headers;
    private requestOptions;

    constructor(private http: Http, private router: Router, private authService: AuthService) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json')
        this.headers = this.authService.getAuthHeaders(this.headers);
        this.requestOptions = new RequestOptions({ headers: this.headers });
    }

    postFeed(post: IFeedModel): Observable<IFeedModel> {
        return new Observable(observer => {
            this.http.post(`/api/feed/post`, post, this.headers)
                .subscribe((res: Response) => {
                    observer.next(res.json().result || null)
                }, (error) => {
                    PromiseErrorHandler.handleError(error);
                });
        });
    }

    addLike(postId: string, userId: string): Observable<IFeedModel> {
        return new Observable(observer => {
            this.http.post(`/api/feed/like`, {
                postId: postId,
                userId: userId
            }, this.headers)
                .subscribe((res: Response) => {
                    observer.next(res.json().result || null)
                }, (error) => {
                    PromiseErrorHandler.handleError(error);
                });
        });
    }

    getUserFeeds(userId: string, pageSize: number, pageNumber: number): Observable<IFeedModel[]> {
        return new Observable(observer => {
            this.http.get(`/api/feed/paginate?userId=${userId}&pageSize=${pageSize}&pageNumber=${pageNumber}`, this.headers)
                .subscribe((res: Response) => {
                    observer.next(res.json().result || [])
                }, (error) => {
                    PromiseErrorHandler.handleError(error);
                });
        });
    }

    getExternalFeeds(userId: string): Observable<IFeedModel> {
        return new Observable(observer => {
            this.http.get(`/api/feed/external?userId=${userId}`, this.headers)
                .subscribe((res: Response) => {
                    observer.next(res.json().result || [])
                }, (error) => {
                    PromiseErrorHandler.handleError(error);
                });
        });
    }
}