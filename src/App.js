import React, { useState } from "react";

import "./App.css";
import Header from "./components/header/header.component";
import SideDrawer from "./components/drawer/drawer.component";

import Home from "./pages/home/home.component";
import Bubble from "./pages/bubble/bubble.component";
import Selection from "./pages/selection/selection.component";
import Insertion from "./pages/insertion/insertion.component";
import Merge from "./pages/merge/merge.component";
import Quick from "./pages/quick/quick.component";
import Shell from "./pages/shell/shell.component";

import { drawerWidth } from "./components/drawer/drawer.component";

import Hidden from "@material-ui/core/Hidden";

import { Route, Switch } from "react-router-dom";

function App() {
	const [showDrawer, setShowDrawer] = useState(false);

	const switchJSX = (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/bubble" component={Bubble} exact />
			<Route path="/selection" component={Selection} exact />
			<Route path="/insertion" component={Insertion} exact />
			<Route path="/shell" component={Shell} exact />
			<Route path="/merge" component={Merge} exact />
			<Route path="/quick" component={Quick} exact />
		</Switch>
	);

	return (
		<div className="App">
			<div className="side-drawer-container">
				<SideDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
			</div>
			<Header setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
			<Hidden smDown>
				<div
					className="application"
					style={{
						width: `calc(100vw - ${drawerWidth}px)`,
						marginLeft: drawerWidth,
					}}
				>
					{switchJSX}
				</div>
			</Hidden>
			<Hidden mdUp>
				<div>{switchJSX}</div>
			</Hidden>
		</div>
	);
}

export default App;
