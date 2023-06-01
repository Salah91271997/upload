import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}
  selectedFiles: File[] = [];
  selectedFileNames: string[] = [];
  selectedFileUrls: string[] = [];
  ngOnInit(): void {}
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const file = files[0]; // only use the first file
      this.selectedFiles = [file];
      this.selectedFileNames = [file.name];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedFileUrls = [reader.result as string];
      };
    }
  }
  getSelectedFileUrl(file: File): string {
    const index = this.selectedFiles.indexOf(file);
    return this.selectedFileUrls[index];
  }
}
