import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-toast',
  templateUrl: './simple-toast.component.html',
  styleUrls: ['./simple-toast.component.scss'],
})
export class SimpleToastComponent implements OnInit {
  @Input() show!: boolean;
  @Input() message!: string;

  constructor() {}

  ngOnInit(): void {}
}
