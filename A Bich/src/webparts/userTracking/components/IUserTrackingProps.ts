import { SPHttpClient } from '@microsoft/sp-http';

export interface IUserTrackingProps {
  description: string;
  spHttpClient: SPHttpClient;  
  siteUrl: string; 
}
