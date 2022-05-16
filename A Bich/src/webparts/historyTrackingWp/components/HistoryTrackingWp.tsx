import * as React from 'react';
import { IHistoryTrackingWpProps } from './IHistoryTrackingWpProps';
import { IDetailsListItem, IHistoryTrackingWpState } from './IHistoryTrackingWpState';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import * as moment from 'moment';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const dateFormat = 'DD/MM/YYYY h:mm:ss';

export default class HistoryTrackingWp extends React.Component<IHistoryTrackingWpProps, IHistoryTrackingWpState> {
  
  private _selection: Selection;
  private _allItems: IDetailsListItem[];
  private _columns: IColumn[];
  constructor(props: IHistoryTrackingWpProps){
    super(props);
    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    // Populate with items for demos.
    this._allItems = [];    
    this._getListData().then((response)=>{
      var item = (response as any).value;      
      for(let i = 0; i <= item.length; i++)
      {
        if (item[i]) {
          this._allItems.push({
            'Id': item[i].Id,
            'Title': item[i].Title,
            'Email': item[i].Email,
            'ClockInDatetime':  this._getDateFormat(item[i].ClockInDatetime),
            'ClockOutDatetime': this._getDateFormat(item[i].ClockOutDatetime)
          });
        }
      }
      
      console.log(this._allItems);
    });

    this._columns = [
      { key: 'column1', name: 'Full name', fieldName: 'Title', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Email', fieldName: 'Email', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column3', name: 'Clock-In', fieldName: 'ClockInDatetime', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column4', name: 'Clock-Out', fieldName: 'ClockOutDatetime', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    this.state = {
      items: this._allItems,
      selectionDetails: this._getSelectionDetails(),
    };
  }
  
  public render(): React.ReactElement<IHistoryTrackingWpProps> {
    const { items, selectionDetails } = this.state;

    return (
      <div>
        <div className={exampleChildClass}>{selectionDetails}</div>
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
            onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
      </div>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListItem).Title;
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onItemInvoked = (item: IDetailsListItem): void => {
    alert(`Full name: ${item.Title}\nEmail: ${item.Email}\nClock in: ${item.ClockInDatetime}\nClock out: ${item.ClockOutDatetime}`);
  }

  private _getListData() : Promise<IDetailsListItem[]>{
    return this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('TimeTrackingManagement')/items?$orderby=Id desc&$top=20`
    ,SPHttpClient.configurations.v1,
    {  
      headers: {  
        'Accept': 'application/json;odata=nometadata',  
        'odata-version': ''  
      }  
    })
    .then((response: SPHttpClientResponse) => {
    return response.json();
    });
  }

  private _getDateFormat(strDate: string)
  {
    if(strDate)
      return moment(strDate).format(dateFormat);
    else
      return "";
  }
}
