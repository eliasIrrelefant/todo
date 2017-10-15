export enum Status {
  open,
  done,
}
export class Todo {
  id: number;
  title: string;
  status: Status;
  created: Date;
}
