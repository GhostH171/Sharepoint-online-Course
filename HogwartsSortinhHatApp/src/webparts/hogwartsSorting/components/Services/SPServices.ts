import { fromPairs } from "@microsoft/sp-lodash-subset";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import {
  SPHttpClient,
  SPHttpClientConfiguration,
  SPHttpClientResponse,
} from "@microsoft/sp-http";
import { IDropdownOption } from "office-ui-fabric-react";
import { reject, result } from "lodash";
export class SPOpertations {
  // Get all list context : WebpartContext
  public GetAllList(context: WebPartContext): Promise<IDropdownOption> {
    let resApiUrl: string =
      context.pageContext.web.absoluteUrl +
      "/_api/web/lists(guid'f0fd8525-0d22-4a5a-9987-ccf9fc47dda5')/items";
    return context.spHttpClient
      .get(resApiUrl, SPHttpClient.configurations.v1)
      .then((res: SPHttpClientResponse) => {
        return res.json();
      });
  }
  public static CreateListItem(
    context: WebPartContext,
    HouseName: string
  ): Promise<IDropdownOption> {
    let resApiUrl: string =
      context.pageContext.web.absoluteUrl +
      "/_api/web/lists(guid'f0fd8525-0d22-4a5a-9987-ccf9fc47dda5')/AddValidateUpdateItemUsingPath";
    return context.spHttpClient
      .post(resApiUrl, SPHttpClient.configurations.v1, {
        body: JSON.stringify({
          listItemCreateInfo: {
            FolderPath: {
              DecodedUrl:
                context.pageContext.web.absoluteUrl +
                "/Lists/List%20sorting%20houses",
            },
            UnderlyingObjectType: 0,
          },
          formValues: [
            {
              FieldName: "FullName",
              FieldValue: "Hello",
            },
            {
              FieldName: "House",
              FieldValue: HouseName,
            },
            {
              FieldName: "Dateandtime",
              FieldValue: "23/02/2022",
            },
          ],
          bNewDocumentUpdate: false,
        }),
      })
      .then((res: SPHttpClientResponse) => {
        return res.json();
      });
  }
}
