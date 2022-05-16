export interface IListItem {  
    Title?: string;  
    Id: number;  
}  

export interface IUser {
    fullName: string;
    email: string;
  }

export interface IUserTrackingState {  
    id: number;
    status: string;
    fullName: string;
    email: string;
    currentDatetime: string;
    showClockIn : boolean;
  } 