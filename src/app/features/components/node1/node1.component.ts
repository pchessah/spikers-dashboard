import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-node1',
  imports: [NgOptimizedImage],
  templateUrl: './node1.component.html',
  styleUrl: './node1.component.scss'
})
export class Node1Component {
  altText = 'Lorem "ipsum"';
}
