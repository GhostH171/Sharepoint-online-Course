import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";

export class SPOpertations {
  // Get all list context : WebpartContext
  public GetExactList(context: WebPartContext): Promise<any> {
    const listName = encodeURIComponent("Users");
    let resApiUrl: string =
      context.pageContext.web.absoluteUrl +
      `/_api/web/lists/getbytitle('${listName}')/items?$orderby= UserName asc`;

    return context.spHttpClient
      .get(resApiUrl, SPHttpClient.configurations.v1)
      .then((res: SPHttpClientResponse) => {
        return res.json();
      });
  }

  // Create list item
  public static CreateListItem(
    context: WebPartContext,
    username: string,
    password: string
  ): Promise<IDropdownOption> {
    let resApiUrl: string =
      context.pageContext.web.absoluteUrl +
      "/_api/web/lists/getbytitle('Users')/items";

    return context.spHttpClient
      .post(resApiUrl, SPHttpClient.configurations.v1, {
        headers: {
          Accept: "application/json;odata=nometadata",
          "Content-type": "application/json;odata=nometadata",
          "odata-version": "",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      .then((res: SPHttpClientResponse) => {
        return res.json();
      });
  }
}
