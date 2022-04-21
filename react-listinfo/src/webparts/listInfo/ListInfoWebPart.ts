import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart,
  WebPartContext,
} from "@microsoft/sp-webpart-base";
import * as strings from "ListInfoWebPartStrings";
import ListInfo from "./components/ListInfo";
import { IListInfoProps } from "./components/IListInfoProps";

import { sp } from "@pnp/sp/presets/all";
import {
  PropertyFieldListPicker,
  PropertyFieldListPickerOrderBy,
} from "@pnp/spfx-property-controls/lib/PropertyFieldListPicker";

import {
  ThemeProvider,
  ThemeChangedEventArgs,
  IReadonlyTheme,
} from "@microsoft/sp-component-base";

export interface IListInfoWebPartProps {
  documentTitle: string;
  storageList: string;
  acknowledgementLabel: string;
  acknowledgementMessage: string;
  readMessage: string;
}
export default class ListInfoWebPart extends BaseClientSideWebPart<IListInfoWebPartProps> {
  private _themeProvider: ThemeProvider;
  private _themeVariant: IReadonlyTheme | undefined;

  // Promise:
  protected async onInit(): Promise<void> {
    await super.onInit();
    sp.setup(this.context);
    this._themeProvider = this.context.serviceScope.consume(
      ThemeProvider.serviceKey
    );
    this._themeVariant = this._themeProvider.tryGetTheme();

    this._themeProvider.themeChangedEvent.add(
      this,
      this._handleThemeChangedEvent
    );
  }
  private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {
    this._themeVariant = args.theme;
    this.render();
  }

  public render(): void {
    const element: React.ReactElement<IListInfoProps> = React.createElement(
      ListInfo,
      {
        documentTitle: this.properties.documentTitle,
        currentUserDisplayName: this.context.pageContext.user.displayName,
        storageList: this.properties.storageList,
        acknowledgementLabel: this.properties.acknowledgementLabel,
        acknowledgementMessage: this.properties.acknowledgementMessage,
        readMessage: this.properties.readMessage,
        themeVariant: this._themeVariant,
        configured: this.properties.storageList
          ? this.properties.storageList != ""
          : false,
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldListPicker("storageList", {
                  label: strings.StorageListLabel,
                  selectedList: this.properties.storageList,
                  includeHidden: true,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: "listPickerFieldId",
                  multiSelect: false,
                  baseTemplate: 100,
                }),
                PropertyPaneTextField("documentTitle", {
                  label: strings.DocumentTitleLabel,
                }),
                PropertyPaneTextField("acknowledgementLabel", {
                  label: strings.AcknowledgementLabelLabel,
                }),
                PropertyPaneTextField("acknowledgementMessage", {
                  label: strings.AcknowledgementMessageLabel,
                }),
                PropertyPaneTextField("readMessage", {
                  label: strings.ReadMessageLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
