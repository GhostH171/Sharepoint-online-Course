declare interface IListInfoWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  ReadMessageLabel: string;
  AcknowledgementMessageLabel: string;
  AcknowledgementLabelLabel: string;
  DocumentTitleLabel: string;
  StorageListLabel: string;
}

declare module "ListInfoWebPartStrings" {
  const strings: IListInfoWebPartStrings;
  export = strings;
}
