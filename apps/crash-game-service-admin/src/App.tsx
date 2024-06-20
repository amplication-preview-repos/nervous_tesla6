import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { ChatMessageList } from "./chatMessage/ChatMessageList";
import { ChatMessageCreate } from "./chatMessage/ChatMessageCreate";
import { ChatMessageEdit } from "./chatMessage/ChatMessageEdit";
import { ChatMessageShow } from "./chatMessage/ChatMessageShow";
import { BetList } from "./bet/BetList";
import { BetCreate } from "./bet/BetCreate";
import { BetEdit } from "./bet/BetEdit";
import { BetShow } from "./bet/BetShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CrashGameService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="ChatMessage"
          list={ChatMessageList}
          edit={ChatMessageEdit}
          create={ChatMessageCreate}
          show={ChatMessageShow}
        />
        <Resource
          name="Bet"
          list={BetList}
          edit={BetEdit}
          create={BetCreate}
          show={BetShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
