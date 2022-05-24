import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";

export class SPOpertations {
  // Get all list context : WebpartContext
  public GetExactList(context: WebPartContext): Promise<any> {
    let resApiUrl: string =
      context.pageContext.web.absoluteUrl +
      "/_api/web/lists(guid'0b3b36c4-7d45-4e1a-8ef7-ed592b07c034')/items";
    return context.spHttpClient
      .get(resApiUrl, SPHttpClient.configurations.v1)
      .then((res: SPHttpClientResponse) => {
        return res.json();
      });
  }
}
