import { Component,ElementRef, ViewChild } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  LOGIN_URL=''; // Yahoo!のAuthorizationエンドポイントを定義します。
  API_URL=''; // チャットのメッセージを読み書きするAPIのURLを定義します。

  name = ''
  message = ''
  messages = ''
  constructor(private http: Http) { }

  ngOnInit() {
    let accessToken = localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization','Bearer ' + accessToken);
    headers.append('Ocp-Apim-Subscription-Key','5e841c00502348ab83019291208e4ae0');

    this.http.get(API_URL + '/getMessageList',{ headers:headers }).subscribe (
      response => {
        this.messages = response.json();
      },
      error => {
        console.log(error.status);
        if (error.status === 401) {
           location.href=this.LOGIN_URL
        }
      }
    )
  }

  addMessage() {
    var date = new Date() ;
    var unixTime = date.getTime() ;
    let json = {
      name: this.name,
      message: this.message,
      pubDate: unixTime
    }

    let accessToken = localStorage.getItem('access_token');
    let headers = new Headers();
    headers.append('Authorization','Bearer ' + accessToken);
    headers.append('Ocp-Apim-Subscription-Key','5e841c00502348ab83019291208e4ae0');

    this.http.post(API_URL + '/addMessage',json,{ headers:headers }).subscribe (
      response => {
        this.ngOnInit();
        this.message = ''
        response => {}
      },
      error => {
      }
    )
  }


  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

}
