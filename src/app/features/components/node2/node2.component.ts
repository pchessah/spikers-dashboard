import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-node2',
  imports: [NgOptimizedImage],
  templateUrl: './node2.component.html',
  styleUrl: './node2.component.scss'
})
export class Node2Component {
  altText = 'Lorem "ipsum"';
}
