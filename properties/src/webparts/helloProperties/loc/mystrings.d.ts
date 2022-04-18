declare interface IHelloPropertiesWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'HelloPropertiesWebPartStrings' {
  const strings: IHelloPropertiesWebPartStrings;
  export = strings;
}
