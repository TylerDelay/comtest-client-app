import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { files } from './example-data';
import { Ticket } from '../model/ticket.model';
import { TicketService } from '../services/ticket.service';


/** File node data with possible child nodes. */
// export interface FileNode {
//   name: string;
//   type: string;
//   children?: FileNode[];
// }

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
  title: string,
  description: string,
  parent_id: number,
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent {

//   /** The TreeControl controls the expand/collapse state of tree nodes.  */
// treeControl = new FlatTreeControl<FlatTreeNode>(node => node.level, node => node.expandable);


//   /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
//   treeFlattener: MatTreeFlattener<Ticket, FlatTreeNode>;

//   /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
//   dataSource: MatTreeFlatDataSource<Ticket, FlatTreeNode>;
//   posts:Ticket[];
//   constructor(private http: HttpClient) {
//     this.http.get<Ticket[]>('http://localhost:8080/api/tickets').subscribe(data => {
//       console.log(data);
//       this.posts = data;

//     this.treeFlattener = new MatTreeFlattener(
//       this.transformer,
//       this.getLevel,
//       this.isExpandable,
//       this.getChildren);

//     this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
//     this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
//     this.dataSource.data = this.posts
//     }
//   )}

//   /** Transform the data to something the tree can read. */
//   transformer(node: Ticket, level: number): FlatTreeNode {
//     return {
//      title : node.title,
//       description: node.description,
//       parent_id: node.parent_id,
//       level: level,
//       expandable: !!node.children && node.children.length > 0
//     };
//   }

//   /** Get the level of the node */
//   getLevel(node: FlatTreeNode): number {
//     return node.level;
//   }

//   /** Get whether the node is expanded or not. */
//   isExpandable(node: FlatTreeNode): boolean {
//     return node.expandable;
//   }

//   /** Get whether the node has children or not. */
//   hasChild = (_: number, node: FlatTreeNode) => node.expandable;

//   /** Get the children for the node. */
//   getChildren(node: Ticket): Ticket[] | null | undefined {
//     return node.children;
//   }
}
