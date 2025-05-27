import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-node3',
  imports: [NgOptimizedImage],
  templateUrl: './node3.component.html',
  styleUrl: './node3.component.scss'
})
export class Node3Component {
  altText = 'Lorem "ipsum"';
}
