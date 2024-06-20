import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GAME_TITLE_FIELD } from "./GameTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const GameShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="crashPoint" source="crashPoint" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentMultiplier" source="currentMultiplier" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bet" target="gameId" label="Bets">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <TextField label="cashOutMultiplier" source="cashOutMultiplier" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
