import { useState, useEffect, FunctionComponent } from "react";
import * as React from "react";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import {
  Checkbox,
  Text,
  IStackTokens,
  ITheme,
  Stack,
} from "office-ui-fabric-react";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { Placeholder } from "@pnp/spfx-controls-react";
import styles from "./ListInfo.module.scss";
import { IListInfoProps } from "./IListInfoProps";
import { escape, fromPairs } from "@microsoft/sp-lodash-subset";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
const ReadReceiptWebpart: FunctionComponent<IListInfoProps> = (props) => {
  const [showMessage, setShowMessage] = useState<boolean>(true);
  const { semanticColors }: IReadonlyTheme = props.themeVariant;

  const fetchData = async () => {
    const items: any[] = await sp.web.lists
      .getById(props.storageList)
      .items.select("Author/ID", "Author/Title", "Author/Name", "Title")
      .expand("Author")
      .top(1)
      .filter(
        `Author/Title equal '${props.currentUserDisplayName}' and Title equal '${props.documentTitle}'`
      )
      .get();
    if (items.length === 0) {
      setShowMessage(true);
    }
  };

  useEffect(() => {
    if (props.storageList && props.storageList != "") {
      fetchData();
    }
  }, [props]);

  const _onConfigure = () => {
    // Context of the web part
    props.context.propertyPane.open();
  };

  function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
    sp.web.lists.getById(props.storageList).items.add({
      Title: props.documentTitle,
    });
    setShowMessage(false);
  }
  const mainStackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 10,
  };

  return props.configured ? (
    <Stack style={{ backgroundColor: semanticColors.blockingBackground }}>
      {showMessage ? (
        <Stack
          style={{ color: semanticColors.bodyText }}
          tokens={mainStackTokens}
        >
          <Text>{props.acknowledgementMessage}</Text>
          <Text variant="large">'{props.documentTitle}'</Text>
          <Checkbox
            theme={props.themeVariant as ITheme}
            label={props.acknowledgementLabel}
            onChange={_onChange}
          />
        </Stack>
      ) : (
        <Stack style={{ color: semanticColors.bodyText }}>
          <Text variant="large">{props.documentTitle}</Text>
          <Text>{props.readMessage}</Text>
        </Stack>
      )}
    </Stack>
  ) : (
    <Placeholder
      iconName="Edit"
      iconText="Configure Read Receipt"
      description="Please configure the web part by choosing a list"
      buttonLabel="Configure"
      onConfigure={_onConfigure}
    />
  );
};
export default ReadReceiptWebpart;
