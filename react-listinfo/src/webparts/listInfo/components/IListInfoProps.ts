import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IListInfoProps {
  // description: string;
  // isDarkTheme: boolean;
  // environmentMessage: string;
  // hasTeamsContext: boolean;
  // userDisplayName: string;
  // message: string;
  // displayName: string;
  // context: WebPartContext;

  documentTitle: string;
  currentUserDisplayName: string;
  storageList: string;
  acknowledgementLabel: string;
  acknowledgementMessage: string;
  readMessage: string;
  themeVariant: IReadonlyTheme | undefined;
  configured: boolean;
  context: WebPartContext;
}
