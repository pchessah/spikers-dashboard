import { Component } from '@angular/core';
import {  NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-node4',
  imports: [NgOptimizedImage],
  templateUrl: './node4.component.html',
  styleUrl: './node4.component.scss'
})
export class Node4Component {
  altText = 'Lorem "ipsum"';

}
