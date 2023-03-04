import { MatTableDataSource } from "@angular/material/table";
import { Comment } from "./comment.modal";
export class Ticket {

  id: number;
  etr_id: string;
  alias_etr_id: number;
  etr_level: string;
  parent_etr: string;
  title: string;
  description: string;
  etr_type : string;
  etr_subtype : string;
  eng_family: number;
  eng_family_model: number;
  reporter: string;
  requestor_source : string;
  requestor : string;
  customer: string;
  assigned_to : string;
  modified_by : string;
  priority: string;
  status : string;
  sub_status : string;
  resolution: string;
  rec_type : string;
  eco_record : string;
  child_etr_list : string;
  check_list : string;
  // comments: string;
  label : string;
  etr_dependency : string;
  etr_duplicate: string;
  etr_attachment : string;
  etr : string;
  parent_id: number;
  createdAt : Date;
  updatedAt : Date;
  children?: Ticket[] ;
  comments?: Comment [];

}

// export class Ticket {
//   id: number;
//   etr_cat: string;
//   etr_id: string;
//   title: string;
//   description: string;
//   etr : string;
// }

// ETR_ID
// 	ALIAS_ETR_ID
// 	ETR_LEVEL
// 	PARENT_ETR
// 	TITLEa
// 	DESCRIPTION
// 	ETR_TYPE
// 	ETR_SUBTYPE
// 	ENG_FAMILY
// 	ENG_FAMILY_MODEL
// 	REPORTER
// 	REQUESTOR_SOURCE
// 	REQUESTOR
// 	CUSTOMER
// 	ASSIGNED_TO
// 	CREATE_DATE             *
// 	MODIFIED_DATE           *
// 	MODIFIED_BY
// 	PRIORITY
// 	STATUS
// 	SUB_STATUS
// 	RESOLUTION
// 	REC_TYPE
// 	ECO_RECORD
// 	CHILD_ETR_LIST
// 	CHECK_LIST
// 	COMMENTS
// 	LABEL
// 	ETR_DEPENDENCY
// 	ETR_DUPLICATE
// 	ETR_ATTACHMENT
