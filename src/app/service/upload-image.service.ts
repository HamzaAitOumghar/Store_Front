import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';

@Injectable()
export class UploadImageService {

  filesToUpload: Array<File>;
  constructor() {
    this.filesToUpload = [];
  }
  upload(bookId: number) {
    this.makeFileRequest("http://localhost:8080/book/add/image?id=" + bookId, [], this.filesToUpload).then(
      (resp) => {
        console.log(resp);

      },
      (data) => {
        console.log(data);

      }
    );
  }

  modify(bookId:number){
    console.log(this.filesToUpload);
    if(this.filesToUpload.length>0){
      this.makeFileRequest("http://localhost:8080/book/update/image?id=" + bookId, [], this.filesToUpload).then(
      (resp) => {
        console.log(resp);

      },
      (data) => {
        console.log(data);

      }
    );
    }


    
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  makeFileRequest(url: string, params: Array<String>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (var i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            console.log("image uploaded successfully");
          } else {
            reject(xhr.response);
          }
        }
      }

      xhr.open("POST", url, true);
      xhr.setRequestHeader("Authorization", localStorage.getItem('auth'));
      xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
      xhr.send(formData);


    });
  }
}
