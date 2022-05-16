export interface IDetailsListItem {
    Id: number;
    Title: string;
    Email: string;
    ClockInDatetime: string;
    ClockOutDatetime: string;
  }

export interface IHistoryTrackingWpState {
    items: IDetailsListItem[];
    selectionDetails: string;
}