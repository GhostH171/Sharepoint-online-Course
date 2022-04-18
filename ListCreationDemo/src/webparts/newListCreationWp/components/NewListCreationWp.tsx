import * as React from 'react';
import styles from './NewListCreationWp.module.scss';
import { INewListCreationWpProps } from './INewListCreationWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {SPHttpClient,SPHttpClientResponse,ISPHttpClientOptions} from '@microsoft/sp-http';
import { Web } from "sp-pnp-js";
import { reject } from 'lodash';

export default class NewListCreationWp extends React.Component<INewListCreationWpProps, {}> {
  constructor(props : INewListCreationWpProps){
    super(props);
  }

  public render(): React.ReactElement<INewListCreationWpProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.newListCreationWp} ${hasTeamsContext ? styles.teams : ''}`}>
        <h3>Creating a new list dynamically </h3> <br></br><br></br><br></br>
        <p>Please fill out the below details to create a new list dynamically</p> <br></br>
        New list name: <br></br> <input type='text' id='txtListName'></input><br></br><br></br>
        new list desc:<br></br> <input type='text' id='txtListDesc'></input><br></br><br></br>
        <input type='button' id='btnCreateNewList' value='Create a new list' onClick={() => this.CreateNewList()}></input>
      </section>
    );
  }

  public CreateNewList = () => {
      var newListName = document.getElementById('txtListName')['value'];
      var newListDesc = document.getElementById('txtListDesc')['value'];
      const listURL = this.props.siteUrl + "/_api/web/lists/GetbyTitle('" + newListName + "')";

      this.props.spHttpClient.get(listURL,SPHttpClient.configurations.v1)
      .then((response : SPHttpClientResponse) => {
        if(response.status === 200)
        {
          alert("A List already does exist with this name.");
          return;
        }

        if(response.status === 404) {
          const url :string = this.props.siteUrl + "/_api/web/lists";
          const listDefination : any = {
            "Title": newListName,
            "Description": newListDesc,
            "AllowContentTypes": false,
            "BaseTemplate": 100,
          };

          const spHttpClientOptions: ISPHttpClientOptions = {
            "body": JSON.stringify(listDefination)
          };

          this.props.spHttpClient.post(url,SPHttpClient.configurations.v1,spHttpClientOptions)
          .then((response:SPHttpClientResponse) => {
            if(response.status === 201)
            {
              alert("A list has been created successfully");              
            }
            else {
              alert("Error message" + response.status + " - " + response.statusText);
            }
          })
        }
        else{
          alert("Error message" + response.status + " - " + response.statusText);
        }
      })
  }
}
