import { SPHttpClient } from '@microsoft/sp-http';

export interface IHistoryTrackingWpProps {
    description: string;
    spHttpClient: SPHttpClient;  
    siteUrl: string;
}
