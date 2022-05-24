import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";
import * as dayjs from "dayjs";

export class SPOpertations {
  // Get all list context : WebpartContext
  public GetAllList(context: WebPartContext): Promise<any> {
    let resApiUrl: string =
      context.pageContext.web.absoluteUrl +
      "/_api/web/lists(guid'a82c76bf-8629-4c09-8cc5-7a7d2a446a13')/items?$orderby=FullName asc";
    return context.spHttpClient
      .get(resApiUrl, SPHttpClient.configurations.v1)
      .then((res: SPHttpClientResponse) => {
        return res.json();
      });
  }

  // Create list item
  public static CreateListItem(
    context: WebPartContext,
    HouseName: string,
    FullName: string
  ): Promise<IDropdownOption> {
    let resApiUrl: string =
      context.pageContext.web.absoluteUrl +
      "/_api/web/lists/getbytitle('List sorting houses')/items";

    return context.spHttpClient
      .post(resApiUrl, SPHttpClient.configurations.v1, {
        headers: {
          Accept: "application/json;odata=nometadata",
          "Content-type": "application/json;odata=nometadata",
          "odata-version": "",
        },
        body: JSON.stringify({
          FullName: FullName,
          House: HouseName,
          Dateandtime: dayjs().format("YYYY-MM-DD"),
        }),
      })
      .then((res: SPHttpClientResponse) => {
        return res.json();
      });
  }

  // Dislay same house
  public GetHouseList(
    context: WebPartContext,
    HouseName: string
  ): Promise<any> {
    let resApiUrl: string =
      context.pageContext.web.absoluteUrl +
      `/_api/web/lists(guid'a82c76bf-8629-4c09-8cc5-7a7d2a446a13')/items?$orderby=FullName asc&$filter=House eq '${HouseName}'`;
    return context.spHttpClient
      .get(resApiUrl, SPHttpClient.configurations.v1)
      .then((res: SPHttpClientResponse) => {
        return res.json();
      });
  }
}
